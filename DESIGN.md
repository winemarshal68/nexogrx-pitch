---
name: TablaVista pitch
description: The restaurant's own «Menú del día» pizarra; every dish on the board is served live.
colors:
  slate: "#292823"
  slate-deep: "#1f1e1a"
  slate-lift: "#33322c"
  chalk: "#f1eee6"
  chalk-dim: "#bdb8ab"
  chalk-faint: "#a09c90"
  red: "#f04b32"
  red-deep: "#c8341c"
  red-press: "#b52d17"
  red-chalk: "#ff6a52"
  paper: "#fbfaf6"
  paper-ink: "#292823"
  paper-dim: "#5d5a51"
  rule: "#d9d4c7"
typography:
  display:
    fontFamily: "Kalam, Segoe Print, Bradley Hand, cursive"
    fontSize: "clamp(2.9rem, 6.6vw, 5.2rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  numeral:
    fontFamily: "Kalam, Segoe Print, Bradley Hand, cursive"
    fontSize: "clamp(4.4rem, 13vw, 9rem)"
    fontWeight: 700
    lineHeight: 0.9
    fontFeature: "tnum"
  headline:
    fontFamily: "Kalam, Segoe Print, Bradley Hand, cursive"
    fontSize: "clamp(2.1rem, 5.4vw, 3.9rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Kalam, Segoe Print, Bradley Hand, cursive"
    fontSize: "clamp(1.15rem, 2.1vw, 1.45rem)"
    fontWeight: 700
    lineHeight: 1.25
  lede:
    fontFamily: "Figtree, Optima, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Figtree, Optima, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree, Optima, Segoe UI, system-ui, sans-serif"
    fontSize: "0.74rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.14em"
  ticket:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1.5
  ticket-quote:
    fontFamily: "Figtree, Optima, Segoe UI, system-ui, sans-serif"
    fontSize: "1.18rem"
    fontWeight: 600
    lineHeight: 1.35
rounded:
  ticket: "4px"
  tag: "6px"
  chip: "10px"
  button: "12px"
  panel: "14px"
  specimen: "22px"
  pill: "999px"
spacing:
  gutter: "20px"
  container: "1180px"
  section: "clamp(72px, 10vw, 132px)"
  block: "clamp(36px, 5vw, 56px)"
  column: "clamp(24px, 4vw, 64px)"
components:
  button-primary:
    backgroundColor: "{colors.red-deep}"
    textColor: "#ffffff"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.red-press}"
  button-chalk:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.button}"
    padding: "15px 22px"
  lang-toggle-active:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.slate}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  comanda-ticket:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.ticket}"
    rounded: "{rounded.ticket}"
    padding: "22px 22px 30px"
  tag:
    backgroundColor: "{colors.red-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.tag}"
    padding: "4px 7px"
  tag-ok:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.slate}"
    rounded: "{rounded.tag}"
    padding: "4px 7px"
  fact-pill:
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    padding: "7px 13px"
  field:
    textColor: "{colors.chalk}"
    rounded: "{rounded.panel}"
    padding: "4px 6px 4px 14px"
  icon-button:
    rounded: "{rounded.chip}"
    size: "38px"
---

# Design System: TablaVista pitch

## Overview

**Creative North Star: "The Menú del Día Pizarra"**

The whole page is one continuous slate board, the kind a Spanish restaurant chalks its menú del día on. Offers are written in hand lettering like today's dishes, dotted leaders run from each dish to what it does, and the system answers on printed paper pinned to the board: comanda tickets, a carta de vinos, a staff phone screen. The board is the voice of the restaurant; the paper is the voice of the machine.

Density is that of a working board: generous vertical rhythm between sections, tight lists inside them. Chalk appears in two strengths (full chalk for what matters, dim chalk for what explains), and brand red is the chalk you use for HOY, for what is new, for what is sold out. The board is flat chalk on lightly smudged slate; paper is the only thing that lifts.

**Key Characteristics:**
- One dark slate surface from top to foot; sections are separated by faint chalk rules, never by colour bands.
- Kalam hand lettering for everything the restaurant would chalk; Figtree for explanation; monospace only on printed tickets.
- Paper objects (tickets, carta, phone screen) are tilted a degree or so, lifted by a deep soft shadow, and pinned.
- Dotted leaders link a name to its value or action, as on a real menu.
- Single-weight line icons, drawn in strokes like chalk.

## Colors

Warm ink-and-chalk neutrals with one brand red that splits into three strengths by surface.

### Primary
- **Brand Red** (`red`): the TT mark's red stem, ticket pins, active mic, playing state, the "hot" icon on the phone screen, selection highlight. Used as a fill, not for text on slate.
- **Red Chalk** (`red-chalk`): red as it reads on slate: HOY, menu actions ("verlo"), dotted-leader hover, active borders, the strike-through on AGOTADO, the focus ring, highlighted ledger lines.
- **Deep Red** (`red-deep`): red where white text or paper needs 4.5:1: the primary button, tags, the film play disc, ticket check marks and bot labels on paper.
- **Pressed Red** (`red-press`): primary button hover only.

### Neutral
- **Board Slate** (`slate`): the brand ink and the page; also the text colour on chalk-filled controls.
- **Deep Slate** (`slate-deep`): scrollbar track. **Lifted Slate** (`slate-lift`) is declared but unused.
- **Chalk** (`chalk`): headings, primary text, the wordmark, active toggles, the "add" icon button; also the fill of list rows on the phone screen.
- **Dim Chalk** (`chalk-dim`): ledes, captions, secondary labels (about 7:1 on slate).
- **Faint Chalk** (`chalk-faint`): course labels, fine print, footer, placeholders, the language toggle outline.
- **Card Stock** (`paper`): every paper object. Its text is **Paper Ink** (`paper-ink`, the same ink as the slate) and **Paper Grey** (`paper-dim`) for metadata.
- **Ticket Rule** (`rule`): dashed and solid rules on paper.

Chalk lines and panel borders on slate are chalk at low alpha, not separate tokens: rgba(241,238,230, .08 section rules, .14 to .22 borders and dotted leaders, .28 to .45 stronger outlines). Tinted fills use red at .08 to .14 alpha.

### Named Rules
**The Three Reds Rule.** Brand red fills; red chalk writes on slate; deep red carries white text or sits on paper. Never put `red` as text on slate or `red-chalk` on paper.

**The Red Means Today Rule.** Red marks what is happening now: HOY, the active voice line, the new or sold-out item, the one CTA. A screen where red decorates is wrong.

## Typography

**Display Font:** Kalam (with Segoe Print, Bradley Hand, cursive)
**Body Font:** Figtree (with Optima, Segoe UI, system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SF Mono, Menlo), tickets only

**Character:** Kalam at 700 is the chalk hand: headings, dish names, big numbers, ledger values. Figtree is the calm printed voice that explains. JetBrains Mono is the thermal printer.

### Hierarchy
- **Display** (Kalam 700, clamp(2.9rem, 6.6vw, 5.2rem), 0.98): the hero line only; 2.8rem under 560px. Section closers use clamp(3rem, 9vw, 6rem).
- **Numeral** (Kalam 700, up to clamp(4.4rem, 13vw, 9rem), 0.9, tabular): the single big figure of a section (the cellar count, the phone clock, the tally); ledger values run clamp(2rem, 4.6vw, 3.2rem).
- **Headline** (Kalam 700, clamp(2.1rem, 5.4vw, 3.9rem), 1.05, balanced wrap): every section heading.
- **Title** (Kalam 700, clamp(1.15rem, 2.1vw, 1.45rem)): dish names, voice phrases, specials, role tabs.
- **Body** (Figtree 400, 1.0625rem, 1.6): running text; ledes at clamp(1.05rem, 1.6vw, 1.22rem) in dim chalk, max 58ch, with key phrases bolded back to full chalk.
- **Label** (Figtree 600 to 700, 0.74 to 0.82rem, 0.14em, uppercase): course names on the menu, panel headings, the phone's role line, carta header. A label names the thing beside it; it never sits above a heading as a category.
- **Ticket** (JetBrains Mono 500, 0.9rem, 1.5): ticket bodies, ticket headers (0.75rem uppercase, 0.08em), language codes, film lengths, replay control. The spoken quote on a ticket is Figtree 600 1.18rem.

### Named Rules
**The Who Writes It Rule.** If the restaurant would chalk it, it is Kalam. If the system printed it, it is monospace. Everything else on paper or slate is Figtree.

**The Flat Chalk Rule.** Chalk lettering is flat colour. No displacement, roughening or texture filters on type or strokes.

## Layout

A single centred column, max 1180px, with a 20px gutter that respects safe-area insets. Sections stack vertically with clamp(72px, 10vw, 132px) block padding and a 2px chalk rule at .08 alpha between them; the closing section opens up to clamp(96px, 13vw, 170px). Inside a section, a heading block (max 880px, 18px gap) is followed by content at clamp(36px, 5vw, 56px).

Content is two asymmetric columns (ratios such as 1.25 : 0.9, 0.95 : 1.2, 0.8 : 1.2) with clamp(24px, 4vw, 64px) gaps: chalk on one side, the paper object or live demo on the other. Lists are dotted-leader rows (name, leader, value or action) or two-column ledgers; the "everything else" board uses CSS columns of 320px.

At 900px every split collapses to one column, the hero reorders (date, line, lede, menu, CTAs, ticket), and the voice phrases become a horizontal snap scroller. At 560px leaders disappear, grids go single-column, buttons fill the row, and role tabs become a 2-up grid.

## Elevation & Depth

The board is flat: depth on slate comes only from a faint smudge (three soft radial gradients plus a fine noise layer at .18 opacity) and from chalk-alpha borders and dark translucent fills. Paper is the only thing that is elevated, and it is elevated a lot: a long, soft, heavily offset shadow that reads as card stock pinned off the board, together with a small rotation.

### Shadow Vocabulary
- **Pinned paper** (`box-shadow: 0 30px 50px -28px rgba(0,0,0,.85), 0 2px 0 rgba(0,0,0,.08)`): comanda tickets and the carta.
- **Phone** (`box-shadow: 0 40px 60px -30px rgba(0,0,0,.9), inset 0 0 0 2px #3a3934`): the staff phone frame.
- **Primary button** (`box-shadow: 0 10px 22px -14px rgba(0,0,0,.9)`, hover `0 16px 28px -16px rgba(0,0,0,.95)`): the red CTA.
- **Film frame** (`box-shadow: 0 18px 30px -20px rgba(0,0,0,.9)`): film posters.
- **Pin** (`box-shadow: 0 3px 5px rgba(0,0,0,.45), inset -3px -3px 0 rgba(0,0,0,.18)`): the red pin head.

### Named Rules
**The Only Paper Lifts Rule.** Nothing chalked on the board casts a shadow. Panels on slate are bordered or tinted; shadows belong to paper, the phone, film posters and the one red CTA.

## Shapes

Soft rectangles throughout, scaled to the object: 4px for tickets (square top, a zig-zag torn edge cut in CSS at the bottom), 6px for tags and the carta, 10px for chips and icon buttons, 12px for buttons, 14px for panels, fields and film frames, 22px for the specimen board, full pills for toggles and fact chips, 38px/28px for the phone and its screen. Borders on slate are 1.5px to 2px chalk at low alpha; on paper they are 1.5px dashed `rule`. Leaders are 2px dotted. Paper sits at a slight tilt (between -1deg and 1.2deg).

## Components

### Buttons
Confident, chunky, few.
- **Shape:** gently rounded (12px).
- **Primary:** deep red fill, white Figtree 700 1rem, 15px 22px, soft drop shadow. One per viewport: «Pide una demo».
- **Hover / Focus:** lifts 2px and darkens to pressed red; press scales to .97. Focus everywhere is a 2px dashed red-chalk outline, 4px offset.
- **Chalk (secondary):** transparent with a 1.5px chalk outline at .45 alpha, full chalk on hover, same lift.
- **Icon button:** 38px square, 10px radius, chalk outline; the "add" variant is chalk-filled with slate icon; the playing variant is brand red.

### Chips
- **Toggle pills** (language, voice sets): pill track with a 1.5px faint-chalk outline; the pressed option fills with chalk and takes slate text.
- **Name chips:** 10px radius chalk outline; pressed takes a red-chalk border and a red tint.
- **Fact pills:** non-interactive, 1.5px chalk outline at .22, 7px 13px.
- **Tags:** Figtree 700 0.75rem uppercase on deep red (alert) or chalk (ok), 6px radius.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** dark translucent (rgba(0,0,0,.12 to .14)) or barely-light (rgba(255,255,255,.025 to .035)) over slate.
- **Shadow Strategy:** none (see Only Paper Lifts).
- **Border:** 1.5px chalk at .16; becomes red-chalk with a red tint when the panel is hit by a voice command.
- **Internal Padding:** 14px; the specimen board uses clamp(22px, 4vw, 48px).

### Inputs / Fields
- **Style:** 1.5px chalk outline at .3, 14px radius, dark fill, leading line icon, Figtree 500 1.05rem, red-chalk caret.
- **Focus:** border goes to full chalk.

### Navigation
The menu itself is the navigation: «Menú del día» lists four courses, each a dotted-leader row (course label, chalk dish name, leader, red-chalk action with a down arrow). Hover brightens the dish to white and turns the leader red. The top bar holds only the TT mark plus wordmark and the ES/EN pill toggle.

### Comanda Ticket
The signature. Card-stock paper, 4px top corners, zig-zag bottom edge, a red pin centred on top, tilted a degree. Header row in uppercase mono with a dashed rule; "said by" line with a red mic icon; the spoken quote in Figtree 600 with a blinking red caret; result lines appear one by one, each with a deep-red check. Every spoken command prints its effect here.

### Dotted-Leader Ledger
Chalk label, dotted leader, big Kalam value. Used for figures (Saber counts, the tally, cellar coverage). A `hot` line turns label and value red chalk.

### Motion
One easing for everything: `cubic-bezier(.16,1,.3,1)`. The hero writes itself once on load (clip-path reveal of HOY and the headline, menu lines sliding in, the ticket pinned down from a tilt). State changes are 0.2 to 0.4s. All looping and intro motion is removed under reduced motion.

## Do's and Don'ts

### Do:
- **Do** keep every section on the one slate board; separate sections with a 2px chalk rule at .08 alpha.
- **Do** set anything the restaurant would chalk in Kalam 700, and anything a printer would print in JetBrains Mono on paper.
- **Do** show the system's answer on a pinned paper object (ticket, carta, phone screen) with the pinned-paper shadow and a tilt under 1.5deg.
- **Do** link names to values or actions with 2px dotted leaders.
- **Do** draw icons as single-weight line drawings (24px grid, 2 to 2.6 stroke, round caps), coloured with currentColor.
- **Do** use red-deep under white text and red-chalk for red on slate.
- **Do** label demo data as demo data, in faint chalk.

### Don't:
- **Don't** apply roughening, displacement or texture filters to chalk lettering; chalk is flat colour.
- **Don't** cast shadows from anything chalked on the board.
- **Don't** set Figtree or monospace for headings on the board.
- **Don't** put a small uppercase label above a heading as a category; labels name the item beside them.
- **Don't** add a second filled CTA to a viewport; the chalk outline button is the secondary.
