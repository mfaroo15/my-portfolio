import Image from "next/image";
import { groupCompanies } from "@/app/data/site";

function MarqueeSegment() {
  return (
    <div className="group-marquee-segment" aria-hidden="true">
      {[...groupCompanies, ...groupCompanies].map((company, index) => (
        <a
          className={`group-company ${company.caption ? "group-company-rcc" : ""}`}
          href={company.url}
          key={`${company.name}-${index}`}
          tabIndex={-1}
        >
          <div className="group-logo-frame">
            <Image src={company.logo} alt="" fill sizes="(max-width: 680px) 180px, 260px" />
          </div>
          {company.caption ? (
            <span className="group-company-caption">
              <strong>Dawood</strong>
              <small>RCC PIPE</small>
            </span>
          ) : null}
        </a>
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
          <li key={company.name}>
            <a href={company.url}>{company.name}</a>
          </li>
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
