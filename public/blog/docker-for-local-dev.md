---
title: "Docker for Local Development: A Practical Guide"
hashtag: "docker, devops, tools, workflow"
date: "2026-04-15"
---

## Stop Installing Everything Locally

Every project comes with its own stack requirements — specific versions of PHP, Node.js, PostgreSQL, Redis. Installing all of these directly on your machine leads to version conflicts, polluted environments, and the dreaded "it works on my machine" problem.

Docker solves this by giving each project its own isolated environment.

## A Practical `docker-compose.yml`

```yaml
services:
  app:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - .:/var/www/html
    depends_on:
      - database
      - redis

  database:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_PASSWORD: secret
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  pgdata:
```

## Tips for M1/M2 Mac Users

Running Docker on Apple Silicon requires ARM-compatible images:

```bash
# Most official images now support ARM64
# If not, use --platform flag
FROM --platform=linux/amd64 node:20-alpine
```

## Workflow That Works

1. `docker compose up -d` to start everything
2. `docker compose exec app bash` to enter the container
3. `docker compose down` when you're done

No more version managers, no more "it works on my machine." Just a clean, reproducible environment per project.
