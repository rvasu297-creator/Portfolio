# R. Vasunthara — Portfolio

React + Vite portfolio. Each section uses one color from the reference palette,
with font colors adjusted per section for readability.

| Section   | Color            | Hex       | Text color |
|-----------|------------------|-----------|------------|
| Home      | Blue Sari        | `#666C75` | White      |
| About     | Inkjet           | `#455369` | White      |
| Education | Petrified        | `#8B8780` | Dark       |
| Skills    | Dusty Trail Rider| `#C3B9A4` | Dark       |
| Projects  | Urban Charm      | `#AFA18D` | Dark       |
| Contact   | Sensible Hue     | `#EBD6B3` | Dark       |

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/` — upload that folder to any static host.

## Structure

```
src/
  components/
    Navbar/   Home/   About/   Education/   Skills/   Projects/   Contact/   Footer/
  hooks/
    useReveal.js   — scroll-reveal animation hook used across sections
  index.css   — global tokens (fonts, spacing, and the section palette)
  App.jsx     — assembles all sections in order
```
