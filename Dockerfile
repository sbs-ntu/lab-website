FROM node:22-bookworm-slim AS dependencies

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM dependencies AS build

COPY . .
RUN npm run build

FROM node:22-bookworm-slim AS runtime

WORKDIR /app
RUN npm install --global serve@14.2.6
COPY --from=build /app/out ./out

EXPOSE 3005
CMD ["serve", "-l", "3005", "out"]
