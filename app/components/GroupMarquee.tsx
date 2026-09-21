import Image from "next/image";
import { groupCompanies } from "@/app/data/site";

export function GroupMarquee() {
  return (
    <section className="group-section" aria-label="Business environments">
      <div className="container group-showcase">
        <div className="group-company-grid">
          {groupCompanies.map((company) => (
            <a className={`group-company ${company.caption ? "group-company-rcc" : ""}`} href={company.url} key={company.name} aria-label={`Visit ${company.name}`}>
              <div className="group-logo-frame">
                <Image src={company.logo} alt="" fill sizes="(max-width: 680px) 32vw, 180px" />
              </div>
              <span className="group-company-meta">
                <strong>{company.name}</strong>
                <small>{company.descriptor}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
