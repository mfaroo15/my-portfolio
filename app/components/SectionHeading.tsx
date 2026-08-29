type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <div className="section-kicker">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {text ? <p className="section-intro">{text}</p> : null}
    </div>
  );
}
