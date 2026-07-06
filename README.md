# SCRIBE Demo Public

Public demo repository for SCRIBE read-only GitHub repo scan.

This repository is intentionally small, public, and free of secrets. It exists only to let SCRIBE test a structural repository scan without tokens, credentials, private code, model calls, Docker, or Git write from the product.

## Purpose

SCRIBE should be able to detect a simple project structure:

- a manifest file (`package.json`)
- TypeScript source files in `src/`
- tests in `tests/`
- a GitHub Actions workflow in `.github/workflows/`
- configuration files such as `tsconfig.json`

## Safety

No production code. No real credentials. No `.env` file. No secrets.

not commercial-ready.
