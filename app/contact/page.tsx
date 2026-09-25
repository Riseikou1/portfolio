import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../../components/theme-toggle";

export const metadata: Metadata = {
  title: "Contact — Temuujin Gerelt-Och",
  description: "Get in touch with Temuujin Gerelt-Och about research, AI projects, and collaboration.",
};

export default function Contact() {
  return <main>
    <header className="site-header wrap"><Link className="wordmark" href="/" aria-label="Temuujin home"><span className="mark-wrap"><span className="mark">T</span><span className="mark-dot" /></span><span>TEMUUJIN<br /><small>GERELT-OCH</small></span></Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#credentials">Credentials</Link></nav><div className="header-right"><ThemeToggle /><Link className="nav-contact" href="/">Back home <span>↗</span></Link></div></header>
    <div className="contact-main wrap"><div className="contact-intro"><p className="section-kicker">04 / CONTACT</p><h1>Let&apos;s <em>talk.</em><span className="period">↗</span></h1><p>Questions, thoughtful feedback, and conversations about research, AI, or a project idea are always welcome.</p></div><div className="contact-layout"><div className="contact-list"><a href="mailto:temka4705@gmail.com"><span>EMAIL</span><strong>temka4705@gmail.com</strong><b>↗</b></a><a href="tel:+821080893208"><span>PHONE</span><strong>+82 10-8089-3208</strong><b>↗</b></a><a href="https://www.linkedin.com/in/temuujin-gerelt-och/" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>Temuujin Gerelt-Och</strong><b>↗</b></a><a href="https://github.com/Riseikou1" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>Riseikou1</strong><b>↗</b></a></div><aside className="contact-note"><span>ONE MORE THING</span><h2>My résumé, at a glance.</h2><p>Education, skills, and selected work in one document. Updated 2026.</p><a href="/resume.pdf" target="_blank" rel="noreferrer">Open full résumé ↗</a></aside></div></div>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} TEMUUJIN GERELT-OCH</span><div><Link href="/#work">WORK ↗</Link><Link href="/#credentials">CERTIFICATES ↗</Link></div><Link href="/">BACK HOME ↑</Link></footer>
  </main>;
}
