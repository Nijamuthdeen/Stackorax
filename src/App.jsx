import { useState, useEffect, useRef } from "react";
import React from "react";

import {
  FaBolt,
  FaReact,
  FaJava,
  FaLeaf,
  FaDatabase,
  FaFigma,
  FaLaptopCode,
  FaPalette,
  FaBuilding,
  FaLayerGroup,
  FaCode,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
body{font-family:'DM Sans',sans-serif;background:#020208;color:#f0f0ff;overflow-x:hidden;}
::-webkit-scrollbar{width:3px}
::-webkit-scrollbar-thumb{background:#6C63FF;border-radius:2px}
.font-syne{font-family:'Syne',sans-serif}
#loader{position:fixed;inset:0;z-index:10000;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;transition:opacity .7s,visibility .7s}
#loader.out{opacity:0;visibility:hidden}
.ld-logo{font-family:'Syne',sans-serif;font-size:clamp(2rem,6vw,3.5rem);font-weight:800;letter-spacing:-.03em;background:linear-gradient(135deg,#6C63FF,#00F5D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:fu .6s .3s both}
.ld-bar{width:180px;height:2px;background:rgba(255,255,255,.08);border-radius:2px;overflow:hidden}
.ld-fill{height:100%;background:linear-gradient(90deg,#6C63FF,#00F5D4);animation:lf 1.6s cubic-bezier(.23,1,.32,1) forwards}
.ld-txt{font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.3);animation:fi .4s .5s both}
@keyframes lf{from{width:0}to{width:100%}}
@keyframes fu{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes fi{from{opacity:0}to{opacity:1}}
.reveal{opacity:0;transform:translateY(36px);transition:opacity .75s cubic-bezier(.23,1,.32,1),transform .75s cubic-bezier(.23,1,.32,1)}
.reveal.on{opacity:1;transform:none}
.reveal-l{opacity:0;transform:translateX(-36px);transition:opacity .75s cubic-bezier(.23,1,.32,1),transform .75s cubic-bezier(.23,1,.32,1)}
.reveal-l.on{opacity:1;transform:none}
.reveal-r{opacity:0;transform:translateX(36px);transition:opacity .75s cubic-bezier(.23,1,.32,1),transform .75s cubic-bezier(.23,1,.32,1)}
.reveal-r.on{opacity:1;transform:none}
.d1{transition-delay:.1s!important}.d2{transition-delay:.2s!important}.d3{transition-delay:.3s!important}.d4{transition-delay:.4s!important}
.grad{background:linear-gradient(135deg,#9B95FF,#00F5D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.grad2{background:linear-gradient(135deg,#6C63FF,#00F5D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.glass-strong{background:rgba(10,10,24,.9);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
.orb{position:absolute;border-radius:50%;filter:blur(72px);pointer-events:none;will-change:transform}
.orb1{width:480px;height:480px;background:radial-gradient(circle,rgba(108,99,255,.2) 0%,transparent 70%);animation:ob1 9s ease-in-out infinite}
.orb2{width:360px;height:360px;background:radial-gradient(circle,rgba(0,245,212,.12) 0%,transparent 70%);animation:ob2 11s ease-in-out infinite}
@keyframes ob1{0%,100%{transform:translate(0,0)}50%{transform:translate(28px,-18px)}}
@keyframes ob2{0%,100%{transform:translate(0,0)}50%{transform:translate(-22px,16px)}}
.grid-bg{background-image:linear-gradient(rgba(108,99,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,.04) 1px,transparent 1px);background-size:56px 56px}
.pulse-dot{width:6px;height:6px;background:#00F5D4;border-radius:50%;animation:pulse 2s ease-in-out infinite;flex-shrink:0}
@keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(0,245,212,.6)}50%{box-shadow:0 0 0 6px rgba(0,245,212,0)}}
.tw-cur{border-right:2px solid #00F5D4;padding-right:2px;animation:blink .8s step-end infinite}
@keyframes blink{50%{border-color:transparent}}
.scroll-line{width:1px;height:36px;background:linear-gradient(to bottom,#6C63FF,transparent);animation:sl 2s ease-in-out infinite}
@keyframes sl{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom;opacity:0}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.wa-float{animation:float 4s ease-in-out infinite}
.nav-link{position:relative}
.nav-link::after{content:'';position:absolute;bottom:-2px;left:50%;right:50%;height:1.5px;background:linear-gradient(90deg,#6C63FF,#00F5D4);transition:left .3s,right .3s}
.nav-link:hover::after{left:0;right:0}
.card-glow{transition:transform .35s cubic-bezier(.23,1,.32,1),box-shadow .35s,border-color .35s}
.card-glow:hover{transform:translateY(-6px);box-shadow:0 24px 60px rgba(108,99,255,.18);border-color:rgba(108,99,255,.35)!important}
.svc-icon{transition:transform .35s cubic-bezier(.23,1,.32,1),background .35s}
.svc-card:hover .svc-icon{transform:scale(1.12) rotate(-6deg);background:rgba(108,99,255,.25)!important}
.proj-overlay{opacity:0;transition:opacity .4s}
.proj-card:hover .proj-overlay{opacity:1}
.proj-card{transition:transform .4s cubic-bezier(.23,1,.32,1),box-shadow .4s}
.proj-card:hover{transform:translateY(-6px);box-shadow:0 32px 80px rgba(108,99,255,.2)}
.proj-img{transition:transform .5s cubic-bezier(.23,1,.32,1);width:100%;height:100%;object-fit:cover;display:block;opacity:.75}
.proj-card:hover .proj-img{transform:scale(1.06)}
.tech-card{transition:transform .3s,border-color .3s,box-shadow .3s}
.tech-card:hover{transform:translateY(-5px);border-color:rgba(108,99,255,.4)!important;box-shadow:0 16px 40px rgba(108,99,255,.15)}
.team-card{transition:transform .35s cubic-bezier(.23,1,.32,1),box-shadow .35s}
.team-card:hover{transform:translateY(-7px);box-shadow:0 28px 70px rgba(108,99,255,.22)}
.price-card{transition:transform .35s cubic-bezier(.23,1,.32,1),box-shadow .35s}
.price-card:hover{transform:translateY(-6px)}
.testi-track{display:flex;gap:20px;animation:ts 28s linear infinite;width:max-content}
.testi-track:hover{animation-play-state:paused}
@keyframes ts{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.testi-fade{position:relative;overflow:hidden}
.testi-fade::before,.testi-fade::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:1;pointer-events:none}
.testi-fade::before{left:0;background:linear-gradient(to right,#020208,transparent)}
.testi-fade::after{right:0;background:linear-gradient(to left,#020208,transparent)}
.mq-track{display:flex;animation:mq 22s linear infinite;width:max-content}
@keyframes mq{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.inp{background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.1);border-radius:12px;color:#f0f0ff;font-family:'DM Sans',sans-serif;transition:border-color .3s,box-shadow .3s;outline:none;width:100%}
.inp:focus{border-color:#6C63FF;box-shadow:0 0 0 3px rgba(108,99,255,.12)}
.inp::placeholder{color:rgba(240,240,255,.3)}
.counter-num{font-family:'Syne',sans-serif}
/* Team card 3D flip */
.ft-link{color:rgba(240,240,255,.45);font-size:.85rem;text-decoration:none;display:block;margin-bottom:10px;transition:color .25s,padding-left .2s}
.ft-link:hover{color:#9B95FF;padding-left:4px}
.team-card:hover .team-inner{
  transform: rotateY(180deg);
}
.team-front,
.team-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.team-inner {
  transform-style: preserve-3d;
}
.team-card:hover {
  transform: translateY(-8px);
}
.team-card {
  transition: transform .35s ease;
}
/* ── Mobile menu – fixed size ── */
.mm{transform:translateX(100%);transition:transform .35s cubic-bezier(.23,1,.32,1);position:fixed;inset:0;z-index:40;background:rgba(10,10,24,.97);backdrop-filter:blur(20px);display:flex;flex-direction:column;padding:96px 32px 40px;gap:8px}
.mm.open{transform:translateX(0)}

.mm-link{
  font-family:'Syne',sans-serif;
  font-size:1.25rem;
  font-weight:700;
  padding:16px 0;
  border-bottom:1px solid rgba(255,255,255,.07);
  color:rgba(240,240,255,.75);
  text-decoration:none;
  display:flex;
  align-items:center;
  justify-content:space-between;
  transition:color .2s,padding-left .2s;
}
.mm-link:hover{color:#fff;padding-left:8px}
.mm-link::after{content:'→';font-size:1rem;color:rgba(108,99,255,.6)}

/* ── Responsive helpers ── */
@media(min-width:768px){
  .md-show{display:flex!important}
  .md-btn{display:inline-flex!important}
  .mob-only{display:none!important}
}
@media(max-width:767px){
  .md-show{display:none!important}
  .md-btn{display:none!important}
  .mob-only{display:flex!important}
}

/* ── Hero stats responsive ── */
@media(max-width:480px){
  .stats-grid{grid-template-columns:repeat(2,1fr)!important}
}

/* ── Section padding responsive ── */
@media(max-width:600px){
  .sec-pad{padding:72px 18px!important}
}
`;

/* ── DATA ── */
const NAV_ITEMS = ["About", "Services", "Projects", "Team", "Pricing", "Contact"];
const WORDS = ["Web Applications", "Business Websites", "Digital Products", "Scalable APIs", "Modern UIs"];

const SERVICES = [
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Web Apps",
    desc: "Custom web applications built with React, Spring Boot, and MySQL. Secure, scalable, and optimized for performance.",
    tags: ["React", "Spring Boot", "MySQL"],
    color: "#6C63FF",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    desc: "Modern, intuitive interfaces designed to deliver exceptional user experiences and maximize customer engagement.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    color: "#EC4899",
  },
  {
    icon: <FaBuilding />,
    title: "Business Websites",
    desc: "Professional business websites that build credibility, improve search rankings, and convert visitors into customers.",
    tags: ["SEO", "Responsive", "Performance"],
    color: "#22C55E",
  },
];

/* ── Only 2 projects (Student Management removed) ── */
const PROJECTS = [
  {
    title: "Zareen Wear",
    sub: "Premium Clothing & E-commerce",
    desc: "A modern clothing brand platform showcasing premium T-shirts, product collections, and a responsive shopping experience with a premium black-and-gold visual identity.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "E-commerce",
      "Responsive Design",
    ],
    result: "Premium online presence for a clothing brand",
    demo: "https://zareenwear.in",
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=700&q=80",
    imgAlt: "Premium clothing and T-shirt collection",
  },
  {
    title: "Brownie Bliss",
    sub: "Bakery & Dessert Website",
    desc: "A visually appealing dessert brand website designed to showcase bakery products with an inviting interface, attractive product imagery, and a responsive browsing experience.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Design",
    ],
    result: "Modern digital storefront for a dessert brand",
    demo: "https://brownie-bliss-beta.vercel.app/",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=80",
    imgAlt: "Chocolate brownies and desserts",
  },
  {
    title: "UV India",
    sub: "Interior & Construction Website",
    desc: "Premium business showcase website for an interior design and construction company, featuring a portfolio gallery, service pages, and SEO-focused lead generation.",
    tech: ["React", "Tailwind CSS", "SEO"],
    result: "Professional business showcase and lead generation",
    demo: "https://uv-india.vercel.app/",
    img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=700&q=80",
    imgAlt: "Modern interior design",
  },
  {
    title: "Stoic Fitness",
    sub: "Discipline Today. Strength Tomorrow",
    desc: "A premium fitness platform for gyms and personal trainers, featuring workout programs, trainer profiles, transformation galleries, membership plans, and a BMI calculator.",
    tech: [
      "React",
      "CSS3",
      "Framer Motion",
      "Responsive Design",
    ],
    result: "Engaging, responsive fitness platform",
    demo: "https://stoic-fitness.vercel.app/",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80",
    imgAlt: "Modern fitness gym",
  },
  {
    title: "RUDHRA Dental Care",
    sub: "Premium Dental Clinic Website",
    desc: "A modern dental clinic website concept featuring premium UI/UX, responsive layouts, an appointment-booking interface, smooth animations, and SEO-ready architecture.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Spring Boot",
      "MySQL",
    ],
    result: "Healthcare website concept",
    demo: "https://rudhradental.vercel.app/",
    github: "https://github.com/Nijamuthdeen/Rudhradental-website",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80",
    imgAlt: "Modern dental clinic",
  },
];
/* ── 4 team members ── */
const TEAM = [
  {
    name: "Nijamuthdeen J",
    role: "Founder & Full Stack Developer",
    tagline: "Turning ideas into scalable digital products.",
    init: "NJ",
    from: "#6C63FF",
    to: "#4A42D4",
    skills: ["React", "Java", "Spring Boot", "MySQL"],
    projects: "5+",
    experience: "1 Year",
  },
  {
    name: "MuraliDharan B",
    role: "Full Stack Developer",
    tagline: "Building secure and scalable web applications.",
    init: "MB",
    from: "#3B82F6",
    to: "#06B6D4",
    skills: ["React", "Spring Boot", "REST API", "MySQL"],
    projects: "3+",
    experience: "8 months",
  },
  {
    name: "Mohamed Rifakath J",
    role: "Backend Developer",
    tagline: "Engineering powerful backend systems.",
    init: "MR",
    from: "#10B981",
    to: "#0EA5E9",
    skills: ["Java", "Spring Boot", "REST API", "MySQL"],
    projects: "3",
    experience: "11 months",
  },
  {
    name: "Priyadarshini",
    role: "UI/UX Designer & Marketing",
    tagline: "Creating beautiful experiences that convert.",
    init: "PD",
    from: "#EC4899",
    to: "#8B5CF6",
    skills: ["Figma", "UI/UX", "Branding", "Marketing"],
    projects: "4",
    experience: "6 months",
  },
];

const TECHS = [
  {
    icon: <FaReact />,
    name: "React",
    desc: "Dynamic, component-based frontend development.",
    color: "#61DAFB",
  },
  {
    icon: <FaJava />,
    name: "Java",
    desc: "Robust enterprise-grade backend development.",
    color: "#F89820",
  },
  {
    icon: <FaLeaf />,
    name: "Spring Boot",
    desc: "Fast, scalable REST API development.",
    color: "#6DB33F",
  },
  {
    icon: <FaDatabase />,
    name: "MySQL",
    desc: "Reliable relational database management.",
    color: "#00758F",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    desc: "Modern utility-first CSS framework.",
    color: "#38BDF8",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    desc: "Version control and collaborative development.",
    color: "#ffffff",
  },
   {
    icon: <FaFigma />,
    name: "Figma",
    desc: "UI/UX design & prototyping.",
    color: "#A259FF",
  },
  {
    icon: <SiPostman />,
    name: "Postman",
    desc: "API testing & development.",
    color: "#FF6C37",
  },
];

const TESTIMONIALS = [
  { name: "Arjun Mehta", role: "Founder, LaunchPad", av: "AM", text: "Stackorax delivered our dashboard in 3 weeks. The code quality and design are exceptional — they genuinely care about the product." },
  { name: "Kavya Krishnan", role: "Owner, Nisha Collection", av: "KK", text: "Our billing system works flawlessly. The team understood our workflow perfectly and built exactly what we needed." },
  { name: "Vikram Patel", role: "Director, UV India", av: "VP", text: "The website increased client inquiries 3x in the first month. Premium design, fast delivery, zero headaches." },
];

const PRICING = [
  {
    tier: "Landing Page", price: "₹4,999", period: "one-time",
    desc: "Perfect for freelancers and small personal projects.",
    feats: ["1-page landing design", "Mobile responsive", "Contact form", "WhatsApp button", "Basic SEO", "Delivered in 3 days"],
    popular: false,
  },
  {
    tier: "Business Website", price: "₹14,999", period: "one-time",
    desc: "Ideal for small businesses and local shops.",
    feats: ["Up to 6 pages", "Modern UI/UX design", "SEO optimization", "Google Maps integration", "WhatsApp & call CTA", "1 month support"],
    popular: true,
  },
  {
    tier: "Full-Stack Web App", price: "₹39,999", period: "project-based",
    desc: "For businesses needing dynamic apps with backend.",
    feats: ["React + Spring Boot + MySQL", "User login & role management", "Admin dashboard", "REST API integration", "Database design", "3 months support"],
    popular: false,
  },
];

/* ── Stats: 4 team, 0 yrs experience ── */
const STATS = [
  { n: 2, s: "+", label: "Projects Delivered" },
  { n: 100, s: "%", label: "Client Satisfaction" },
  { n: 4, s: "", label: "Team Members" },
  { n: 0, s: "", label: "Years Experience", display: "Fresh" },
];

/* ── HOOKS ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal,.reveal-l,.reveal-r");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on"); }),
      { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCounter() {
  useEffect(() => {
    const els = document.querySelectorAll(".counter-num[data-target]");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.target;
        const suffix = el.dataset.suffix || "";
        const display = el.dataset.display || "";
        if (display) { el.textContent = display; io.unobserve(el); return; }
        if (target === 0) { el.textContent = "Fresh"; io.unobserve(el); return; }
        let c = 0; const step = target / 48;
        const t = setInterval(() => {
          c += step; if (c >= target) { c = target; clearInterval(t); }
          el.textContent = Math.round(c) + suffix;
        }, 25);
        io.unobserve(el);
      }),
      { threshold: 0.5 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── LOADER ── */
function Loader({ done }) {
  return (
    <div id="loader" className={done ? "out" : ""}>
      <div className="ld-logo">STACKORAX</div>
      <div className="ld-bar"><div className="ld-fill" /></div>
      <div className="ld-txt">Loading Experience</div>
    </div>
  );
}

/* ── HELPERS ── */
function Tag({ label }) {
  return (
    <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 15px", borderRadius: 100, fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", background: "rgba(108,99,255,.1)", border: "1px solid rgba(108,99,255,.22)", color: "#9B95FF", marginBottom: 16 }}>
      {label}
    </div>
  );
}

function Sec({ id, bg, children }) {
  return (
    <section id={id} className="sec-pad" style={{ background: bg || "#020208", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function SecHead({ tag, title, sub, center = true }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 52 }}>
      <Tag label={tag} />
      <h2 className="reveal font-syne" style={{ fontWeight: 800, fontSize: "clamp(1.8rem,4.5vw,3.5rem)", letterSpacing: "-.025em", lineHeight: 1.1, marginBottom: 14 }}
        dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p className="reveal" style={{ color: "rgba(240,240,255,.45)", fontSize: "clamp(.88rem,2vw,1rem)", maxWidth: 520, margin: center ? "0 auto" : "0", lineHeight: 1.75 }}>{sub}</p>}
    </div>
  );
}

/* ── NAVBAR ── */
function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className={scrolled ? "glass-strong" : ""}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? "12px 0" : "20px 0",
          transition: "all .3s"
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px"
          }}
        >
          {/* LOGO */}
          <a
            href="#"
            className="font-syne grad2"
            style={{
              fontWeight: 800,
              fontSize: "1.3rem",
              letterSpacing: "-.03em",
              textDecoration: "none"
            }}
          >
            STACKORAX
          </a>

          {/* DESKTOP NAV */}
          <ul
            className="md-show"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              listStyle: "none"
            }}
          >
            {NAV_ITEMS.map((n) => (
              <li key={n}>
                <a
                  href={`#${n.toLowerCase()}`}
                  className="nav-link"
                  style={{
                    textDecoration: "none",
                    color: "rgba(240,240,255,.7)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    padding: "8px 0",
                    transition: "color .2s"
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#fff")
                  }
                  onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    "rgba(240,240,255,.7)")
                  }
                >
                  {n}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px"
            }}
          >
            {/* DESKTOP BUTTON */}
            <a
              href="#contact"
              className="md-btn"
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                fontSize: ".85rem",
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                background:
                  "linear-gradient(135deg,#6C63FF,#4A42D4)",
                boxShadow:
                  "0 4px 20px rgba(108,99,255,.35)",
                transition: "transform .3s"
              }}
              onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "none")
              }
            >
              Hire Us →
            </a>

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="mob-only"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",   // 🔥 circle background
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
                zIndex: 1000,
                backdropFilter: "blur(10px)"
              }}
            >
              {/* LINE 1 */}
              <span
                style={{
                  position: "absolute",
                  width: "18px",
                  height: "2.5px",
                  background: "#fff",
                  borderRadius: "2px",
                  transition: "0.3s ease",
                  transform: menuOpen
                    ? "rotate(45deg)"
                    : "translateY(-6px)"
                }}
              />

              {/* LINE 2 */}
              <span
                style={{
                  position: "absolute",
                  width: "18px",
                  height: "2.5px",
                  background: "#fff",
                  borderRadius: "2px",
                  transition: "0.3s ease",
                  opacity: menuOpen ? 1 : 1,
                  transform: menuOpen
                    ? "rotate(-45deg)"
                    : "translateY(6px)"
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mm ${menuOpen ? "open" : ""}`}>

        {NAV_ITEMS.map((n) => (
          <a
            key={n}
            href={`#${n.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="mm-link"
          >
            {n}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: 24,
            textAlign: "center",
            padding: "14px",
            borderRadius: 100,
            fontWeight: 600,
            color: "#fff",
            background:
              "linear-gradient(135deg,#6C63FF,#4A42D4)",
            textDecoration: "none"
          }}
        >
          Let's Work Together →
        </a>
      </div>
    </>
  );
}
/* ── HERO ── */
function Hero() {
  const [typed, setTyped] = useState("");
  const [del, setDel] = useState(false);
  const [wi, setWi] = useState(0);
  useEffect(() => {
    let t;
    const w = WORDS[wi];
    if (!del) {
      if (typed.length < w.length) t = setTimeout(() => setTyped(w.slice(0, typed.length + 1)), 95);
      else t = setTimeout(() => setDel(true), 2200);
    } else {
      if (typed.length > 0) t = setTimeout(() => setTyped(typed.slice(0, -1)), 50);
      else { setDel(false); setWi(i => (i + 1) % WORDS.length); }
    }
    return () => clearTimeout(t);
  }, [typed, del, wi]);

  return (
    <section className="grid-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "120px 20px 80px" }}>
      <div className="orb orb1" style={{ position: "absolute", top: -80, left: -80 }} />
      <div className="orb orb2" style={{ position: "absolute", bottom: 0, right: 0 }} />
      <div style={{ maxWidth: 860, width: "100%", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 100, fontSize: ".72rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", background: "rgba(108,99,255,.1)", border: "1px solid rgba(108,99,255,.22)", color: "#9B95FF", marginBottom: 24 }}>
          <div className="pulse-dot" />Web Dev Agency
        </div>
        <h1 className="reveal font-syne" style={{ fontWeight: 800, fontSize: "clamp(2.2rem,6vw,5.5rem)", lineHeight: 1.05, letterSpacing: "-.03em", marginBottom: 18 }}>
          We Build Scalable<br />
          <span className="grad">Digital Experiences</span>
        </h1>
        <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 16, fontSize: "clamp(.9rem,2.5vw,1.3rem)", color: "rgba(240,240,255,.55)" }}>
          <span>Crafting</span>
          <span className="tw-cur font-syne" style={{ fontWeight: 600, color: "#00F5D4" }}>{typed}</span>
        </div>
        <p className="reveal" style={{ maxWidth: 580, margin: "0 auto 32px", lineHeight: 1.8, color: "rgba(240,240,255,.5)", fontSize: "clamp(.85rem,2vw,1rem)" }}>
          From business websites to full-stack web apps, we engineer high-performance applications using React, Java &amp; Spring Boot.
        </p>
        <div className="reveal" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 100, fontWeight: 600, fontSize: ".95rem", color: "#fff", textDecoration: "none", background: "linear-gradient(135deg,#6C63FF,#4A42D4)", boxShadow: "0 8px 32px rgba(108,99,255,.38)", transition: "transform .3s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}>
            View Projects →
          </a>
          <a href="#contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 100, fontWeight: 600, fontSize: ".95rem", color: "#fff", textDecoration: "none", border: "1.5px solid rgba(255,255,255,.15)", backdropFilter: "blur(8px)", transition: "transform .3s,border-color .3s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "rgba(108,99,255,.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,.15)"; }}>
            Contact Us →
          </a>
        </div>

        {/* Stats */}
        <div className="reveal stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginTop: 48, paddingTop: 36, borderTop: "1px solid rgba(255,255,255,.07)" }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div className="counter-num grad"
                data-target={s.n} data-suffix={s.s} data-display={s.display || ""}
                style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800 }}>
                {s.display || (s.n + s.s)}
              </div>
              <div style={{ fontSize: ".68rem", marginTop: 4, color: "rgba(240,240,255,.4)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="reveal" style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "rgba(240,240,255,.28)", fontSize: ".65rem", letterSpacing: ".14em", textTransform: "uppercase" }}>
        <div className="scroll-line" /><span>Scroll</span>
      </div>
    </section>
  );
}

/* ── MARQUEE ── */
function Marquee() {
  const items = ["React", "Spring Boot", "Java", "MySQL", "UI/UX Design","Figma", "Web Apps", "SEO", "Tailwind CSS", "REST APIs"];
  const all = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", padding: "20px 0", background: "linear-gradient(135deg,#6C63FF,#4A42D4)" }}>
      <div className="mq-track" aria-hidden="true">
        {all.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 16, padding: "0 24px", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: ".78rem", letterSpacing: ".07em", textTransform: "uppercase", color: "rgba(255,255,255,.88)", flexShrink: 0 }}>
            {t}<span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,.4)", display: "block" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── ABOUT ── */
function About() {
  const cards = [
  {
    icon: <FaBolt />,
    title: "Fast Delivery",
    desc: "We deliver high-quality websites and software quickly through agile development, clear communication, and efficient workflows.",
    color: "#FACC15",
  },
  {
    icon: <FaLayerGroup />,
    title: "Scalable Architecture",
    desc: "Our solutions are built with clean architecture, ensuring your business can scale smoothly as your users and requirements grow.",
    color: "#6C63FF",
  },
  {
    icon: <FaCode />,
    title: "Modern Tech Stack",
    desc: "Powered by React, Spring Boot, MySQL, and modern cloud technologies to deliver secure, reliable, and high-performance applications.",
    color: "#22C55E",
  },
];
  return (
    <Sec id="about" bg="#040410">
      <SecHead tag="Who We Are" title={`Engineering <span class="grad">Scalable</span> Digital Products`}
        sub="Stackorax partners with startups, founders, and businesses to turn ideas into high-performance digital products." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 }}>
       <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 24,
  }}
>
  {cards.map((c, i) => (
    <div
      key={c.title}
      className={`reveal d${i + 1} card-glow`}
      style={{
        background: "rgba(255,255,255,.03)",
        border: "1px solid rgba(255,255,255,.08)",
        borderRadius: 22,
        padding: 32,
        transition: "all .35s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.borderColor = "#6C63FF";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(108,99,255,.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 18,
          background: "rgba(108,99,255,.12)",
          border: "1px solid rgba(108,99,255,.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          color: c.color,
          marginBottom: 22,
        }}
      >
        {c.icon}
      </div>

      <h3
        className="font-syne"
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: 14,
          color: "#fff",
        }}
      >
        {c.title}
      </h3>

      <p
        style={{
          color: "rgba(240,240,255,.60)",
          lineHeight: 1.8,
          fontSize: ".95rem",
        }}
      >
        {c.desc}
      </p>
    </div>
  ))}
</div>
      </div>
    </Sec>
  );
}

/* ── SERVICES ── */
function Services() {
  return (
    <Sec id="services" bg="#020208">
      <SecHead
        tag="What We Do"
        title={`Services Built for <span class="grad">Every Business</span>`}
        sub="End-to-end digital solutions — from strategy and design to development and deployment."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 24,
        }}
      >
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className={`reveal d${i + 1} card-glow`}
            style={{
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 22,
              padding: 30,
              transition: "all .35s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "#6C63FF";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(108,99,255,.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,.08)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: "rgba(108,99,255,.12)",
                border: "1px solid rgba(108,99,255,.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                color: s.color,
                marginBottom: 22,
              }}
            >
              {s.icon}
            </div>

            {/* Title */}
            <h3
              className="font-syne"
              style={{
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "#fff",
                marginBottom: 14,
              }}
            >
              {s.title}
            </h3>

            {/* Description */}
            <p
              style={{
                color: "rgba(240,240,255,.6)",
                fontSize: ".92rem",
                lineHeight: 1.8,
                marginBottom: 22,
              }}
            >
              {s.desc}
            </p>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    fontSize: ".72rem",
                    fontWeight: 600,
                    background: "rgba(108,99,255,.12)",
                    border: "1px solid rgba(108,99,255,.18)",
                    color: "#9B95FF",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );
}
/* ── PROJECTS (2 only) ── */
function Projects() {
  return (
    <Sec id="projects" bg="#040410">
      <SecHead tag="Our Work" title={`Projects That <span class="grad">Speak Volumes</span>`}
        sub="Real products built for real clients. No templates, no shortcuts." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24, maxWidth: 800, margin: "0 auto" }}>
        {PROJECTS.map((p, i) => (
          <div key={p.title} className={`reveal d${i + 1} proj-card`}
            style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 20, overflow: "hidden" }}>
            <div style={{ position: "relative", height: 210, overflow: "hidden", background: "#0a0a14" }}>
              <img src={p.img} alt={p.imgAlt} className="proj-img" loading="lazy" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(4,4,16,.85) 0%,rgba(4,4,16,.15) 60%,transparent 100%)", pointerEvents: "none" }} />
              <div className="proj-overlay" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(108,99,255,.85)" }}>
                <a href={p.demo} target="_blank" rel="noreferrer"
                  style={{ padding: "10px 28px", background: "#fff", color: "#4A42D4", borderRadius: 100, fontWeight: 700, fontSize: ".85rem", textDecoration: "none" }}>
                  Live Demo ↗
                </a>
              </div>
              <div style={{ position: "absolute", bottom: 12, left: 14, fontSize: ".67rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#00F5D4" }}>{p.sub}</div>
            </div>
            <div style={{ padding: 22 }}>
              <div className="font-syne" style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: 8 }}>{p.title}</div>
              <p style={{ color: "rgba(240,240,255,.5)", fontSize: ".85rem", lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 14 }}>
                {p.tech.map(t => <span key={t} style={{ padding: "3px 10px", borderRadius: 100, fontSize: ".66rem", fontWeight: 500, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", color: "rgba(240,240,255,.55)" }}>{t}</span>)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 12, background: "rgba(0,245,212,.07)", border: "1px solid rgba(0,245,212,.15)", marginBottom: 14 }}>
                <span style={{ color: "#00F5D4", flexShrink: 0 }}>✓</span>
                <span style={{ color: "rgba(240,240,255,.65)", fontSize: ".84rem" }}>{p.result}</span>
              </div>
              <a href={p.demo} target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".85rem", fontWeight: 600, color: "#9B95FF", textDecoration: "none", transition: "gap .2s" }}
                onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                onMouseLeave={e => e.currentTarget.style.gap = "6px"}>
                View Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );
}

/* ── TECH ── */
function TechStack() {
  return (
    <Sec bg="#020208">
      <SecHead
        tag="Our Stack"
        title={`Technology We <span class="grad">Master</span>`}
        sub="Modern technologies powering fast, scalable, and secure digital solutions."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
          justifyItems: "center",
        }}
      >
        {TECHS.map((t, i) => (
          <div
            key={t.name}
            className={`reveal d${(i % 4) + 1} tech-card card-glow`}
            style={{
              width: "100%",
              maxWidth: "240px",
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 22,
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "all .35s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "#6C63FF";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(108,99,255,.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,.08)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
                color: t.color,
                marginBottom: 22,
              }}
            >
              {t.icon}
            </div>

            {/* Title */}
            <h3
              className="font-syne"
              style={{
                margin: "0 0 12px",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#fff",
              }}
            >
              {t.name}
            </h3>

            {/* Description */}
            <p
              style={{
                margin: 0,
                color: "rgba(240,240,255,.6)",
                fontSize: ".9rem",
                lineHeight: 1.7,
              }}
            >
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </Sec>
  );
}

/* ── TEAM (4 members) ── */
function Team() {
  return (
    <Sec id="team" bg="#040410">
      <SecHead
        tag="The Team"
        title={`Built by <span class="grad">Passionate Builders</span>`}
        sub="A focused team of 4 that ships quality products and genuinely cares about client success."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20,
        }}
      >
        {TEAM.map((m, i) => (
          <div
            key={m.name}
            className={`team-card reveal d${i + 1}`}
            style={{
              perspective: "1000px",
              height: "370px",
            }}
          >
            <div
              className="team-inner"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "transform .7s",
                transformStyle: "preserve-3d",
              }}
            >
              {/* FRONT */}
              <div
                className="team-front"
                style={{
                  position: "absolute",
                  inset: 0,
                  backfaceVisibility: "hidden",
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 22,
                  padding: 30,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 20,
                    margin: "0 auto 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.7rem",
                    fontWeight: 800,
                    color: "#fff",
                    background: `linear-gradient(135deg, ${m.from}, ${m.to})`,
                    boxShadow: "0 10px 30px rgba(108,99,255,.35)",
                  }}
                >
                  {m.init}
                </div>

                <h3
                  className="font-syne"
                  style={{ marginBottom: 10 }}
                >
                  {m.name}
                </h3>

                <div
                  style={{
                    color: "#9B95FF",
                    fontWeight: 700,
                    fontSize: ".8rem",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {m.role}
                </div>

                <p
                  style={{
                    color: "rgba(240,240,255,.65)",
                    lineHeight: 1.8,
                    fontSize: ".9rem",
                  }}
                >
                  {m.tagline}
                </p>
              </div>

              {/* BACK */}
              <div
                className="team-back"
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(108,99,255,.2)",
                  borderRadius: 22,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="font-syne"
                    style={{
                      marginBottom: 18,
                      color: "#fff",
                    }}
                  >
                    Skills
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 10,
                      marginBottom: 22,
                    }}
                  >
                    {m.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: "7px 14px",
                          borderRadius: 999,
                          background: "rgba(108,99,255,.15)",
                          border: "1px solid rgba(108,99,255,.25)",
                          color: "#B8B2FF",
                          fontSize: ".75rem",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p style={{ color: "#ddd", marginBottom: 10 }}>
                    🚀 <strong>{m.projects}</strong> Projects Completed
                  </p>

                  <p style={{ color: "#ddd" }}>
                    ⭐ <strong>{m.experience}</strong> Experience
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 12,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/company/stackorax/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "11px",
                      borderRadius: 10,
                      background: "#6C63FF",
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    LinkedIn
                  </a>

                  <a
                    href="mailto:info@stackorax.in"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "11px",
                      borderRadius: 10,
                      background: "#181828",
                      border: "1px solid rgba(255,255,255,.1)",
                      color: "#fff",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Sec>
  );
}

/* ── TESTIMONIALS ── */
function Testimonials() {
  const all = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <Sec bg="#020208">
      <SecHead tag="Client Love" title={`What Clients <span class="grad">Say</span>`} />
      <div className="testi-fade" style={{ margin: "0 -24px" }}>
        <div className="testi-track" style={{ padding: "4px 24px" }}>
          {all.map((t, i) => (
            <div key={i} style={{ flexShrink: 0, width: 300, background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 18, padding: 22 }}>
              <div style={{ color: "#fbbf24", fontSize: ".8rem", marginBottom: 12, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ color: "rgba(240,240,255,.6)", fontSize: ".85rem", lineHeight: 1.72, marginBottom: 18, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#6C63FF,#00F5D4)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: ".82rem", color: "#fff", flexShrink: 0 }}>{t.av}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: ".85rem" }}>{t.name}</div>
                  <div style={{ color: "rgba(240,240,255,.4)", fontSize: ".72rem" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}

/* ── PRICING ── */
function Pricing() {
  return (
    <Sec id="pricing" bg="#040410">
      <SecHead tag="Pricing" title={`Transparent <span class="grad">Pricing</span>`}
        sub="No hidden fees. Affordable packages starting from ₹4,999." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20, alignItems: "center" }}>
        {PRICING.map((p, i) => (
          <div key={p.tier} className={`reveal d${i + 1} price-card`}
            style={p.popular
              ? { background: "rgba(108,99,255,.1)", border: "2px solid #6C63FF", borderRadius: 22, padding: 30, position: "relative", boxShadow: "0 0 60px rgba(108,99,255,.2)" }
              : { background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 22, padding: 30, position: "relative" }}>
            {p.popular && (
              <div style={{ position: "absolute", top: -15, left: "50%", transform: "translateX(-50%)", padding: "3px 16px", borderRadius: 100, fontSize: ".7rem", fontWeight: 700, color: "#fff", background: "linear-gradient(135deg,#6C63FF,#00F5D4)", whiteSpace: "nowrap" }}>
                Most Popular
              </div>
            )}
            <div style={{ fontSize: ".7rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(240,240,255,.4)", marginBottom: 8 }}>{p.tier}</div>
            <div className="font-syne grad" style={{ fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-.03em", marginBottom: 4 }}>{p.price}</div>
            <div style={{ fontSize: ".78rem", color: "rgba(240,240,255,.35)", marginBottom: 8 }}>{p.period}</div>
            <p style={{ fontSize: ".83rem", color: "rgba(240,240,255,.45)", marginBottom: 22 }}>{p.desc}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 26 }}>
              {p.feats.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 11, fontSize: ".83rem", color: "rgba(240,240,255,.65)" }}>
                  <span style={{ flexShrink: 0, width: 17, height: 17, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".58rem", marginTop: 1, background: p.popular ? "rgba(0,245,212,.12)" : "rgba(108,99,255,.12)", border: p.popular ? "1px solid rgba(0,245,212,.22)" : "1px solid rgba(108,99,255,.2)", color: p.popular ? "#00F5D4" : "#9B95FF" }}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <a href="#contact"
              style={{ display: "block", width: "100%", textAlign: "center", padding: "12px", borderRadius: 100, fontWeight: 600, fontSize: ".88rem", textDecoration: "none", ...(p.popular ? { background: "linear-gradient(135deg,#6C63FF,#4A42D4)", color: "#fff", boxShadow: "0 6px 24px rgba(108,99,255,.35)" } : { border: "1.5px solid rgba(255,255,255,.12)", color: "rgba(240,240,255,.8)" }) }}>
              Get Started →
            </a>
          </div>
        ))}
      </div>
    </Sec>
  );
}

/* ── CONTACT – sends email to stackorax@gmail.com via mailto ── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    // Build mailto link – opens client's email app addressed to you
    const subject = encodeURIComponent(`New Project Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:stackorax@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Sec id="contact" bg="#020208">
      <SecHead tag="Let's Talk" title={`Start Your <span class="grad">Project</span>`}
        sub="Ready to build something great? Fill in the form and we'll get back to you within 24 hours." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 36 }}>
        {/* Info */}
        <div className="reveal-l" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <div className="font-syne" style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: 9 }}>Let's connect</div>
            <p style={{ color: "rgba(240,240,255,.5)", fontSize: ".88rem", lineHeight: 1.75 }}>
              Whether you have a project in mind or just want to explore — we're here to help turn your idea into reality.
            </p>
          </div>
          {[
  {
    icon: <FaEnvelope />,
    label: "Email",
    val: "info@stackorax.in",
    href: "mailto:info@stackorax.in",
    bg: "rgba(108,99,255,.14)",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    val: "+91 88389 22503 / +91 84897 10814",
    href: "tel:+918838922503",
    bg: "rgba(108,99,255,.14)",
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    val: "Chat with us on WhatsApp →",
    href: "https://wa.me/918838922503",
    bg: "rgba(37,211,102,.12)",
    vc: "#25D366",
  },
].map((ch) => (
  <a
    key={ch.label}
    href={ch.href}
    target={ch.href.startsWith("http") ? "_blank" : undefined}
    rel="noreferrer"
    className="card-glow"
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: 15,
      borderRadius: 16,
      background: "rgba(255,255,255,.03)",
      border: "1px solid rgba(255,255,255,.07)",
      textDecoration: "none",
      transition: "all .3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.borderColor = "#6C63FF";
      e.currentTarget.style.background = "rgba(255,255,255,.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,.07)";
      e.currentTarget.style.background = "rgba(255,255,255,.03)";
    }}
  >
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: ch.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        color: ch.vc || "#9B95FF",
        flexShrink: 0,
      }}
    >
      {ch.icon}
    </div>

    <div>
      <div
        style={{
          fontSize: ".72rem",
          color: "rgba(240,240,255,.45)",
          marginBottom: 3,
        }}
      >
        {ch.label}
      </div>

      <div
        style={{
          fontWeight: 600,
          fontSize: ".88rem",
          color: ch.vc || "#F8F8FF",
        }}
      >
        {ch.val}
      </div>
    </div>
  </a>
))}
        </div>

        {/* Form */}
        <div className="reveal-r" style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 20, padding: 26 }}>
          <div className="font-syne" style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 20 }}>Send us a message</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { key: "name", label: "Your Name", type: "text", ph: "John Doe" },
              { key: "email", label: "Email Address", type: "email", ph: "you@company.com" },
            ].map(f => (
              <div key={f.key}>
                <label style={{ display: "block", fontSize: ".74rem", fontWeight: 600, color: "rgba(240,240,255,.5)", marginBottom: 6 }}>{f.label}</label>
                <input type={f.type} className="inp" placeholder={f.ph} value={form[f.key]} onChange={e => set(f.key, e.target.value)} style={{ padding: "11px 15px", fontSize: ".88rem" }} />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: ".74rem", fontWeight: 600, color: "rgba(240,240,255,.5)", marginBottom: 6 }}>Message</label>
              <textarea className="inp" placeholder="Tell us about your project, budget, and timeline..." value={form.message} onChange={e => set("message", e.target.value)}
                style={{ padding: "11px 15px", fontSize: ".88rem", height: 115, resize: "none", display: "block" }} />
            </div>

            {error && <div style={{ fontSize: ".8rem", color: "#f87171", padding: "8px 12px", borderRadius: 8, background: "rgba(248,113,113,.08)", border: "1px solid rgba(248,113,113,.2)" }}>{error}</div>}

            {sent && (
              <div style={{ fontSize: ".8rem", color: "#4ade80", padding: "8px 12px", borderRadius: 8, background: "rgba(74,222,128,.08)", border: "1px solid rgba(74,222,128,.2)" }}>
                ✓ Your email client opened! Send the email to reach us at stackorax@gmail.com
              </div>
            )}

            <button onClick={submit}
              style={{ width: "100%", padding: "13px", borderRadius: 100, fontWeight: 600, fontSize: ".92rem", color: "#fff", border: "none", cursor: "pointer", transition: "all .3s", background: "linear-gradient(135deg,#6C63FF,#4A42D4)", boxShadow: "0 6px 24px rgba(108,99,255,.32)" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}>
              Send Message →
            </button>

            <p style={{ fontSize: ".72rem", color: "rgba(240,240,255,.3)", textAlign: "center" }}>
              Clicking Send will open your email app — just click Send there too.
            </p>
          </div>
        </div>
      </div>
    </Sec>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{ background: "#040410", borderTop: "1px solid rgba(255,255,255,.07)", padding: "52px 24px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 36, marginBottom: 36 }}>
          <div>
            <div className="font-syne grad2" style={{ fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-.025em", marginBottom: 12 }}>STACKORAX</div>
            <p style={{ color: "rgba(240,240,255,.4)", fontSize: ".83rem", lineHeight: 1.7, maxWidth: 240, marginBottom: 16 }}>
              Building modern websites, custom software, and scalable digital solutions that help startups and businesses grow online.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  icon: <FaInstagram />,
                  href: "https://www.instagram.com/stackorax/",
                },
                {
                  icon: <FaLinkedin />,
                  href: "https://www.linkedin.com/company/stackorax/",
                },
                {
                  icon: <FaGlobe />,
                  href: "https://stackorax.in",
                },
                {
                  icon: <FaEnvelope />,
                  href: "mailto:info@stackorax.in",
                },
                {
                  icon: <FaWhatsapp />,
                  href: "https://wa.me/918838922503",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: "18px",
                    textDecoration: "none",
                    transition: "all .3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#6C63FF";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 25px rgba(108,99,255,.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-syne" style={{ fontWeight: 700, fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(240,240,255,.35)", marginBottom: 16 }}>Services</div>
            {[
              { label: "Business Websites", href: "#services" },
              { label: "Full-Stack Web Apps", href: "#services" },
              { label: "UI/UX Design", href: "#services" },
              { label: "SEO Optimization", href: "#services" },
              { label: "Website Maintenance", href: "#services" },
            ].map(l => <a key={l.label} href={l.href} className="ft-link">{l.label}</a>)}
          </div>
          <div>
            <div className="font-syne" style={{ fontWeight: 700, fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(240,240,255,.35)", marginBottom: 16 }}>Company</div>
            {[
              { label: "About Us", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Our Team", href: "#team" },
              { label: "Pricing", href: "#pricing" },
              { label: "Contact", href: "#contact" },
            ].map(l => <a key={l.label} href={l.href} className="ft-link">{l.label}</a>)}
          </div>
          <div>
            <div className="font-syne" style={{ fontWeight: 700, fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(240,240,255,.35)", marginBottom: 16 }}>Contact</div>
            <a href="mailto:info@stackorax.in" className="ft-link">info@stackorax.in</a>
            <a href="tel:+918838922503" className="ft-link">+91 8838922503</a>
            <a href="tel:+918489710814" className="ft-link">+91 8489710814</a>
            <a href="https://wa.me/918838922503" target="_blank" rel="noreferrer"
              style={{ color: "#4ade80", fontSize: ".85rem", textDecoration: "none", display: "block", transition: "opacity .2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              → Chat on WhatsApp
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 22, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: ".76rem", color: "rgba(240,240,255,.3)" }}>© {new Date().getFullYear()} <span style={{ color: "#9B95FF" }}>Stackorax Technologies</span>. All Rights Reserved. Made with ❤️ in Chennai, India.</div>
          <div style={{ display: "flex", gap: 18 }}>
            {["Privacy Policy", "Terms of Service"].map(l => <a key={l} href="#" style={{ fontSize: ".76rem", color: "rgba(240,240,255,.3)", textDecoration: "none" }}>{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── WA FLOAT ── */
function WAFloat() {
  return (
    <a href="https://wa.me/918838922503" target="_blank" rel="noreferrer" className="wa-float"
      style={{ position: "fixed", bottom: 26, right: 26, zIndex: 50, width: 52, height: 52, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 24px rgba(37,211,102,.4)", textDecoration: "none" }}>
      <svg width="25" height="25" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

/* ── APP ── */
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const injected = useRef(false);

  if (!injected.current && typeof document !== "undefined") {
    injected.current = true;
    const el = document.createElement("style");
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
  }

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(t);
  }, []);

  useReveal();
  useCounter();

  return (
    <>
      <Loader done={loaded} />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Team />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
