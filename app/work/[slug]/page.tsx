import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactBand } from "@/app/components/ContactBand";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return work.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const project = work.find((item) => item.slug === slug);
  if (!project) return {};
  return createPageMetadata({ title: project.name, description: project.summary, path: `/work/${slug}` });
}

export default async function WorkDetail({ params }: Props) {
  const { slug } = await params; const project = work.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main id="main-content">
    <section className="case-hero"><div className="container case-hero-grid"><div><p className="kicker">WORK / {project.sector}</p><h1>{project.title}</h1><p>{project.summary}</p><a className="text-link" href={project.website} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight aria-hidden="true" size={16} /></a></div><div className="case-logo"><Image src={project.logo} alt={project.name} width={520} height={160} /></div></div></section>
    <section className="section case-content"><div className="container case-layout"><aside><span>CLIENT</span><strong>{project.name}</strong><span>SECTOR</span><strong>{project.sector}</strong></aside><div>
      <section><p className="kicker">BUSINESS CONTEXT</p><h2>Technology grounded in the operation.</h2><p>{project.name} is part of the operating environment through which Dawood Technologies develops practical business understanding. The relationship places technology close to real workflows, priorities and constraints.</p></section>
      <section><p className="kicker">OUR APPROACH</p><h2>Understand first. Build responsibly. Stay involved.</h2><p>Our role begins with the business context and extends beyond a single launch. Specific implementation details and outcomes will be added here only when they have been verified for publication.</p></section>
      <section className="case-note"><strong>Verified project detail</strong><p>This page intentionally avoids unsupported technology lists, performance metrics and outcome claims. Additional challenge, solution, technology and impact information should be published only after client approval.</p></section>
    </div></div></section>
    <ContactBand title="Put technology to work inside your operation." />
  </main>;
}
