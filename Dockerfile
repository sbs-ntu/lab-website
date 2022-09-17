FROM ruby:3.1.2-slim-bullseye AS build

RUN apt-get update && apt-get install -y build-essential git && apt-get clean

RUN curl -fsSL https://get.pnpm.io/install.sh | sh -

WORKDIR /app

COPY . /app

RUN gem install jekyll bundler

RUN bundle install

RUN bundle exec jekyll build


FROM node:16-bullseye-slim

RUN npm i -g serve

WORKDIR /app

COPY --from=build /app/_site ./_site

