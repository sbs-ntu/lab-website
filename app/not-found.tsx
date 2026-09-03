export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you requested does not exist or has moved.</p>
      <a className="button button-primary" href="/">
        Return to the lab
      </a>
    </main>
  );
}
