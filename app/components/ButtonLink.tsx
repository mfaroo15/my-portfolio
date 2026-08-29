import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

export function ButtonLink({ href, children, variant = "secondary" }: ButtonLinkProps) {
  const className = ["button", variant === "primary" ? "button-primary" : "", variant === "dark" ? "button-dark" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
