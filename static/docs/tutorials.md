# reShapr — Tutorials

https://reshapr.io/docs/tutorials/getting-started

---

## Try reShapr Online

https://reshapr.io/docs/tutorials/try-reshapr-online

The fastest path to reShapr — no installation required. Head to https://try.reshapr.io to get started instantly. (Full guided tutorial coming soon.)

---

## Getting Started with CLI

https://reshapr.io/docs/tutorials/getting-started

### Installation

```bash
npm install -g reshapr-cli
reshapr --version   # → 0.0.8
```

### Login

```bash
reshapr login -s https://app.beta.reshapr.io
```

### Core workflow

**Step 1 — Import an artifact** (discovers the Service automatically):

```bash
reshapr import -u https://raw.githubusercontent.com/open-meteo/open-meteo/refs/heads/main/openapi.yml
# → Discovered Service Open-Meteo APIs with ID: 0MX0VH15B5GNS
```

**Step 2 — Create a Configuration Plan** (define backend endpoint + security):

```bash
reshapr config create 'open-meteo-manual' \
  --serviceId 0MX0VH15B5GNS \
  --backendEndpoint https://api.open-meteo.com
# → Configuration plan created with ID: 0MX0VQEH35GPV
```

**Step 3 — Expose** (deploy to a Gateway Group):

```bash
reshapr expo create --configuration 0MX0VQEH35GPV --gateway-group 1
# → Endpoint: mcp.beta.reshapr.io/mcp/<org>/Open-Meteo+APIs/1.0
```

### All-in-one magic command

```bash
reshapr import -u https://raw.githubusercontent.com/open-meteo/open-meteo/refs/heads/main/openapi.yml \
  --backendEndpoint https://api.open-meteo.com
# → Endpoint: mcp.beta.reshapr.io/mcp/<org>/Open-Meteo+APIs/1.0
```

---

*For the full site index see https://reshapr.io/llms.txt*
