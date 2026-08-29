import Link from "next/link";
import { contactEmail, navLinks, whatsappHref, whatsappLabel, whatsappNumber } from "@/app/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">MFI Technologies</div>
          <p>Business technology solutions for websites, software, systems, cybersecurity, data and AI automation.</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={whatsappHref} rel="noopener noreferrer" target="_blank">
            {whatsappLabel}: {whatsappNumber}
          </a>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {navLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-copy">Copyright {new Date().getFullYear()} MFI Technologies</div>
      </div>
    </footer>
  );
}
