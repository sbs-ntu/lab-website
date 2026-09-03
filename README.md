# Speech Behavior and Science Lab website

Static Next.js website for the Speech Behavior and Science Lab at the Graduate Institute of
Linguistics, National Taiwan University.

## Development

Run directly on the host:

```bash
npm install
npm run dev
```

Or run the development container with hot reload:

```bash
npm run dev:up
```

The development site is available at `http://localhost:3006`. Stop following the logs with
`Ctrl+C`; the container will keep running in the background. Stop and remove it with:

```bash
npm run dev:down
```

Set `DEV_PORT` to use a different host port, for example `DEV_PORT=3100 npm run dev:up`.

## Production build

```bash
npm run build
```

The build is exported to `out/`. The production container serves that directory on port `3005`.

```bash
npm run prod:up
```

Stop and remove the production container with:

```bash
npm run prod:down
```

Production intentionally binds host port `3005` so it can replace the legacy site. Until the
legacy container is stopped, keep using the development environment on port `3006`. `PROD_PORT`
can temporarily override the production host port if needed. The server's existing reverse proxy
remains responsible for the public domain and TLS.

The lower-level Compose commands are also available through `npm run dev:compose -- ...` and
`npm run prod:compose -- ...`.
