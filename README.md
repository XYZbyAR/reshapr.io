# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Clone this repo

```bash
git clone https://github.com/reshaprio/reshapr.io.git
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

You build... as usual using npm.

## Cache cleanup

To remove all previous run, build

```bash
rm -rf build .docusaurus
npm run start
```