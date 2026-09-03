import Image from "next/image";
import Link from "next/link";
import { navigation } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div><p className="footer-eyebrow">Speech Behavior &amp; Science Lab</p><h2>Listen closer.<br />Look deeper.</h2></div>
        <nav aria-label="Footer navigation">
          {navigation.slice(1).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="footer-contact">
          <a href="mailto:sbslab.ntu@gmail.com">sbslab.ntu@gmail.com</a>
          <p>Graduate Institute of Linguistics<br />National Taiwan University<br />Taipei, Taiwan</p>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <div className="institution-logos" aria-label="Affiliated institutions">
          <a href="https://www.ntu.edu.tw/" target="_blank" rel="noreferrer"><Image src="/img/logo/ntu.png" alt="National Taiwan University" width={42} height={42} /></a>
          <a href="https://linguistics.ntu.edu.tw/" target="_blank" rel="noreferrer"><Image src="/img/logo/gil.png" alt="Graduate Institute of Linguistics" width={42} height={42} /></a>
        </div>
        <p>© {new Date().getFullYear()} SBS Lab · NTU</p>
      </div>
    </footer>
  );
}
