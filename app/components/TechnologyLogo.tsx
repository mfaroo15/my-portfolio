import type { CSSProperties } from "react";
import type { IconifyIcon } from "@iconify/types";
import aws from "@iconify-icons/logos/aws";
import microsoftAzure from "@iconify-icons/logos/microsoft-azure";
import googleCloud from "@iconify-icons/logos/google-cloud";
import salesforce from "@iconify-icons/logos/salesforce";
import microsoft from "@iconify-icons/logos/microsoft";
import oracle from "@iconify-icons/logos/oracle";
import powerBi from "@iconify-icons/logos/microsoft-power-bi";
import snowflake from "@iconify-icons/logos/snowflake";
import databricks from "@iconify-icons/logos/databricks";
import tableau from "@iconify-icons/logos/tableau";
import docker from "@iconify-icons/logos/docker";
import kubernetes from "@iconify-icons/logos/kubernetes";
import terraform from "@iconify-icons/logos/terraform";
import github from "@iconify-icons/logos/github-icon";

type TechnologyLogoProps = {
  name: string;
  category: string;
  visualScale?: number;
  accessibleLabel?: string;
};

const logos: Record<string, IconifyIcon> = {
  AWS: aws,
  "Microsoft Azure": microsoftAzure,
  "Google Cloud": googleCloud,
  Salesforce: salesforce,
  "Dynamics 365": microsoft,
  Oracle: oracle,
  NetSuite: oracle,
  "Power BI": powerBi,
  Snowflake: snowflake,
  Databricks: databricks,
  Tableau: tableau,
  Docker: docker,
  Kubernetes: kubernetes,
  Terraform: terraform,
  GitHub: github,
};

export function TechnologyLogo({ name, category, visualScale = 1, accessibleLabel }: TechnologyLogoProps) {
  const logo = logos[name];

  return (
    <div className="technology-logo" aria-label={`${accessibleLabel ?? name}, ${category}`} role="img">
      <span className="technology-logo-art" style={{ "--visual-scale": visualScale } as CSSProperties} aria-hidden="true">
        {logo ? <svg viewBox={`0 0 ${logo.width ?? 24} ${logo.height ?? 24}`} focusable="false" dangerouslySetInnerHTML={{ __html: logo.body }} /> : null}
      </span>
      <strong>{name}</strong>
      <small>{category}</small>
    </div>
  );
}
