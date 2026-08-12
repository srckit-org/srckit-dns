# srckit-dns

<p align="center">
  <strong>Look up DNS records for any domain using Google's DNS API.</strong>
</p>

<p align="center">
  <a href="https://dns.srckit.org">Live Demo</a> ·
  <a href="https://github.com/srckit-org/srckit">SrKit Suite</a> ·
  <a href="https://github.com/srckit-org/srckit-dns/issues">Report Bug</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/MUI-9-007FFF?style=flat-square&logo=mui&logoColor=white" alt="MUI 9" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind 4" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/github/license/srckit-org/srckit-dns?style=flat-square" alt="License" />
</p>

---

## Overview

srckit-dns lets you query DNS records for any domain. Using Google's DNS-over-HTTPS API, it provides fast, reliable DNS lookups without requiring any DNS tools to be installed.

## Features

### DNS Lookup
- **Record types** — A, AAAA, CNAME, MX, NS, TXT, SOA, CAA
- **TTL display** — see time-to-live for each record
- **Instant results** — fast lookups via Google DNS

### All Records
- **Complete overview** — query all record types at once
- **Organized display** — records grouped by type
- **Quick comparison** — see the full DNS picture

## Getting Started

```bash
git clone https://github.com/srckit-org/srckit-dns.git
cd srckit-dns
npm install
npm run dev
```

## Record Types

| Type | Purpose |
|------|---------|
| A | IPv4 address |
| AAAA | IPv6 address |
| CNAME | Canonical name (alias) |
| MX | Mail exchange server |
| NS | Name server |
| TXT | Text records (SPF, DKIM, etc.) |
| SOA | Start of authority |
| CAA | Certificate authority authorization |

## License

MIT © [srckit-org](https://github.com/srckit-org)
