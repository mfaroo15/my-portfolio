import { ButtonLink } from "@/app/components/ButtonLink";

type ServiceCardProps = {
  code: string;
  title: string;
  summary: string;
  value?: string;
  deliverables?: string[];
  compact?: boolean;
};

export function ServiceCard({ code, title, summary, value, deliverables, compact = false }: ServiceCardProps) {
  return (
    <article className={`service-card ${compact ? "service-card-compact" : ""}`}>
      <div className="service-code">{code}</div>
      <h3>{title}</h3>
      <p>{summary}</p>
      {value ? (
        <div className="service-detail">
          <strong>Business value</strong>
          <p>{value}</p>
        </div>
      ) : null}
      {deliverables?.length ? (
        <div className="service-detail">
          <strong>Typical deliverables</strong>
          <ul>
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {!compact ? (
        <div className="card-action">
          <ButtonLink href="/contact" variant="dark">
            Discuss This Service
          </ButtonLink>
        </div>
      ) : null}
    </article>
  );
}
