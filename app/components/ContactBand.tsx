import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactBand({ title = "Bring us the business challenge." }: { title?: string }) {
  return <section className="contact-band"><div className="container"><p className="kicker">START A CONVERSATION</p><h2>{title}</h2><p>We will help define the right technology path, including what should happen now and what can wait.</p><Link className="button button-primary" href="/contact">Let&apos;s Talk <ArrowUpRight aria-hidden="true" size={17} /></Link></div></section>;
}
