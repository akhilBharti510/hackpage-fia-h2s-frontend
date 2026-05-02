# FIA Space Website

A production-style React landing page for the Hack2skill / FIA hackathon assignment. The site is built from the supplied Figma reference and exported visual assets, with a dark futuristic visual system, interactive sections, responsive layouts, and accessible call-to-action flows.

## Preview

The page recreates the provided FIA design with:

- Futuristic hero section with Hack2skill branding
- Participant eligibility and hackathon overview sections
- Animated astronaut benefits section with orbit rings
- Interactive registration countdown
- Drag/click schedule timeline
- Challenge list, rewards, FAQ, and CTA sections
- App-styled popup modal for Sign In, Register Now, and Apply Now actions

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 3
- Vanilla React hooks for interactivity
- CSS animations and transitions
- Semantic HTML5

No UI libraries are used.

## Project Structure

```text
src/
+-- assets/
|   +-- icons/
|   +-- images/
+-- components/
|   +-- common/
|   +-- layout/
|   +-- sections/
+-- constants/
+-- hooks/
+-- pages/
+-- styles/
+-- App.jsx
+-- main.jsx
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev
```

Runs the Vite dev server on `127.0.0.1`.

```bash
npm run build
```

Creates an optimized production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for review.

## Key Features

### Responsive Landing Page

The layout is mobile-first and adapts across mobile, tablet, and desktop breakpoints using Tailwind CSS.

### Animated Astronaut Section

The benefits section uses the provided `Astronaut.png` asset with layered concentric orbit rings, subtle glow effects, and reduced-motion support.

### Live Registration Countdown

The countdown in the hackathon overview section is powered by `useCountdown`.

Update the registration deadline in:

```js
src/constants/siteContent.js
```

```js
export const registrationDeadline = '2026-07-04T23:59:59+05:30'
```

### Interactive Timeline

The schedule timeline supports:

- Click selection
- Horizontal drag scrolling
- Touch scrolling
- Keyboard focus states

### CTA Popup Modal

The Sign In, Register Now, and Apply Now buttons open a themed modal with:

- Context-specific title and copy
- Form fields
- Submit success state
- Escape key close
- Backdrop click close
- Accessible dialog semantics

## Assets

Project images live in:

```text
src/assets/images/
```

Important assets include:

- `h2s-gradient.png`
- `hero-model.png`
- `astronaut.png`
- `footer-abstract.png`
- `brain.jpg`
- Collage and challenge imagery

Images are imported through:

```text
src/constants/assets.js
```

## Customization

Most editable content is stored in:

```text
src/constants/siteContent.js
```

Use this file to update:

- Navigation links
- Registration deadline
- Participant cards
- Benefits
- Process steps
- Challenge statements
- Schedule items
- Rewards
- FAQ content

## Accessibility

The app includes:

- Semantic sections and landmarks
- Keyboard-focusable navigation and CTAs
- Accessible modal dialog behavior
- `aria-live` countdown updates
- Descriptive image alt text where images are meaningful
- Decorative images marked with empty `alt`
- Reduced-motion CSS support

## Performance Notes

- Assets are imported through Vite for optimized bundling.
- Non-critical images use lazy loading.
- Animation is handled with CSS transforms and opacity for smooth rendering.
- Reveal animations use `IntersectionObserver`.
- Interactive timeline logic is isolated in a reusable hook.

## Design Source

The implementation is based on the provided FIA Figma reference, assignment PDF requirements, and exported local image assets. If the Figma file is shared with tool access later, spacing and layer details can be further tuned against the original node metadata.

## Build Verification

The production build has been verified with:

```bash
node .\node_modules\vite\bin\vite.js build
```

## License

This project was created for a frontend interview assignment. Add a license before using it as a public production template.
