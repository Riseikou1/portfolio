"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Category = "All" | "Live sites" | "Experiments";
const projects = [
  { number: "01", title: "Research GAP", kind: "Live sites", meta: "RESEARCH TOOLS / AI", description: "An evidence-aware way to explore a research question. It brings relevant literature, source-linked findings, and possible gaps into one inspectable first pass.", href: "https://research-gap.site", label: "Visit Research GAP", tags: ["Research", "Evidence", "AI"], visual: "research" },
  { number: "02", title: "Jarvisn't", kind: "Live sites", meta: "LANGUAGE MODELS / LEARNING", description: "An independent small language-model project. I'm building the pipeline from text and tokenization through architecture, training, evaluation, and eventual inference.", href: "https://jarvisnt.vercel.app", label: "Explore Jarvisn't", tags: ["LLMs", "Training", "In progress"], visual: "jarvis" },
  { number: "03", title: "Deal detection system", kind: "Experiments", meta: "MACHINE LEARNING / DATA", description: "A system that parses online store items, predicts fair prices with machine learning, and alerts when a listing looks undervalued.", href: "", label: "", tags: ["Python", "Prediction", "Automation"], visual: "price" },
  { number: "04", title: "Hand-tracking canvas", kind: "Experiments", meta: "COMPUTER VISION / INTERACTION", description: "A real-time finger-tracking experiment that turns hand motion into on-screen drawing with low-latency landmark detection.", href: "", label: "", tags: ["Computer vision", "OpenCV", "Interaction"], visual: "hand" },
];
const certificates = [
  { title: "Machine Learning A–Z", subtitle: "AI, Python & R + ChatGPT", date: "NOV 2024", file: "Machine_Learning_Certificate" },
  { title: "Artificial Intelligence A–Z", subtitle: "Build AI, LLM & ChatGPT", date: "NOV 2024", file: "AI_Certificate" },
  { title: "Deep Learning A–Z", subtitle: "Neural networks & AI", date: "JAN 2025", file: "Deep_Learning_Certificate" },
  { title: "LLM Engineering", subtitle: "Language models & agents", date: "JAN 2025", file: "LLM_Certificate" },
  { title: "Deep Learning & Computer Vision", subtitle: "Computer Vision A–Z", date: "JAN 2025", file: "Computer_Vision" },
];

export default function Home() {
  const [category, setCategory] = useState<Category>("All");
  const [activeCertificate, setActiveCertificate] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setActiveCertificate(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const visibleProjects = projects.filter(project => category === "All" || project.kind === category);
  return <main>
    <header className="site-header wrap">
      <Link className="wordmark" href="/" aria-label="Temuujin home"><span className="mark">T<span>.</span></span><span>TEMUUJIN<br /><small>GERELT-OCH</small></span></Link>
      <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation"><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#credentials" onClick={() => setMenuOpen(false)}>Credentials</a></nav>
      <div className="header-right"><button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"}</button><Link className="nav-contact" href="/contact">Let&apos;s talk <span>↗</span></Link></div>
    </header>
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot" /> AI ENGINEER IN THE MAKING <span className="eyebrow-line" /> SEOUL, KR</div>
        <h1>Turning <em>curiosity</em><br />into intelligent<br /><span className="highlight-word">systems<span className="period">.</span></span></h1>
        <p className="hero-intro">I&apos;m Temuujin — an AI and data science student building useful things at the intersection of research, machine learning, and human experience.</p>
        <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <span>↘</span></a><Link className="text-link" href="/contact">Get in touch <span>↗</span></Link></div>
        <div className="hero-foot"><span>OPEN TO COLLABORATION</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
      <div className="hero-visual" aria-label="Temuujin Gerelt-Och working on a laptop">
        <div className="visual-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="portrait-frame"><img src="/portrait-new.png" alt="Temuujin Gerelt-Och working on a laptop" /></div>
        <div className="visual-label top-label">HELLO, I&apos;M<br /><strong>TEMUUJIN.</strong></div>
        <div className="visual-label bottom-label"><span className="asterisk">✳</span> BUILDING WHAT&apos;S NEXT</div>
        <div className="visual-coordinate">37°36&apos; N &nbsp; 127°00&apos; E</div>
      </div>
    </section>
    <section className="preview-strip" id="work"><div className="wrap preview-inner"><span>01 / SELECTED WORK</span><h2>Ideas made <em>real.</em></h2><span>2024 — NOW ↓</span></div></section>
    <section className="work-section wrap" aria-labelledby="work-title"><div className="section-head"><div><p className="section-kicker">THE PORTFOLIO / 01—04</p><h2 id="work-title">Selected projects<span className="period">.</span></h2></div><p>From evidence-led research tools to learning how language models work under the hood.</p></div>
      <div className="filters" role="group" aria-label="Filter projects">{(["All", "Live sites", "Experiments"] as Category[]).map(item => <button key={item} type="button" className={category === item ? "filter active" : "filter"} aria-pressed={category === item} onClick={() => setCategory(item)}>{item} <span>{item === "All" ? "04" : "02"}</span></button>)}</div>
      <div className="project-grid">{visibleProjects.map(project => <article className="project-card" key={project.number}>
        <div className={`project-art ${project.visual}`} aria-hidden="true">{project.visual === "research" ? <div className="research-ui"><div className="ui-top"><span>◉ &nbsp; Research GAP</span><span>⌕ &nbsp; ●</span></div><div className="research-question">What does the evidence <em>actually</em> say?</div><div className="research-lines"><span /><span /><span /></div><div className="research-pill">✳ &nbsp; EVIDENCE IN CONTEXT</div></div> : project.visual === "jarvis" ? <div className="jarvis-ui"><span className="jarvis-orb">✳</span><span className="jarvis-name">Jarvisn&apos;t<span className="blink">_</span></span><span className="jarvis-sub">A small model, learning in public.</span><span className="jarvis-input">What can I help with? <b>↑</b></span></div> : project.visual === "price" ? <div className="price-ui"><span className="chart-label">PREDICTED VALUE / MARKET PRICE</span><div className="bar-chart"><i/><i/><i/><i/><i/><i/><i/></div><span className="deal-tag">↓ UNDERVALUED</span></div> : <div className="hand-ui"><span className="hand-cursor">✳</span><div className="hand-trail" /><span>YOUR HAND. YOUR CANVAS.</span></div>}</div>
        <div className="project-info"><div className="project-meta"><span>{project.number} / {project.meta}</span><span>{project.kind === "Live sites" ? "LIVE ↗" : "CONCEPT"}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-bottom"><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.label} (opens in new tab)`}>Explore ↗</a>}</div></div>
      </article>)}</div>
    </section>
    <section className="about-section" id="about"><div className="wrap about-grid"><div className="about-title"><p className="section-kicker">02 / A LITTLE ABOUT ME</p><h2>Grounded in<br /><em>learning.</em><br />Driven to build<span className="period">.</span></h2><div className="about-asterisk">✳</div></div><div className="about-content"><p className="about-lead">I&apos;m a student at Kookmin University in Seoul, exploring how intelligent systems can make research and everyday work clearer and more useful.</p><p>My interests span machine learning, deep learning, computer vision, and language models. I like understanding the whole pipeline — from data and model training to the experience people actually use.</p><div className="about-facts"><div><span>BASED IN</span><strong>Seoul, South Korea</strong></div><div><span>STUDYING AT</span><strong>Kookmin University</strong></div><div><span>FOCUS AREAS</span><strong>AI · Data Science · Research</strong></div></div><a className="button button-outline" href="/resume.pdf" target="_blank" rel="noreferrer">View my résumé <span>↗</span></a></div></div></section>
    <section className="skills-section wrap" aria-labelledby="skills-title">
      <div className="section-head"><div><p className="section-kicker">TOOLS & THINKING</p><h2 id="skills-title">What I work with<span className="period">.</span></h2></div><p>A growing toolkit for practical, thoughtful AI work — from the first experiment to a more efficient model.</p></div>
      <div className="skill-grid">
        <div><span>01</span><h3>Build</h3><p>Python, JavaScript, Java, C++, Bash, MySQL</p></div>
        <div><span>02</span><h3>Model</h3><p>PyTorch, scikit-learn, neural networks, transformers</p></div>
        <div><span>03</span><h3>Explore</h3><p>Data processing, research synthesis, computer vision</p></div>
        <div className="skill-optimize"><span>04 / DEEP LEARNING SYSTEMS</span><h3>Optimize <b>↗</b></h3><p>Exploring faster, leaner training and inference through modern GPU techniques.</p><div className="optimization-tags"><span>Muon optimizer</span><span>FlashAttention-3</span><span>Multi-GPU · DDP/FSDP</span><span>Mixed precision</span><span>GPU profiling</span></div></div>
      </div>
    </section>
    <section className="credential-section" id="credentials"><div className="wrap"><div className="section-head"><div><p className="section-kicker">03 / CONTINUOUS LEARNING</p><h2>Certificates<span className="period">.</span></h2></div><p>Coursework that helped me turn theory into hands-on practice. Select a certificate to view it.</p></div><div className="certificate-grid">{certificates.map((cert, index) => <button type="button" className="certificate-card" key={cert.file} onClick={() => setActiveCertificate(index)} aria-label={`View ${cert.title} certificate`}><div className="certificate-thumb"><img src={`/certificates/${cert.file}.png`} alt="" loading="lazy" /></div><div className="certificate-text"><span>UDEMY / {cert.date}</span><h3>{cert.title}</h3><p>{cert.subtitle}</p><b>VIEW CERTIFICATE ↗</b></div></button>)}</div></div></section>
    <section className="closing-section"><div className="wrap closing-inner"><div><p className="section-kicker">NEXT / LET&apos;S CONNECT</p><h2>Have an idea<br />worth <em>exploring?</em></h2></div><Link href="/contact" className="closing-button">Start a conversation <span>↗</span></Link></div></section>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} TEMUUJIN GERELT-OCH</span><div><a href="https://github.com/Riseikou1" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/temuujin-gerelt-och/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="mailto:temka4705@gmail.com">EMAIL ↗</a></div><a href="#top">BACK TO TOP ↑</a></footer>
    {activeCertificate !== null && <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={`${certificates[activeCertificate].title} certificate`} onClick={() => setActiveCertificate(null)}><div className="modal-panel" onClick={event => event.stopPropagation()}><div className="modal-header"><div><span>UDEMY CERTIFICATE</span><h2>{certificates[activeCertificate].title}</h2></div><button type="button" onClick={() => setActiveCertificate(null)} aria-label="Close certificate">✕</button></div><img src={`/certificates/${certificates[activeCertificate].file}.png`} alt={`${certificates[activeCertificate].title} certificate awarded to Gerelt Och Temuujin`} /><a href={`/certificates/${certificates[activeCertificate].file}.pdf`} target="_blank" rel="noreferrer">Open original PDF ↗</a></div></div>}
  </main>;
}
