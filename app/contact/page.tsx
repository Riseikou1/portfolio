import type { Metadata } from "next";
import ThemeToggle from "../../components/theme-toggle";
import { ArrowUpIcon, ArrowUpRightIcon } from "../../components/ui-icons";

export const metadata: Metadata = {
  title: "Contact — Temuujin Gerelt-Och",
  description: "Get in touch with Temuujin Gerelt-Och about research, AI projects, and collaboration.",
};

export default function Contact() {
  return <main>
    <header className="site-header wrap"><a className="wordmark" href="/" aria-label="Temuujin home"><img className="site-logo" src="/logo.png" alt="" width="42" height="42" /><span>TEMUUJIN<br /><small>GERELT-OCH</small></span></a><nav aria-label="Main navigation"><a href="/#work">Work</a><a href="/#about">About</a><a href="/#credentials">Credentials</a></nav><div className="header-right"><ThemeToggle /><a className="nav-contact" href="/"><span className="contact-label">Back home</span><span className="contact-label-short">Home</span><ArrowUpRightIcon /></a></div></header>
    <div className="contact-main wrap"><div className="contact-intro"><p className="section-kicker">04 / CONTACT</p><h1>Let&apos;s <em>talk.</em><ArrowUpRightIcon className="contact-title-arrow" /></h1><p>Questions, thoughtful feedback, and conversations about research, AI, or a project idea are always welcome.</p></div><div className="contact-layout"><div className="contact-list"><a href="mailto:temka4705@gmail.com"><span>EMAIL</span><strong>temka4705@gmail.com</strong><ArrowUpRightIcon /></a><a href="tel:+821080893208"><span>PHONE</span><strong>+82 10-8089-3208</strong><ArrowUpRightIcon /></a><a href="https://www.linkedin.com/in/temuujin-gerelt-och/" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>Temuujin Gerelt-Och</strong><ArrowUpRightIcon /></a><a href="https://github.com/Riseikou1" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>Riseikou1</strong><ArrowUpRightIcon /></a></div><aside className="contact-note"><span>ONE MORE THING</span><h2>My résumé, at a glance.</h2><p>Education, skills, and selected work in one document. Updated 2026.</p><a href="/resume.pdf" target="_blank" rel="noreferrer">Open full résumé <ArrowUpRightIcon /></a></aside></div></div>
    <footer className="footer wrap"><span>© {new Date().getFullYear()} TEMUUJIN GERELT-OCH</span><div><a href="/#work">WORK <ArrowUpRightIcon /></a><a href="/#credentials">CERTIFICATES <ArrowUpRightIcon /></a></div><a href="/">BACK HOME <ArrowUpIcon /></a></footer>
  </main>;
}
