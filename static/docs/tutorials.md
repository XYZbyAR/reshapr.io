# reShapr — Tutorials

https://reshapr.io/docs/tutorials/getting-started

---

## Try reShapr Online

https://reshapr.io/docs/tutorials/try-reshapr-online

The fastest way to experience reShapr — no installation required. Head to https://try.reshapr.io to get started instantly.

### Login workflow

1. **Choose an authentication provider** — Select GitHub or Google to authenticate.
2. **Sign in with your provider** — Enter your credentials (e.g. GitHub login).
3. **Two-factor authentication** — If enabled, complete the verification step.
4. **Access the online dashboard** — Once authenticated, you land on the reShapr Try dashboard.
5. **Authenticate with the CLI** — Press Ctrl+C in the browser and log in using the reShapr CLI:
   ```bash
   reshapr login -s https://try.reshapr.io
   ```
   When the browser opens, authorize the CLI — the token is valid for 2 hours.
6. **You're all set!** — Login successful. Follow the Getting Started tutorial to continue.

---

## Getting Started with CLI

https://reshapr.io/docs/tutorials/getting-started

### Installation

```bash
npm install -g @reshapr/reshapr-cli
reshapr --version   # → 0.0.5
```

### Login

```bash
reshapr login -s https://try.reshapr.io
```

### Core workflow

**Step 1 — Import an artifact** (discovers the Service automatically):

```bash
reshapr import -u https://raw.githubusercontent.com/open-meteo/open-meteo/refs/heads/main/openapi.yml
# → Discovered Service Open-Meteo APIs with ID: 0PXEW1ZDWFCZS
```

**Step 2 — Create a Configuration Plan** (define backend endpoint + security):

```bash
reshapr config create 'open-meteo-manual' \
  --serviceId 0PXEW1ZDWFCZS \
  --backendEndpoint https://api.open-meteo.com
# → Configuration plan created with ID: 0PXPDMB4MFE6H
```

**Step 3 — Expose** (deploy to a Gateway Group):

```bash
reshapr expo create --configuration 0PXPDMB4MFE6H --gateway-group 1
# → Endpoint: mcp.try.reshapr.io/mcp/<org>/Open-Meteo+APIs/1.0
```

### All-in-one magic command

```bash
reshapr import -u https://raw.githubusercontent.com/open-meteo/open-meteo/refs/heads/main/openapi.yml \
  --backendEndpoint https://api.open-meteo.com
# → Endpoint: mcp.try.reshapr.io/mcp/<org>/Open-Meteo+APIs/1.0
```

---

## Docker Compose

https://reshapr.io/docs/tutorials/docker-compose

Run reShapr locally using Docker Compose for development and testing.

### Prerequisites

- Docker (with Docker Compose v2)
- Node.js v18+ and the reShapr CLI (`npm install -g @reshapr/reshapr-cli`)

### Quick start with the CLI

```bash
reshapr run                    # pulls latest release, starts containers in background
reshapr status                 # check running containers
reshapr stop                   # shut everything down
```

`reshapr run` downloads `install/docker-compose-all-in-one.yml` from GitHub, configures image tags, saves the file to `~/.reshapr/`, and runs `docker compose up -d`.

Options: `--release <version>` (default: `latest`; also accepts `nightly` or a specific tag like `0.0.5`).

### Create an admin user

```bash
SERVER_URL=http://localhost:5555
SERVER_TOKEN=CzBuQ9B0i8qrUQe6WLiDLqR3gv4iCbxvjTJQP0z0CFGQbjgBHPZSusa9d1gZKwwjdoCsJ8ogRwRzc06GipJSjSDkFOy0BSOKvAa2EjU3As9I5UjgizTzxsJAVJIXtdo2xiXHhcry9KeJa0zRhDtGmm8WMujoXrlfj0ChlJKaHZiZsRthd4UHrWkKur9KySXpPFP21H4C0Cq6OgM1rJpvMZ7Jd2ZzeEcd5lKE4PlchHZBVEdu8jYzjQtU50fkOPoR

curl -XPOST $SERVER_URL/api/admin/users \
  -H "Content-Type: application/json" -H "x-reshapr-api-key: $SERVER_TOKEN" \
  -d '{"username":"admin","email":"reshapr@example.com","password":"password","firstname":"Reshapr","lastname":"Admin"}'

curl -XPUT $SERVER_URL/api/admin/users/admin/organization/reshapr/owner \
  -H "x-reshapr-api-key: $SERVER_TOKEN"
```

### Create a regular user and organization

```bash
curl -XPOST $SERVER_URL/api/admin/users \
  -H "Content-Type: application/json" -H "x-reshapr-api-key: $SERVER_TOKEN" \
  -d '{"username":"jdoe","email":"jdoe@example.com","password":"my-super-long-password","firstName":"John","lastName":"Doe"}'

curl -XPOST $SERVER_URL/api/admin/users/jdoe/organization \
  -H "Content-Type: application/json" -H "x-reshapr-api-key: $SERVER_TOKEN" \
  -d '{"name":"jdoe","description":"Organization for user jdoe"}'

curl -XPOST $SERVER_URL/api/admin/quotas/organization/jdoe \
  -H "Content-Type: application/json" -H "x-reshapr-api-key: $SERVER_TOKEN" \
  -d '[{"metric":"gateway-group.count","enabled":true,"limit":3},{"metric":"gateway.count","enabled":true,"limit":3},{"metric":"exposition.count","enabled":true,"limit":10}]'
```

### Login and use

```bash
reshapr login --server http://localhost:5555
```

Control plane: `http://localhost:5555` — MCP gateway: `http://localhost:7777`.

### Manual setup (without the CLI)

```bash
git clone https://github.com/reshaprio/reshapr.git
cd reshapr/install
docker compose -f docker-compose-all-in-one.yml up
```

Helper scripts included: `create-admin.sh`, `create-user+org.sh`.

---

## Helm Charts

https://reshapr.io/docs/tutorials/kubernetes

Deploy reShapr on Kubernetes using Helm charts. Two OCI-based charts are available on Registry (registry.reshapr.io):

- `reshapr-control-plane` — Control plane API server + database
- `reshapr-proxy` — MCP gateway (data plane)

### Install the control plane (development)

```bash
helm repo add bitnami https://charts.bitnami.com/bitnami && helm repo update

helm install reshapr-control-plane \
  oci://quay.io/reshapr/reshapr-helm-charts/reshapr-control-plane --version 0.0.2 \
  --create-namespace --namespace reshapr-system \
  --set postgresql.enabled=true \
  --set postgresql.auth.password=admin \
  --set apiKey.value=dev-api-key-change-me-in-production \
  --set encryptionKey.value=dev-encryption-key-change-me-in-production \
  --set admin.nameValue=admin \
  --set admin.passwordValue=password \
  --set admin.emailValue=reshapr@example.com \
  --set admin.defaultGatewayTokensValue=my-super-secret-token-xyz
```

### Install the proxy (development)

```bash
helm install reshapr-proxy \
  oci://quay.io/reshapr/reshapr-helm-charts/reshapr-proxy --version 0.0.2 \
  --create-namespace --namespace reshapr-proxies \
  --set gateway.idPrefix=acme \
  --set gateway.labels='env=dev;team=reshapr' \
  --set gateway.fqdns=mcp.acme.loc \
  --set gateway.controlPlane.host=reshapr-control-plane-ctrl.reshapr-system \
  --set gateway.controlPlane.port=5555 \
  --set gateway.controlPlane.token=my-super-secret-token-xyz
```

### Key parameters

Control plane: `ctrl.replicaCount`, `postgresql.enabled`, `externalDatabase.host`, `admin.*`, `apiKey.value`, `ingress.enabled`.

Proxy: `replicaCount`, `gateway.idPrefix`, `gateway.fqdns`, `gateway.labels`, `gateway.controlPlane.*`, `autoscaling.enabled`, `ingress.enabled`.

### Production notes

- Use external PostgreSQL with `postgresql.enabled=false` and `externalDatabase.*`
- Store tokens in Kubernetes secrets (`gateway.controlPlane.existingSecret`, `apiKey.existingSecret`)
- Enable ingress with TLS for both charts
- Enable HPA for the proxy with `autoscaling.enabled=true`

Full parameter reference: https://github.com/reshaprio/reshapr-helm-charts

---

*For the full site index see https://reshapr.io/llms.txt*
