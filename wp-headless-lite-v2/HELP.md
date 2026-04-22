
# WP Headless Lite v2 — Cheat Sheet
It doesn't get easier than this, folks!

## Start
npm install
npm run dev

## Connect WordPress
Edit src/core/config.js

## Pages
- src/pages/index.js
- src/pages/post/[slug].js

## Add new page
Create file in src/pages and register route in main.js

## Build static site
npm run build

## Deploy
Upload /dist to any host

## Mental Model
- WP = API
- Pages = templates
- Build = static output
- Router = SPA layer