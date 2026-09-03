"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "./site-data";

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="SBS Lab home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /><i /></span>
      <span className="brand-words"><strong>SBS Lab</strong><small>National Taiwan University</small></span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const itemPath = item.href === "/" ? "/" : item.href.slice(0, -1);
            const active = itemPath === "/" ? pathname === "/" : pathname === itemPath || pathname.startsWith(`${itemPath}/`);
            return <Link className={active ? "active" : ""} href={item.href} key={item.href}>{item.label}</Link>;
          })}
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span>Menu</span><i /><i /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}<span>→</span></Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
