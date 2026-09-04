export function SiteFooter() {
  return (
    <footer className="site-footer">
      <h2>Contact Us!</h2>
      <div className="footer-contact">
        <p>Speech Behavior and Science Lab</p>
        <a href="mailto:sbslab.ntu@gmail.com"><span aria-hidden="true">✉</span> sbslab.ntu@gmail.com</a>
        <p>Graduate Institute of Linguistics, National Taiwan University</p>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Speech Behavior and Science Lab<br />National Taiwan University</p>
    </footer>
  );
}
