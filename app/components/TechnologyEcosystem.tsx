import { TechnologyLogo } from "@/app/components/TechnologyLogo";
import { engineeringTechnologies, technologyCategories } from "@/app/data/site";

export function TechnologyEcosystem() {
  return (
    <aside className="technology-ecosystem" aria-labelledby="technology-ecosystem-title">
      <div className="technology-ecosystem-intro">
        <h3 id="technology-ecosystem-title">Technology Ecosystem</h3>
        <p>We work across established cloud, enterprise, data, commerce, and application platforms based on the requirements of each environment.</p>
      </div>
      <div className="technology-ecosystem-groups">
        {technologyCategories.map((group) => (
          <section key={group.title}>
            <h4>{group.title}</h4>
            <div>{group.logos.map((logo) => <TechnologyLogo key={logo.name} {...logo} />)}</div>
          </section>
        ))}
      </div>
      <div className="engineering-technologies">
        <h4>Engineering Technologies</h4>
        <p>{engineeringTechnologies.join(" · ")}</p>
      </div>
      <p className="platform-disclosure">Platform references indicate technologies we work with and do not imply vendor partnership or certification.</p>
    </aside>
  );
}
