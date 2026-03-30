# Helm Charts

Learn how to deploy reShapr on Kubernetes using Helm charts for production-grade environments.

## Prerequisites

- Kubernetes 1.25+
- Helm 3.8+
- A PostgreSQL database (or use the embedded one for development)

## Overview

reShapr provides two Helm charts, distributed as **OCI artifacts**:

| Chart | Purpose | OCI artifacts |
|-------|---------|---------------|
| `reshapr-control-plane` | Control plane API server + database | `https://quay.io/repository/reshapr/reshapr-helm-charts/reshapr-control-plane` |
| `reshapr-proxy` | MCP gateway (data plane) | `https://quay.io/repository/reshapr/reshapr-helm-charts/reshapr-proxy` |

## All instructions are on GitHub

:::note
Please read 👉 [https://github.com/reshaprio/reshapr-helm-charts](https://github.com/reshaprio/reshapr-helm-charts)
:::

## Next steps

- **[Getting Started with CLI](../tutorials/getting-started.md)** — import services and expose MCP endpoints
- **[Run using Docker Compose](./docker-compose.md)** — run reShapr locally for development
- **[How it works](../overview/how-it-works.md)** — understand the reShapr architecture
- **[Security Model](../explanations/security-model.md)** — learn about reShapr security
