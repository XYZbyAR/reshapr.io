# reShapr — Overview

https://reshapr.io/docs/overview/why-reshapr

---

## Why reShapr?

https://reshapr.io/docs/overview/why-reshapr

Building an MCP server from scratch is a trap. Most teams quickly discover it requires more than an OpenAPI spec: you need translation layers, prompt guards, retries, rate limiting, grounding logic, security (how do you avoid leaking credentials into LLM prompts?), and rigorous access control. The result is a brittle, parallel copy of your API logic that multiplies maintenance overhead and drifts from the source of truth.

reShapr's answer: extend your existing API infrastructure, not reinvent it. Import your existing artifact — OpenAPI 3.x spec, GraphQL schema, or gRPC Protobuf definition — and reShapr instantly translates it into a secure, production-ready MCP server. Zero code. No rewrites. No vendor lock-in.

---

## How It Works

https://reshapr.io/docs/overview/how-it-works

reShapr is a zero-code AI translation layer. It supports ingesting:

- OpenAPI 3.x specifications
- GraphQL schemas
- gRPC / Protocol Buffer definitions

Once reShapr discovers your services you configure:

1. Security mechanisms (API key, OAuth2 Bearer, None)
2. Exposition options (all operations, read-only, custom inclusion/exclusion list)
3. Backend endpoint targets

reShapr then exposes your MCP server through gateways in a multi-tenant, secure way.

### Architecture

reShapr has two major parts:

- **Control plane**: centralises exposition configuration and policies
- **Data plane**: gateways that expose MCP servers and route runtime traffic

### Deployment models

1. **Cloud SaaS** — reShapr hosts both control plane and data plane
2. **Hybrid** — you host gateways in your own trust domain; reShapr manages control
3. **On-premises** (roadmap) — both control and data plane in your environment

---

*For the full site index see https://reshapr.io/llms.txt*
