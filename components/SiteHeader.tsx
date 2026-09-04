"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "./site-data";

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="SBS Lab home">
      <span className="brand-mark" aria-hidden="true">
        <i /><i /><i /><i /><i />
      </span>
      <span>SBS Lab</span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const atHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!atHome);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(!atHome || window.scrollY > 430);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [atHome]);

  useEffect(() => setExpanded(false), [pathname]);

  const solid = scrolled || expanded;

  return (
    <header className={`site-header${atHome ? " home-header" : ""}${solid ? " solid" : " transparent"}`}>
      <div className="header-inner">
        <div className="brand-slot"><Brand /></div>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const itemPath = item.href === "/" ? "/" : item.href.slice(0, -1);
            const active = itemPath === "/" ? pathname === "/" : pathname === itemPath;
            return <Link aria-current={active ? "page" : undefined} href={item.href} key={item.href}>{item.label}</Link>;
          })}
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={expanded}
          aria-controls="mobile-navigation"
          aria-label={expanded ? "Close navigation" : "Open navigation"}
          onClick={() => setExpanded((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </div>
      <nav className={`mobile-nav${expanded ? " open" : ""}`} id="mobile-navigation" aria-label="Mobile navigation">
        {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
      </nav>
    </header>
  );
}
