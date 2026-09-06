# MFI Technologies Website

Next.js website for MFI Technologies.

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Contact Form

The contact form submits to Formspree through this environment variable:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Add it to `.env.local` for local development and to the Vercel project environment variables for production.

## Checks

```bash
npm run lint
npm run build
```
