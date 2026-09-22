# Dawood Technologies Website

Next.js website for Dawood Technologies.

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Contact Form

The contact form submits directly to the production Formspree endpoint configured in
`app/contact/ContactForm.tsx`. A successful message is shown only after Formspree
returns a successful response.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
