import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { capabilities, contactEmail, industries, legalLinks, navLinks, whatsappHref } from "@/app/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-lead">
        <div>
          <p className="kicker">BUILD WITH US</p>
          <h2>Technology should keep working after launch.</h2>
        </div>
        <Link className="footer-talk" href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" /></Link>
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Dawood Technologies home">
            <Image src="/dawood-technologies-logo.png" alt="" width={1714} height={221} />
          </Link>
          <p>We design, build, operate and improve technology around the way businesses actually work.</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={whatsappHref} rel="noopener noreferrer" target="_blank">WhatsApp</a>
        </div>
        <nav className="footer-column" aria-label="Company links">
          <strong>Navigate</strong>
          {navLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          <Link href="/contact">Contact</Link>
        </nav>
        <nav className="footer-column" aria-label="Capability links">
          <strong>Services</strong>
          {capabilities.slice(0, 5).map((item) => <Link href={`/services/${item.slug}`} key={item.title}>{item.title}</Link>)}
        </nav>
        <nav className="footer-column" aria-label="Industry links">
          <strong>Industries</strong>
          {industries.slice(0, 4).map((item) => <Link href="/industries" key={item.title}>{item.title}</Link>)}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>Copyright {new Date().getFullYear()} Dawood Technologies</span>
        <div>{legalLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</div>
      </div>
    </footer>
  );
}
