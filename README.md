# Speech Behavior and Science Lab website

Static Next.js website for the Speech Behavior and Science Lab at the Graduate Institute of
Linguistics, National Taiwan University.

## Development

Run directly on the host:

```bash
npm install
npx next dev --hostname 0.0.0.0
```

Or run the development container with hot reload:

```bash
npm run dev:up
```

The development site is available at `http://localhost:13005`. Stop following the logs with
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
legacy container is stopped, keep using the development environment on port `13005`. `PROD_PORT`
can temporarily override the production host port if needed. The server's existing reverse proxy
remains responsible for the public domain and TLS.

Both environments use `docker-compose.yml`, with services named `dev` and `prod` and no profiles.
`npm run dev` and `npm run prod` start only the corresponding service in the background;
use the `:up` scripts to also follow its logs (`prod:up` also rebuilds the image).
`npm run dev:build` rebuilds and starts development, then follows its logs.
The `:logs` scripts follow only the corresponding service's logs. Each `:down` script stops
and removes only its service's container, preserving volumes and the other service.
`npm run build` still builds the static site on the host.

For direct Compose operations, always specify the service, for example
`docker compose -f docker-compose.yml build prod` or
`docker compose -f docker-compose.yml stop dev`. An unqualified `up` starts both services;
avoid project-wide `down` when operating on a single environment.

The shared project is named `lab-website`, replacing the separate `lab-website-dev` and
`lab-website-prod` projects. Both services now use its default network. The development
volume explicitly retains its original name, `lab-website-dev_lab-website-node-modules`,
to reuse existing dependencies. Existing containers from the old projects are not migrated
automatically: stop them before starting the corresponding new service on the same host port.
