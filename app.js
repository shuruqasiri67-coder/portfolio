const STR = {
  ar: {
    mark: "شروق عسيري", navWork: "الأعمال", topMark: "ملف الأعمال", badge: "صناعة محتوى · أنظمة · أتمتة",
    name: "shuruq ahmad asiri",
    tagline: "بين صناعة المحتوى وبناء الأنظمة اللي تشتغل خلف الكواليس.",
    ctaWork: "شوف أعمالي", ctaContact: "تواصل معي",
    aboutKicker: "نبذة", aboutLead: "", aboutRest: "عني", aboutMe: "أنا.", portraitHint: "أفلتي صورتك الشخصية هنا",
    aboutTitle: "أشتغل على الجهتين: الواجهة اللي يشوفها العميل، والنظام اللي يشتغل تحتها.",
    aboutBody: "أصنع محتوى بصري للمتاجر والعلامات الصغيرة، وأبني لها في نفس الوقت المواقع والأنظمة اللي تستقبل العميل وترد عليه وتنظّم شغله. أستخدم الذكاء الاصطناعي كأداة داخل هذا المسار — في التنفيذ والأتمتة، مو كغاية بحد ذاتها.",
    workKicker: "الأعمال", workTitle: "مشاريع مختارة",
    workNote: "كل بطاقة خدمة — اضغط على البطاقة الوسطى لتفتح صفحة أعمالها.",
    svcKicker: "الخدمات", svcTitle: "خدماتي", svcHint: "اضغط على البطاقة أو النقاط للتنقل بينها.",
    contactKicker: "تواصل", contactTitle: "عندك مشروع أو فكرة؟ ابدأ برسالة.",
    copy: "نسخ الإيميل", copied: "تم النسخ ✓",
    footer: "shuruq ahmad asiri — بورتفوليو", freelanceLabel: "رخصة عمل حر", freelanceNo: "FL-315047743",
    problem: "المشكلة", approach: "طريقتي", result: "النتيجة",
    tools: ["n8n", "Make", "Claude", "ElevenLabs", "CapCut", "Figma", "Notion"],
    back: "رجوع", soonLabel: "مساحة لعمل قادم", pageIntro: "الأعمال المنشورة تحت هذه الخدمة.",
    shopOraAbout: {
      title: "نبذة عن مشروع شوب أورا",
      lead: "شوب أورا منصة إلكترونية تجمع مواقع التسوق العالمية الموثوقة في مكان واحد، وتقدّمها للمتسوّقة الخليجية مرتّبة ومصنّفة وجاهزة للتصفّح.",
      blocks: [
        { label: "المشكلة", text: "المتسوّقة اليوم تكتشف المواقع بشكل عشوائي — عبر فيديو عابر أو توصية من صديقة — ثم تنسى الاسم ولا تجده مرة أخرى. وحتى حين تجده، تبقى الأسئلة نفسها: هل الموقع موثوق؟ هل يشحن للسعودية؟ كم التكلفة الحقيقية بعد الشحن؟" },
        { label: "الحل", text: "تعمل المنصة كدليل تسوّق مُنسَّق. كل موقع يُضاف إليها يمرّ بمراجعة شخصية قبل النشر، ويُصنَّف ضمن أقسامه (عبايات، فساتين مناسبات، أحذية، حقائب، عطور)، مع معلوماته الأساسية: بلد المنشأ، نطاق الأسعار، وسياسة الشحن للخليج." },
        { label: "الجمهور المستهدف", text: "نساء السعودية والخليج بين ٢٥ و٤٤ سنة، يبحثن عن قطع مميزة غير متكررة بأسعار معقولة، ويفضّلن التسوّق الإلكتروني على المتاجر التقليدية." },
        { label: "نموذج العمل", text: "المحتوى على تيك توك يبني الثقة ويعرّف بالمواقع، والمنصة تحتفظ بها وتنظّمها. الإيرادات تأتي لاحقاً من العمولات وأكواد الخصم والشراكات مع المتاجر." },
        { label: "ما يميّزها", text: "الفلترة اليدوية والحياد — لا مواقع مدفوعة ولا إعلانات، والمحتوى قائم على تجربة فعلية." }
      ]
    },
    cats: [
      { title: "بناء المواقع وصفحات الهبوط", desc: "مواقع تعريفية وصفحات هبوط جاهزة للنشر.", tags: ["ويب", "صفحات هبوط"], count: 3 },
      { title: "صناعة محتوى UGC", desc: "فيديوهات واقعية للمنتجات للمتاجر والعلامات الصغيرة.", tags: ["UGC", "فيديو"], count: 3 },
      { title: "رد آلي صوتي للحجوزات", desc: "أنظمة تستقبل المكالمات وتأخذ الحجوزات.", tags: ["صوت", "أتمتة"], count: 2 },
      { title: "أتمتة المهام المتكررة", desc: "تحويل الإجراءات اليومية إلى أنظمة تشتغل تلقائياً.", tags: ["أنظمة", "n8n"], count: 2 }
    ],
    projects: [
      { title: "ShopOra", status: "مباشر", href: "https://shoporaworld.com/", src: "https://shoporaworld.com/og-image.png", linkLabel: "زيارة الموقع ↗",
        desc: "منصة تجمع متاجر عالمية تشحن للسعودية في مكان واحد، بالعربي.",
        tags: ["منصة ويب", "تجربة تسوق", "عربي/إنجليزي"],
        problem: "المتسوقة تدور بين عشرات المواقع العالمية بدون ما تعرف مين يشحن للسعودية ولا كم السعر بعد الضريبة.",
        approach: "بنيت مول إلكتروني يجمع المتاجر بأقسام واضحة — فساتين، عطور، عناية، أطفال — مع فلترة بالسعر وبيانات الشحن والضريبة لكل متجر، وواجهة عربية أولاً مع نسخة إنجليزية.",
        result: "موقع مباشر على shoporaworld.com يغطي مئات المتاجر عبر أقسام متعددة." },
      { title: "موقعي الشخصي", status: "مباشر", desc: "بورتفوليو صفحة واحدة ثنائي اللغة بمشهد ثلاثي الأبعاد في الواجهة.",
        tags: ["تصميم واجهات", "WebGL", "ثنائي اللغة"],
        problem: "احتجت مساحة واحدة تجمع المحتوى والأنظمة اللي أشتغل عليها بدل ما تكون متفرقة.",
        approach: "صفحة واحدة بهوية خمرية، تبديل عربي/إنجليزي كامل الاتجاه، ومشهد قماش مخملي متحرك بشيدر خفيف.",
        result: "الموقع اللي تشوفينه الآن، وأول عمل في القائمة." },
      { title: "مساحة لعمل قادم", status: "قريباً", desc: "بطاقة جاهزة — بدّلي الصورة والنص عند أول مشروع.",
        tags: ["UGC", "فيديو"],
        problem: "—", approach: "—", result: "—" },
      { title: "مساحة لعمل قادم", status: "قريباً", desc: "بطاقة جاهزة — بدّلي الصورة والنص عند أول مشروع.",
        tags: ["أتمتة", "أنظمة"],
        problem: "—", approach: "—", result: "—" }
    ],
    services: [
      { num: "01", title: "صناعة محتوى UGC", desc: "فيديوهات واقعية للمنتجات تناسب المتاجر والعلامات الصغيرة على تيك توك وانستقرام." },
      { num: "02", title: "بناء المواقع وصفحات الهبوط", desc: "موقع تعريفي أو صفحة هبوط جاهزة للنشر، من الفكرة حتى التنفيذ." },
      { num: "03", title: "رد آلي صوتي للحجوزات", desc: "نظام يستقبل مكالمات العملاء ويأخذ الحجز أو يجاوب على الاستفسارات المتكررة بدون تدخل." },
      { num: "04", title: "أتمتة المهام المتكررة", desc: "تحويل الإجراءات اليومية — الردود، التنظيم، المتابعة — إلى أنظمة تشتغل تلقائياً." }
    ],
    links: [{ label: "واتساب", href: "https://wa.me/966502443133", slug: "whatsapp" }, { label: "تيك توك", href: "#", slug: "tiktok" }]
  },
  en: {
    mark: "Shuruq Asiri", navWork: "Work", topMark: "My work", badge: "Content · Systems · Automation",
    name: "shuruq ahmad asiri",
    tagline: "Between making content and building the systems that run behind the scenes.",
    ctaWork: "See my work", ctaContact: "Get in touch",
    aboutKicker: "About", aboutLead: "a", aboutRest: "bout", aboutMe: "me.", portraitHint: "Drop your portrait here",
    aboutTitle: "I work on both sides: the surface a client sees, and the system running under it.",
    aboutBody: "I make visual content for small shops and brands, and build the sites and systems that greet their customers, answer them, and keep the work organised. AI is a tool inside that process — in execution and automation, not an end in itself.",
    workKicker: "Work", workTitle: "Selected projects",
    workNote: "One card per service — click the centre card to open its work page.",
    svcKicker: "Services", svcTitle: "My services", svcHint: "Tap a card or the dots to move through them.",
    contactKicker: "Contact", contactTitle: "Got a project or an idea? Start with a message.",
    copy: "Copy email", copied: "Copied ✓",
    footer: "shuruq ahmad asiri — Portfolio", freelanceLabel: "Freelance licence", freelanceNo: "FL-315047743",
    problem: "Problem", approach: "Approach", result: "Result",
    tools: ["n8n", "Make", "Claude", "ElevenLabs", "CapCut", "Figma", "Notion"],
    back: "Back", soonLabel: "Slot for upcoming work", pageIntro: "Work published under this service.",
    shopOraAbout: {
      title: "About ShopOra",
      lead: "ShopOra is a platform that gathers trusted international shopping sites in one place and presents them to Gulf shoppers — sorted, categorised and ready to browse.",
      blocks: [
        { label: "Problem", text: "Shoppers find sites at random — a passing video, a friend's recommendation — then forget the name and never find it again. And even when they do, the same questions remain: is the site trustworthy? Does it ship to Saudi Arabia? What does it really cost after shipping?" },
        { label: "Solution", text: "The platform works as a curated shopping directory. Every site is personally reviewed before it goes live, then filed under its categories (abayas, occasion dresses, shoes, bags, perfume) with its essentials: country of origin, price range, and shipping policy to the Gulf." },
        { label: "Audience", text: "Women in Saudi Arabia and the Gulf aged 25 to 44, looking for distinctive pieces at reasonable prices, who prefer shopping online over traditional stores." },
        { label: "Business model", text: "TikTok content builds trust and introduces the sites; the platform keeps and organises them. Revenue comes later from commissions, discount codes, and partnerships with the stores." },
        { label: "What sets it apart", text: "Hand-picked and independent — no paid placements, no ads, and every entry based on actual experience." }
      ]
    },
    cats: [
      { title: "Sites and landing pages", desc: "Profile sites and launch-ready landing pages.", tags: ["Web", "Landing"], count: 3 },
      { title: "UGC content", desc: "Real-feeling product videos for small shops and brands.", tags: ["UGC", "Video"], count: 3 },
      { title: "Voice booking agent", desc: "Systems that take calls and book appointments.", tags: ["Voice", "Automation"], count: 2 },
      { title: "Task automation", desc: "Daily routines turned into systems that run themselves.", tags: ["Systems", "n8n"], count: 2 }
    ],
    projects: [
      { title: "ShopOra", status: "Live", href: "https://shoporaworld.com/", src: "https://shoporaworld.com/og-image.png", linkLabel: "Visit site ↗",
        desc: "One place gathering global stores that ship to Saudi Arabia, in Arabic.",
        tags: ["Web platform", "Shopping UX", "Bilingual"],
        problem: "Shoppers hop across dozens of international sites without knowing who ships to Saudi Arabia or what the price is after tax.",
        approach: "An online mall grouping stores into clear categories — dresses, perfume, beauty, kids — with price filtering, shipping and tax notes per store, and an Arabic-first interface with an English version.",
        result: "Live at shoporaworld.com, covering hundreds of stores across categories." },
      { title: "This portfolio", status: "Live", desc: "A bilingual one-page portfolio with a shader scene in the hero.",
        tags: ["UI design", "WebGL", "Bilingual"],
        problem: "I needed one place holding both the content work and the systems work instead of scattered links.",
        approach: "A single page in a velvet palette, full RTL/LTR switching, and a soft cloth shader behind the type.",
        result: "The site you are looking at — and the first entry in the list." },
      { title: "Slot for upcoming work", status: "Soon", desc: "A ready card — swap the image and the text with your first project.",
        tags: ["UGC", "Video"], problem: "—", approach: "—", result: "—" },
      { title: "Slot for upcoming work", status: "Soon", desc: "A ready card — swap the image and the text with your first project.",
        tags: ["Automation", "Systems"], problem: "—", approach: "—", result: "—" }
    ],
    services: [
      { num: "01", title: "UGC content", desc: "Real-feeling product videos for small shops and brands on TikTok and Instagram." },
      { num: "02", title: "Sites and landing pages", desc: "A profile site or a launch-ready landing page, from idea to live." },
      { num: "03", title: "Voice booking agent", desc: "A system that takes client calls, books appointments, and answers repeat questions unattended." },
      { num: "04", title: "Task automation", desc: "Turning daily routines — replies, sorting, follow-up — into systems that run themselves." }
    ],
    links: [{ label: "WhatsApp", href: "https://wa.me/966502443133", slug: "whatsapp" }, { label: "TikTok", href: "#", slug: "tiktok" }]
  }
};

class Component extends DCLogic {
  state = { lang: "ar", theme: "light", active: null, copied: false, svc: 0, proj: 0, page: null, work: 0 };
  canvasRef = React.createRef();
  railRef = React.createRef();

  componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.theme);
    document.documentElement.setAttribute("dir", this.state.lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", this.state.lang);
    this.initThree();
    this.setLightUniform(this.state.theme);
  }
  componentWillUnmount() {
    this.stopped = true;
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.io) this.io.disconnect();
    if (this.ro) this.ro.disconnect();
    window.removeEventListener("pointermove", this.onMove);
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("deviceorientation", this.onTiltDev);
    document.removeEventListener("visibilitychange", this.onVis);
  }

  reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initReveal() {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const sibs = Array.from(e.target.parentElement ? e.target.parentElement.children : []).filter(n => n.classList.contains("rv"));
        const i = Math.max(0, sibs.indexOf(e.target));
        e.target.style.transitionDelay = Math.min(i * 70, 350) + "ms";
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    this.revealIO = io;
    this.scanReveal();
    document.querySelectorAll(".rv:not(.in)").forEach(function (n) { if (n.getBoundingClientRect().top < window.innerHeight) n.classList.add("in"); });
    setTimeout(() => document.querySelectorAll(".rv:not(.in)").forEach(n => {
      if (n.getBoundingClientRect().top < window.innerHeight * 1.2) n.classList.add("in");
    }), 900);
    this.mo = new MutationObserver(() => this.scanReveal());
    this.mo.observe(document.body, { childList: true, subtree: true });
  }
  scanReveal() {
    document.querySelectorAll(".rv:not(.in)").forEach(n => this.revealIO.observe(n));
  }

  initThree() {
    const canvas = this.canvasRef.current;
    if (!canvas || !window.THREE) return;
    const THREE = window.THREE;
    const small = Math.min(window.innerWidth, window.innerHeight) < 700;
    const seg = small ? 90 : 170;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: !small, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.9, 4.2);
    camera.lookAt(0, -0.15, 0);

    const uniforms = {
      uTime: { value: 0 }, uMouse: { value: new THREE.Vector2(0, 0) }, uScroll: { value: 0 },
      uDeep: { value: new THREE.Color("#141414") }, uMauve: { value: new THREE.Color("#4a4a4a") },
      uPink: { value: new THREE.Color("#f2f2f2") }, uLight: { value: 1 }
    };
    this.uniforms = uniforms;

    const mat = new THREE.ShaderMaterial({
      uniforms, transparent: true,
      vertexShader: `
        uniform float uTime; uniform vec2 uMouse; uniform float uScroll;
        varying vec2 vUv; varying vec3 vPos; varying vec3 vNormalW;
        float wave(vec2 p, float t){
          float e = sin(p.x*1.7 + t*0.55) * 0.24;
          e += sin(p.y*2.1 - t*0.42) * 0.18;
          e += sin((p.x+p.y)*1.25 + t*0.31) * 0.16;
          e += sin(p.x*4.3 - p.y*3.1 + t*0.8) * 0.05;
          return e;
        }
        void main(){
          vUv = uv;
          vec3 p = position;
          float t = uTime + uScroll*2.2;
          vec2 m = uMouse*0.8;
          float d = wave(p.xy + m, t) * (1.0 + uScroll*0.35);
          float e = 0.06;
          float dx = wave(p.xy + vec2(e,0.0) + m, t) - d;
          float dy = wave(p.xy + vec2(0.0,e) + m, t) - d;
          p.z += d;
          vec3 n = normalize(vec3(-dx/e, -dy/e, 1.0));
          vec4 wp = modelMatrix * vec4(p,1.0);
          vPos = wp.xyz;
          vNormalW = normalize(mat3(modelMatrix) * n);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,
      fragmentShader: `
        uniform vec3 uDeep; uniform vec3 uMauve; uniform vec3 uPink;
        uniform float uScroll; uniform float uLight;
        varying vec2 vUv; varying vec3 vPos; varying vec3 vNormalW;
        void main(){
          vec3 V = normalize(cameraPosition - vPos);
          vec3 N = normalize(vNormalW);
          vec3 L = normalize(vec3(-0.4, 0.9, 0.7));
          float diff = clamp(dot(N, L)*0.5 + 0.5, 0.0, 1.0);
          float sheen = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 2.6);
          vec3 col = mix(uDeep, uMauve, smoothstep(0.15, 0.95, diff));
          col = mix(col, uPink, sheen * (0.5 + 0.25*uScroll) * uLight);
          float vig = smoothstep(1.05, 0.15, length(vUv - 0.5)*1.5);
          float grain = fract(sin(dot(vUv*vec2(1200.0, 900.0), vec2(12.9898,78.233)))*43758.5453);
          col += (grain - 0.5) * 0.022;
          gl_FragColor = vec4(col, vig * (0.92 - uScroll*0.25));
        }`
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(9, 6, seg, Math.round(seg * 0.66)), mat);
    mesh.rotation.x = -0.95;
    mesh.position.y = -0.75;
    scene.add(mesh);
    this.mesh = mesh; this.camera = camera; this.renderer = renderer; this.scene = scene;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      if (!r.width) return;
      renderer.setSize(r.width, r.height, false);
      camera.aspect = r.width / r.height;
      camera.updateProjectionMatrix();
    };
    resize();
    this.ro = new ResizeObserver(resize); this.ro.observe(canvas);

    this.target = { x: 0, y: 0 }; this.cur = { x: 0, y: 0 };
    this.onMove = (e) => {
      this.target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      this.target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    this.onTiltDev = (e) => {
      if (e.gamma == null) return;
      this.target.x = Math.max(-1, Math.min(1, e.gamma / 35));
      this.target.y = Math.max(-1, Math.min(1, ((e.beta || 45) - 45) / 35));
    };
    this.scroll = 0;
    this.onScroll = () => { this.scroll = Math.min(1, window.scrollY / Math.max(1, window.innerHeight)); };
    window.addEventListener("pointermove", this.onMove, { passive: true });
    window.addEventListener("deviceorientation", this.onTiltDev);
    window.addEventListener("scroll", this.onScroll, { passive: true });

    this.visible = true;
    this.io = new IntersectionObserver(([e]) => { this.visible = e.isIntersecting; }, { threshold: 0.01 });
    this.io.observe(canvas);
    this.onVis = () => { if (!document.hidden && !this.raf && !this.reduced()) this.loop(); };
    document.addEventListener("visibilitychange", this.onVis);

    if (this.reduced()) { uniforms.uTime.value = 2.0; renderer.render(scene, camera); return; }
    this.t0 = performance.now();
    this.loop();
  }

  loop = () => {
    if (this.stopped) return;
    this.raf = requestAnimationFrame(this.loop);
    if (document.hidden || !this.visible) return;
    const u = this.uniforms;
    u.uTime.value = (performance.now() - this.t0) / 1000;
    this.cur.x += (this.target.x - this.cur.x) * 0.045;
    this.cur.y += (this.target.y - this.cur.y) * 0.045;
    u.uMouse.value.set(this.cur.x * 0.5, -this.cur.y * 0.5);
    u.uScroll.value += (this.scroll - u.uScroll.value) * 0.06;
    this.mesh.rotation.x = -0.95 + this.cur.y * 0.05 + u.uScroll.value * 0.22;
    this.mesh.rotation.z = this.cur.x * 0.045;
    this.camera.position.z = 4.2 - u.uScroll.value * 0.8;
    this.renderer.render(this.scene, this.camera);
  };

  setLightUniform(theme) {
    if (!this.uniforms || !window.THREE) return;
    const THREE = window.THREE;
    if (theme === "light") {
      this.uniforms.uDeep.value = new THREE.Color("#f2f2f2");
      this.uniforms.uMauve.value = new THREE.Color("#bdbdbd");
      this.uniforms.uPink.value = new THREE.Color("#ffffff");
    } else {
      this.uniforms.uDeep.value = new THREE.Color("#141414");
      this.uniforms.uMauve.value = new THREE.Color("#4a4a4a");
      this.uniforms.uPink.value = new THREE.Color("#f2f2f2");
    }
    if (this.reduced() && this.renderer) this.renderer.render(this.scene, this.camera);
  }

  renderVals() {
    const lang = this.state.lang;
    const t = STR[lang];
    const open = (p) => () => { if (this.dragged) return; this.setState({ active: p }); };
    const cur = this.state.proj;
    const projects = t.cats.map((p, i) => Object.assign({}, p, {
      status: "0" + (i + 1),
      slot: "cat-" + i, src: ["./assets/web-build.png", "./assets/ugc.png", "./assets/voice-reply.png", "./assets/automation.png"][i] || "",
      slotHint: lang === "ar" ? "أفلتي صورة الغلاف هنا" : "Drop the cover image here",
      pick: () => { if (this.dragged) return; if (i !== cur) this.setState({ proj: i }); else this.setState({ page: i, work: 0 }); },
      style: (() => {
        const o = i - cur, a = Math.abs(o);
        return "position:absolute;top:50%;left:50%;width:min(76%,430px);height:86%;overflow:hidden;"
          + "display:flex;flex-direction:column;border-radius:26px;border:1px solid var(--line);cursor:pointer;"
          + "box-shadow:0 30px 70px rgba(0,0,0," + (a === 0 ? .22 : .12) + ");"
          + "transform:translate(-50%,-50%) translateX(" + (o * 62) + "%) translateZ(" + (-a * 220) + "px) rotateY(" + (-o * 34) + "deg) scale(" + (1 - a * 0.04) + ");"
          + "opacity:" + (a > 2 ? 0 : 1 - a * 0.22) + ";z-index:" + (20 - a) + ";"
          + "pointer-events:" + (a > 2 ? "none" : "auto") + ";"
          + "transition:transform .6s cubic-bezier(.16,.84,.44,1),opacity .5s ease,box-shadow .4s ease;";
      })(),
      slotHint: lang === "ar" ? "أفلتي صورة المشروع هنا" : "Drop the project image here",
      open: open(Object.assign({}, p, {
        slotWide: "proj-wide-" + i, src: p.src || "",
        slotHint: lang === "ar" ? "أفلتي صورة المشروع هنا" : "Drop the project image here"
      }))
    }));

    return {
      t, dir: lang === "ar" ? "rtl" : "ltr",
      langLabel: lang === "ar" ? "EN" : "AR",
      themeIcon: this.state.theme === "dark" ? "☾" : "☀",
      tools: t.tools, projects, services: t.services,
      links: t.links.map(l => Object.assign({}, l, {
        iconStyle: "width:22px;height:22px;background-color:var(--ink);"
          + "-webkit-mask:center/contain no-repeat url('./icons/" + l.slug + ".svg');"
          + "mask:center/contain no-repeat url('./icons/" + l.slug + ".svg');"
      })),
      badges: [
        { label: "Claude", icon: "./icons/claude.webp", mono: "C" },
        { label: "ChatGPT", icon: "./icons/chatgpt.png?v=2", mono: "GPT" },
        { label: "Higgsfield", icon: "./icons/heygen.jpg", mono: "HF" },
        { label: "Canva", icon: "./icons/canva.jpg", mono: "Cv" },
        { label: "Blender", icon: "./icons/blender.png", mono: "B" },
        { label: "n8n", icon: "./icons/n8n.svg", mono: "n8" }
      ].map((b, i) => ({
        label: b.label, mono: b.icon ? "" : b.mono,
        iconStyle: b.icon ? "background:#fff center/86% no-repeat url('" + b.icon + "');" : "",
        pos: (() => {
          const spots = [[6, 26, 20], [2, 52, 6], [14, 74, 22], [66, 24, 6], [74, 52, 21], [58, 74, 5]][i];
          return "position:absolute;left:" + spots[0] + "%;top:" + spots[1] + "%;z-index:" + spots[2] + ";animation-delay:" + (i * .7) + "s;";
        })(),
        style: "display:flex;align-items:center;justify-content:center;"
          + "padding:8px 13px;border-radius:16px;border:1px solid var(--line);"
          + "background:#fff;box-shadow:0 10px 26px rgba(0,0,0,.35);"
          + "gap:8px;font-size:13px;font-weight:600;color:#0a0a0a;white-space:nowrap;"
          + "transform:translateY(-50%) scale(" + [1.05, .78, 1.12, .82, 1, .74][i] + ");"
      })),
      svcStack: t.services.map((s, i) => {
        const n = t.services.length;
        const pos = (i - this.state.svc + n) % n;
        const fan = [
          { rot: 0, x: 0, y: -34, z: 14 },
          { rot: -14, x: -78, y: 6, z: 12 },
          { rot: 14, x: 78, y: 6, z: 11 },
          { rot: -5, x: -16, y: 18, z: 10 }
        ][pos] || { rot: 0, x: 0, y: 22, z: 9 };
        return Object.assign({}, s, {
          go: () => this.setState({ svc: i }),
          style: "position:absolute;top:0;left:50%;width:min(60%,210px);height:62%;"
            + "display:flex;flex-direction:column;justify-content:flex-start;gap:7px;padding:16px 15px;border-radius:20px;cursor:pointer;"
            + "background:#fff;color:#0a0a0a;border:1px solid rgba(0,0,0,.12);box-shadow:0 18px 44px rgba(0,0,0,.4);"
            + "transform:translateX(calc(-50% + " + fan.x + "px)) translateY(" + fan.y + "px) rotate(" + fan.rot + "deg) scale(" + (pos === 0 ? 1.05 : 1) + ");"
            + "z-index:" + fan.z + ";transition:transform .55s cubic-bezier(.16,.84,.44,1),box-shadow .4s ease;"
        });
      }),
      svcList: t.services.map((s, i) => ({
        title: s.title, short: s.desc.split("،")[0].split(",")[0].split(" — ")[0],
        go: () => this.setState({ svc: i }),
        dotStyle: "flex:none;width:7px;height:7px;border-radius:999px;background:" + (i === this.state.svc ? "#ffffff" : "#8f8f8f") + ";",
        rowStyle: "display:flex;align-items:center;gap:10px;width:100%;text-align:start;background:transparent;border:0;padding:5px 0;cursor:pointer;overflow:hidden;"
          + "font-family:'IBM Plex Sans Arabic',sans-serif;color:#ffffff;"
          + "opacity:" + (i === this.state.svc ? 1 : .5) + ";transition:opacity .35s ease;"
      })),
      hideIcon: (e) => { e.currentTarget.style.display = "none"; },
      nextSvc: () => this.setState(s => ({ svc: (s.svc + 1) % t.services.length })),
      email: "shuruqasiri67@gmail.com",
      mailto: "mailto:shuruqasiri67@gmail.com",
      mailIconStyle: "width:22px;height:22px;background-color:var(--ink);"
        + "-webkit-mask:center/contain no-repeat url('./icons/gmail.svg');"
        + "mask:center/contain no-repeat url('./icons/gmail.svg');",
      copyLabel: this.state.copied ? t.copied : t.copy,
      copyIcon: this.state.copied ? "✓" : "⧉",
      active: this.state.active,
      stop: (e) => e.stopPropagation(),
      closeModal: () => this.setState({ active: null }),
      toggleLang: () => {
        const next = lang === "ar" ? "en" : "ar";
        document.documentElement.setAttribute("dir", next === "ar" ? "rtl" : "ltr");
        document.documentElement.setAttribute("lang", next);
        this.setState({ lang: next, active: null });
      },
      toggleTheme: () => {
        const next = this.state.theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        this.setLightUniform(next);
        this.setState({ theme: next });
      },
      copyEmail: () => {
        const v = "shuruqasiri67@gmail.com";
        const done = () => { this.setState({ copied: true }); setTimeout(() => this.setState({ copied: false }), 1800); };
        if (navigator.clipboard) navigator.clipboard.writeText(v).then(done, done); else done();
      },
      onTilt: (e) => {
        if (this.reduced()) return;
        const el = e.currentTarget, r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
        el.style.boxShadow = "0 24px 60px rgba(20,9,14,.38)";
      },
      offTilt: (e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; },
      canvasRef: this.canvasRef,
      railRef: this.railRef,
      page: this.state.page === null ? null : (() => {
        const c = t.cats[this.state.page];
        return {
          title: c.title, desc: c.desc, intro: t.pageIntro, back: t.back,
          about: (this.state.page === 0 && this.state.work === 0) ? t.shopOraAbout : null,
          works: Array.from({ length: c.count }, (_, j) => ({
            pick: () => { if (this.dragged) return; this.setState({ work: j }); },
            style: (() => {
              const o = j - this.state.work, a = Math.abs(o);
              return "position:absolute;top:50%;left:50%;width:min(76%,430px);height:88%;overflow:hidden;"
                + "display:flex;flex-direction:column;border-radius:26px;border:1px solid var(--line);cursor:pointer;"
                + "box-shadow:0 30px 70px rgba(0,0,0," + (a === 0 ? .2 : .1) + ");"
                + "transform:translate(-50%,-50%) translateX(" + (o * 62) + "%) translateZ(" + (-a * 220) + "px) rotateY(" + (-o * 34) + "deg) scale(" + (1 - a * 0.04) + ");"
                + "opacity:" + (a > 2 ? 0 : 1 - a * 0.22) + ";z-index:" + (20 - a) + ";"
                + "pointer-events:" + (a > 2 ? "none" : "auto") + ";"
                + "transition:transform .6s cubic-bezier(.16,.84,.44,1),opacity .5s ease,box-shadow .4s ease;";
            })(),
            slot: "cat" + this.state.page + "-work" + j,
            src: this.state.page === 0 && j === 0 ? "https://shoporaworld.com/og-image.png" : "",
            title: this.state.page === 0 && j === 0 ? "ShopOra" : t.soonLabel,
            href: this.state.page === 0 && j === 0 ? "https://shoporaworld.com/" : "",
            linkLabel: lang === "ar" ? "زيارة الموقع ↗" : "Visit site ↗",
            hint: lang === "ar" ? "أفلتي صورة العمل هنا" : "Drop the work image here"
          })),
          dots: Array.from({ length: c.count }, (_, j) => ({
            go: () => this.setState({ work: j }),
            style: "width:" + (j === this.state.work ? 26 : 9) + "px;height:9px;border-radius:999px;border:0;padding:0;cursor:pointer;"
              + "background:" + (j === this.state.work ? "var(--ink)" : "color-mix(in oklab, var(--ink) 30%, transparent)") + ";transition:width .35s ease,background .35s ease;"
          })),
          prev: () => this.setState(s => ({ work: Math.max(0, s.work - 1) })),
          next: () => this.setState(s => ({ work: Math.min(c.count - 1, s.work + 1) })),
          swipe: (e) => {
            if (!this.drag) return;
            const dx = e.clientX - this.drag.x;
            if (Math.abs(dx) > 6) this.dragged = true;
            if (Math.abs(dx) > 70) {
              const d = dx > 0 ? -1 : 1;
              this.drag = { x: e.clientX };
              this.setState(s => ({ work: Math.min(c.count - 1, Math.max(0, s.work + d)) }));
            }
          }
        };
      })(),
      closePage: () => this.setState({ page: null, work: 0 }),
      prevProj: () => this.setState(s => ({ proj: Math.max(0, s.proj - 1) })),
      nextProj: () => this.setState(s => ({ proj: Math.min(t.cats.length - 1, s.proj + 1) })),
      projDots: t.cats.map((p, i) => ({
        go: () => this.setState({ proj: i }),
        style: "width:" + (i === cur ? 26 : 9) + "px;height:9px;border-radius:999px;border:0;padding:0;cursor:pointer;"
          + "background:" + (i === cur ? "var(--mauve)" : "color-mix(in oklab, var(--mauve) 30%, transparent)") + ";transition:width .35s ease,background .35s ease;"
      })),
      dragStart: (e) => {
        this.drag = { x: e.clientX };
        this.dragged = false;
        if (this.railRef.current) this.railRef.current.style.cursor = "grabbing";
      },
      dragMove: (e) => {
        if (!this.drag) return;
        const dx = e.clientX - this.drag.x;
        if (Math.abs(dx) > 6) this.dragged = true;
        if (Math.abs(dx) > 70) {
          const dir = dx > 0 ? -1 : 1;
          this.drag = { x: e.clientX };
          this.setState(s => ({ proj: Math.min(t.cats.length - 1, Math.max(0, s.proj + dir)) }));
        }
      },
      dragEnd: () => {
        this.drag = null;
        if (this.railRef.current) this.railRef.current.style.cursor = "grab";
        setTimeout(() => { this.dragged = false; }, 80);
      }
    };
  }
}

window.addEventListener('DOMContentLoaded', function(){ window.__dcMount(Component, 'dc-tpl', 'app'); });
