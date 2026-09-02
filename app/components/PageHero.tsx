import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, text, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{text}</p>
          {children ? <div className="actions">{children}</div> : null}
        </div>
        <aside className="system-card" aria-label="MFI Technologies solution model">
          <div className="system-top">
            <span className="system-label">MFI SOLUTION SYSTEM</span>
            <span className="system-status">
              <span className="status-dot" />
              READY TO BUILD
            </span>
          </div>
          <div className="system-dashboard">
            <div className="dashboard-main">
              <span>01</span>
              <strong>Diagnostic to Delivery</strong>
              <p>Map the operating problem, build the right system and keep improving it after launch.</p>
            </div>
            <div className="dashboard-rail">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="system-stack">
            <div>
              <span>Plan</span>
              <strong>Diagnose</strong>
            </div>
            <div>
              <span>Build</span>
              <strong>Deliver</strong>
            </div>
            <div>
              <span>Run</span>
              <strong>Improve</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
