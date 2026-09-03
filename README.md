# Speech Behavior and Science Lab website

Static Next.js website for the Speech Behavior and Science Lab at the Graduate Institute of
Linguistics, National Taiwan University.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build is exported to `out/`. The production image serves that directory on port `3005`.

```bash
docker compose build
docker compose up -d
```

The server's existing reverse proxy remains responsible for the public domain and TLS.
