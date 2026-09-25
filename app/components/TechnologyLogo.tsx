import type { CSSProperties } from "react";
import type { IconifyIcon } from "@iconify/types";
import aws from "@iconify-icons/logos/aws";
import microsoftAzure from "@iconify-icons/logos/microsoft-azure";
import googleCloud from "@iconify-icons/logos/google-cloud";
import salesforce from "@iconify-icons/logos/salesforce";
import microsoft from "@iconify-icons/logos/microsoft";
import powerBi from "@iconify-icons/logos/microsoft-power-bi";
import docker from "@iconify-icons/logos/docker";
import github from "@iconify-icons/logos/github-icon";
import shopify from "@iconify-icons/logos/shopify";
import react from "@iconify-icons/logos/react";
import nextjs from "@iconify-icons/logos/nextjs-icon";
import typescript from "@iconify-icons/logos/typescript-icon";
import nodejs from "@iconify-icons/logos/nodejs-icon";
import python from "@iconify-icons/logos/python";
import vercel from "@iconify-icons/logos/vercel-icon";

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
  "Microsoft Dynamics 365": microsoft,
  Shopify: shopify,
  "Power BI": powerBi,
  Docker: docker,
  GitHub: github,
  React: react,
  "Next.js": nextjs,
  TypeScript: typescript,
  "Node.js": nodejs,
  Python: python,
  Vercel: vercel,
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
