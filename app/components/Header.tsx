"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MobileNavigation } from "@/app/components/MobileNavigation";
import { navLinks } from "@/app/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="MFI Technologies home">
          <span className="brand-mark">
            <span>MFI</span>
          </span>
          <span>
            <span className="brand-name">MFI Technologies</span>
            <span className="brand-tag">BUSINESS TECHNOLOGY SOLUTIONS</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((item) => (
            <Link aria-current={pathname === item.href ? "page" : undefined} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/contact">
          Start a Project
        </Link>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {open ? <MobileNavigation pathname={pathname} onNavigate={() => setOpen(false)} /> : null}
    </header>
  );
}
