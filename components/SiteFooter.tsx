import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <h2>Contact Us!</h2>
      <div className="footer-contact">
        <p>Speech Behavior and Science Lab</p>
        <a href="mailto:sbslab.ntu@gmail.com"><span aria-hidden="true">✉</span> sbslab.ntu@gmail.com</a>
        <p>Graduate Institute of Linguistics, National Taiwan University</p>
      </div>
      <div className="footer-logos">
        <a href="https://www.ntu.edu.tw/" target="_blank" rel="noreferrer" aria-label="National Taiwan University">
          <Image src="/img/logo/ntu.png" alt="National Taiwan University" width={48} height={48} />
        </a>
        <a href="https://linguistics.ntu.edu.tw/" target="_blank" rel="noreferrer" aria-label="Graduate Institute of Linguistics, NTU">
          <Image src="/img/logo/gil.png" alt="Graduate Institute of Linguistics, NTU" width={48} height={48} />
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Speech Behavior and Science Lab<br />National Taiwan University</p>
    </footer>
  );
}
