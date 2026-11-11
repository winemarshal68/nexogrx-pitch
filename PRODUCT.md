# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS on Cloudflare Pages (decided by Claude with Marshal's go-ahead, 2026-11-11: "do whatever you want"). No framework, no build step beyond the template's sitemap.

## Users

- **Gildas de Kerhor**, TablaVista's «Responsable de altas» and the whole sales team today. He reads English best and carries an Android phone and an iPad. He has to understand what the product does, believe it is unique, and be excited enough to sell it.
- **Restaurant owners in Granada and Spain.** Gildas shows them the same page in Spanish, on his phone or iPad, across the table.

## Product Purpose

TablaVista (built by NexoGRX, live at admin.nexogrx.es) is one system that runs a restaurant's whole day: bookings, the floor, the till, kitchen and bar screens, the menu and wine list, stock and ordering, the staff rota, food safety records, and staff training. Success for this site means Gildas can explain it in one minute and an owner asks for a demo.

## Positioning

- Checked row by row on 15 Oct 2026 against 26 other systems sold in Spain (Ágora, Camarero10, CoverManager, TheFork, Lightspeed, Toast, Square and others; source: posicion.nexogrx.es, `nexogrx-position/js/data.js`). **32 capabilities are offered by TablaVista and none of the 26.** Examples: every name said correctly in its own language, voice help that answers staff and opens the screen, stock count by voice, a delivery note photographed and checked against the order, a time clock the owner can't alter, a change history nobody can erase, a till you can take to another provider.
- **Voice is the mechanism nobody else has.** Staff speak and the system acts: bookings created, amended and confirmed, "sold out", "running late", "call for help", "I'm opening a bottle of…", handover notes, who has read a message. A phone agent answers calls, takes bookings and passes a caller to the restaurant's own phone (proven on a live call, Nov 2026).
- **Saber**: a knowledge centre where every dish, cut, cheese, wine and drink has a study card, and every name is spoken by a native voice in its own language, male and female.
- **A drinks catalogue built from what serious restaurants actually pour.** About 16,000 wines, beers and spirits added 4 to 11 Nov 2026, sourced from the wine lists of 200+ high-end restaurants and checked against each maker's own site. About 74% of the wineries on top Spanish restaurant lists are covered (11 Nov 2026).
- **A screen for each job**: waiter, cook, bartender, supervisor and owner each open the app on their own day.

## Operating Context

Spanish restaurants; Granada first. Service is loud and fast; hands are full; staff change often and many are not native Spanish speakers. Owners do the paperwork late at night. Gildas sells face to face.

## Capabilities and Constraints

- **Do not publish prices** until Marshal says so (decided 2026-11-04; working figure is internal).
- **Never claim**: VeriFactu readiness of any kind; an aggregate count of venues using it; review or reputation management; a WhatsApp integration (it is a link); "lifetime updates"; a menu in five languages (it is four). Source: `nexogrx-position/CLAUDE.md` guard rule 3.
- **No paying restaurants yet.** No testimonials, customer logos or usage figures may be invented. Demo restaurants (La Higuera, Grupo Fontana) are made up and must be labelled as demos.
- Public name switch to TablaVista: from 25 Nov 2026. This site is unlisted (noindex) until then.

## Brand Commitments

- Name spelled **TablaVista** (one word, capital T and V).
- Card identity: white textured paper; ink `#292823`; red `#F04B32`; the TT mark (a black bar with one red stem and one black stem); the TablaVista wordmark; "GESTIÓN PARA RESTAURANTES". Source: `tablavista-cards/front.svg`.
- Voice: "we", plain, no personal name or city on public pages (site-tablavista commits).

## Evidence on Hand

- Real product films and posters at `https://media.tablavista.com/` (list in `site-tablavista/public/videos.json`): the 1-minute story, a price change reaching QR, till and web in 20 seconds, booking and seating, adding a wine, counting stock.
- Real La Higuera screenshots in `site-tablavista/public/img/`.
- The competitor matrix in `nexogrx-position/js/data.js` (public module), verified 2026-10-15.
- Demo request endpoint: `https://admin.nexogrx.es/api/demo/solicitar` (CORS-allowlisted for tablavista.com only), or the form on https://tablavista.com.
- Absent: testimonials, customer counts, press, benchmarks. Do not fabricate.

## Product Principles

1. Show the product working; never describe what could be shown.
2. Every claim is checkable; a rival's "?" counts neither way.
3. Built for the person with full hands: voice and one tap beat menus.
4. The owner's data is the owner's: exportable, erasable, portable.
5. Staff learn on the job, in their own language.
