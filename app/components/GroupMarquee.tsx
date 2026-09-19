import Image from "next/image";
import { groupCompanies } from "@/app/data/site";

function MarqueeSegment() {
  return (
    <div className="group-marquee-segment" aria-hidden="true">
      {[...groupCompanies, ...groupCompanies].map((company, index) => (
        <div className={`group-company ${company.caption ? "group-company-rcc" : ""}`} key={`${company.name}-${index}`}>
          <div className="group-logo-frame">
            <Image src={company.logo} alt="" fill sizes="(max-width: 680px) 180px, 260px" />
          </div>
          {company.caption ? (
            <span className="group-company-caption">
              <strong>Dawood</strong>
              <small>RCC PIPE</small>
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function GroupMarquee() {
  return (
    <section className="group-section" aria-labelledby="group-title">
      <div className="container group-heading">
        <p className="section-kicker" id="group-title">OUR GROUP</p>
        <div className="group-rule" />
        <p>Built on shared enterprise values</p>
      </div>

      <ul className="sr-only">
        {groupCompanies.map((company) => (
          <li key={company.name}>{company.name}</li>
        ))}
      </ul>

      <div className="group-marquee" role="presentation">
        <div className="group-marquee-track">
          <MarqueeSegment />
          <MarqueeSegment />
        </div>
      </div>
    </section>
  );
}
