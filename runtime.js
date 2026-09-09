/* Minimal runtime that renders the portfolio template.
   Supports: {{ path }} bindings in text + attributes, <sc-for list as>, <sc-if value>,
   onClick/onPointer* handlers, ref="{{ x }}", style-hover="...", <image-slot>.
   Nodes are created once and patched in place so CSS transitions keep working. */
(function (global) {
  "use strict";

  global.React = { createRef: function () { return { current: null }; } };

  function DCLogic() {}
  DCLogic.prototype.setState = function (patch, cb) {
    var p = typeof patch === "function" ? patch(this.state) : patch;
    for (var k in p) this.state[k] = p[k];
    global.__dcSchedule();
    if (cb) cb();
  };
  global.DCLogic = DCLogic;

  function get(scope, expr) {
    expr = String(expr).trim();
    if (expr === "false") return false;
    if (expr === "true") return true;
    if (expr === "null") return null;
    var parts = expr.split(".");
    var v = scope[parts[0]];
    for (var i = 1; i < parts.length && v != null; i++) v = v[parts[i]];
    return v;
  }

  function toStr(v) { return v == null || v === false ? "" : String(v); }

  var RE = /\{\{([^}]*)\}\}/g;
  function parseParts(s) {
    var out = [], last = 0, m;
    RE.lastIndex = 0;
    while ((m = RE.exec(s))) {
      if (m.index > last) out.push({ text: s.slice(last, m.index) });
      out.push({ expr: m[1].trim() });
      last = m.index + m[0].length;
    }
    if (last < s.length) out.push({ text: s.slice(last) });
    return out;
  }
  function render(parts, scope) {
    var s = "";
    for (var i = 0; i < parts.length; i++) s += parts[i].expr ? toStr(get(scope, parts[i].expr)) : parts[i].text;
    return s;
  }

  var EVENTS = {
    onclick: "click", onpointerdown: "pointerdown", onpointermove: "pointermove",
    onpointerup: "pointerup", onpointerleave: "pointerleave", onmouseenter: "mouseenter",
    onmouseleave: "mouseleave", onerror: "error", oninput: "input", onchange: "change"
  };

  /* compileNode -> { nodes: [DOM], update(scope) } */
  function compileNode(tpl) {
    if (tpl.nodeType === 3) {
      var txt = tpl.nodeValue;
      if (txt.indexOf("{{") === -1) {
        var st = document.createTextNode(txt);
        return { nodes: [st], update: function () {} };
      }
      var parts = parseParts(txt);
      var tn = document.createTextNode("");
      return { nodes: [tn], update: function (scope) { tn.nodeValue = render(parts, scope); } };
    }
    if (tpl.nodeType !== 1) return null;

    var tag = tpl.tagName.toLowerCase();
    if (tag === "sc-for") return compileFor(tpl);
    if (tag === "sc-if") return compileIf(tpl);
    if (tag === "helmet") return null;

    var el, isSlot = tag === "image-slot";
    if (isSlot) {
      el = document.createElement("div");
      el.className = "islot";
    } else {
      el = document.createElement(tag);
    }

    var updates = [];
    var hoverCss = null;
    var attrs = Array.prototype.slice.call(tpl.attributes);
    var styleParts = null, slotSrcParts = null;

    attrs.forEach(function (a) {
      var name = a.name, val = a.value;
      if (name.indexOf("hint-") === 0) return;
      if (name === "style-hover") { hoverCss = val; return; }

      var lower = name.toLowerCase();
      if (EVENTS[lower] && val.indexOf("{{") === 0) {
        var expr = val.replace(/[{}]/g, "").trim();
        el.addEventListener(EVENTS[lower], function (e) {
          var fn = get(el.__scope || {}, expr);
          if (typeof fn === "function") fn(e);
        });
        return;
      }
      if (name === "ref") {
        var rexpr = val.replace(/[{}]/g, "").trim();
        updates.push(function (scope) {
          var r = get(scope, rexpr);
          if (r && typeof r === "object") r.current = el;
        });
        return;
      }
      if (val.indexOf("{{") === -1) {
        if (isSlot && (name === "src" || name === "placeholder" || name === "shape")) return;
        el.setAttribute(name, val);
        return;
      }
      var p = parseParts(val);
      if (isSlot && name === "src") { slotSrcParts = p; return; }
      if (isSlot && (name === "placeholder" || name === "shape" || name === "id")) return;
      if (name === "style") {
        styleParts = p;
        updates.push(function (scope) {
          var css = render(p, scope);
          if (css === el.__baseCss) return;
          el.__baseCss = css;
          el.style.cssText = css + (el.__hovering && hoverCss ? ";" + hoverCss : "");
        });
        return;
      }
      updates.push(function (scope) {
        var v = render(p, scope);
        if (el.getAttribute(name) !== v) el.setAttribute(name, v);
      });
    });

    if (hoverCss) {
      if (!styleParts) el.__baseCss = el.getAttribute("style") || "";
      el.addEventListener("mouseenter", function () {
        el.__hovering = true;
        el.style.cssText = (el.__baseCss || "") + ";" + hoverCss;
      });
      el.addEventListener("mouseleave", function () {
        el.__hovering = false;
        el.style.cssText = el.__baseCss || "";
      });
    }

    if (isSlot) {
      updates.push(function (scope) {
        var src = slotSrcParts ? render(slotSrcParts, scope) : "";
        if (el.__src === src) return;
        el.__src = src;
        if (src) {
          el.style.background = "#0f0f0f center/cover no-repeat url('" + src + "')";
          el.classList.remove("islot-empty");
        } else {
          el.style.background = "";
          el.classList.add("islot-empty");
        }
      });
    }

    var kids = [];
    Array.prototype.forEach.call(tpl.childNodes, function (c) {
      var unit = compileNode(c);
      if (!unit) return;
      kids.push(unit);
      unit.nodes.forEach(function (n) { el.appendChild(n); });
    });

    return {
      nodes: [el],
      update: function (scope) {
        el.__scope = scope;
        for (var i = 0; i < updates.length; i++) updates[i](scope);
        for (var j = 0; j < kids.length; j++) kids[j].update(scope);
      }
    };
  }

  function compileChildren(tpl) {
    var units = [];
    Array.prototype.forEach.call(tpl.childNodes, function (c) {
      var u = compileNode(c);
      if (u) units.push(u);
    });
    return units;
  }

  function compileFor(tpl) {
    var listExpr = (tpl.getAttribute("list") || "").replace(/[{}]/g, "").trim();
    var asName = tpl.getAttribute("as") || "item";
    var anchor = document.createComment("for:" + asName);
    var items = [];
    return {
      nodes: [anchor],
      update: function (scope) {
        var list = get(scope, listExpr);
        if (!Array.isArray(list)) list = [];
        while (items.length > list.length) {
          var dead = items.pop();
          dead.units.forEach(function (u) { u.nodes.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); }); });
        }
        while (items.length < list.length) {
          var itemScope = Object.create(scope);
          var units = compileChildren(tpl);
          units.forEach(function (u) {
            u.nodes.forEach(function (n) { anchor.parentNode.insertBefore(n, anchor); });
          });
          items.push({ scope: itemScope, units: units });
        }
        for (var i = 0; i < items.length; i++) {
          items[i].scope[asName] = list[i];
          items[i].scope["$index"] = i;
          for (var j = 0; j < items[i].units.length; j++) items[i].units[j].update(items[i].scope);
        }
      }
    };
  }

  function compileIf(tpl) {
    var expr = (tpl.getAttribute("value") || "").replace(/[{}]/g, "").trim();
    var anchor = document.createComment("if");
    var mounted = null;
    return {
      nodes: [anchor],
      update: function (scope) {
        var v = get(scope, expr);
        var on = !!v && v !== "";
        if (on && !mounted) {
          mounted = compileChildren(tpl);
          mounted.forEach(function (u) {
            u.nodes.forEach(function (n) { anchor.parentNode.insertBefore(n, anchor); });
          });
        } else if (!on && mounted) {
          mounted.forEach(function (u) { u.nodes.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); }); });
          mounted = null;
        }
        if (mounted) for (var i = 0; i < mounted.length; i++) mounted[i].update(scope);
      }
    };
  }

  global.__dcMount = function (ComponentClass, templateId, hostId) {
    var tpl = document.getElementById(templateId);
    var host = document.getElementById(hostId);
    var comp = new ComponentClass();
    var scope = {};
    var units = compileChildren(tpl.content);
    units.forEach(function (u) { u.nodes.forEach(function (n) { host.appendChild(n); }); });

    var queued = false;
    function flush() {
      queued = false;
      var vals = comp.renderVals();
      for (var k in scope) delete scope[k];
      for (var k2 in vals) scope[k2] = vals[k2];
      for (var i = 0; i < units.length; i++) units[i].update(scope);
    }
    global.__dcSchedule = function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(flush);
    };
    flush();
    if (comp.componentDidMount) comp.componentDidMount();
    return comp;
  };
  global.__dcSchedule = function () {};
})(window);
