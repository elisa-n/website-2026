# CLAUDE.md - Frontend Website Rules

## Always Do First

- **Invoke the 'frontend-design' skill** before writing any frontend code, every session, no exceptions.

## Reference Images

- If a reference image is provided: match layout, spacing, typography and color exactly
- If no reference image: design from scratch with high craft

## Local Server

- **Always serve on localhost** - never screenshot a 'file:///' URL.
- Start the dev server: 'node serve.mjs'
- 'serve.mjs' lives in the project root. Start it in the background before taking any further actions.
- If the server is already running, don't start a second instance

## Output Defaults

- Mobile-first responsive

## Hard Rules

- Do not add sections, features or content not in the reference
- Do not 'improve' a reference design unless asked -match it
- Do not use 'transition-all'
- Do not use default Tailwind blue/indigo as a primary color
