# Al Mannat Hospital — React + Vite + Tailwind

Responsive single-page hospital website built with React 18, Vite, Tailwind CSS 3 and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy to Vercel

1. Extract this ZIP and open the project folder in VS Code.
2. Run `npm install` and `npm run build` to verify locally.
3. Push the folder to a Git repository and import it into Vercel, or run `npx vercel`.
4. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
5. No environment variables are required for this frontend demo.

## Admin portal — important security note

The included admin screen is a **frontend demonstration**, with demo credentials:

- Username: `admin`
- Password: `Mannat@2026`

Negative feedback is stored in the current browser's `localStorage`. It is not shared across devices, and client-side credentials can be inspected by anyone who downloads the website code. **Do not use this implementation to collect or manage real patient personal/medical data.**

Before production use, replace demo authentication and local storage with a server-side authenticated API (for example, Firebase Authentication + Firestore Security Rules or a secure backend). Enforce admin authorization on the server, validate inputs, apply rate limiting, restrict access to authorized staff, and define a privacy/retention policy. Do not store passwords or sensitive patient details in browser code.

## Supplied images

The three supplied hospital banner images have been cropped to portrait frames and placed in `public/images/` in this order:
1. Mohammad Nasir — Founder & Chairman
2. Dr. Imran Khan — General Physician & Director
3. Dr. Furkan Khan — General Physician & Director

If the hospital supplies original portrait photographs, replace the corresponding JPG files while keeping the same filenames.

## Content verification

Doctor timings, qualifications and facility details are displayed as supplied in the project brief. Hospital management should verify all medical credentials, schedules, service availability, phone numbers and map links before publishing.


## Updated visual assets
- Added the supplied Al Mannat Hospital logo in the header and professional footer.
- Added local specialty illustrations for gynaecology, gastroenterology/liver, dermatology/skin & hair, physiotherapy/spine and general medicine. These are illustrative graphics, not patient or doctor photographs.
- Added local image assets only; no external image host is required.
