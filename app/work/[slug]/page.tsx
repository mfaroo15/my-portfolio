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
      <section><p className="kicker">BUSINESS CONTEXT</p><h2>Technology tied to operating requirements.</h2><p>Dawood Technologies supports {project.name}&apos;s digital presence and ongoing technology requirements. Work is planned against the business&apos;s workflows, priorities and operating constraints.</p></section>
      <section><p className="kicker">OUR ROLE</p><h2>Build, maintain and support.</h2><p>The engagement covers the digital systems needed for business presence and continuity, with ongoing support as requirements change.</p></section>
      <section className="case-note"><strong>Published scope</strong><p>Detailed implementation information and project outcomes are kept private unless approved for publication.</p></section>
    </div></div></section>
    <ContactBand title="Put technology to work inside your operation." />
  </main>;
}
