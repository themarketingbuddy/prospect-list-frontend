# Prospect List Frontend

This is the mobile-friendly frontend for the AI-powered prospecting tool. It allows sales reps to upload images of business cards or handwritten notes, and view structured contact data extracted via OCR and AI.

## Features

- Upload or take photo of business card
- Real-time AI extraction (Name, Email, Phone, etc.)
- Mobile-first responsive UI
- Connected to backend OCR API
- Export to CRM-ready CSV (coming soon)
- Optional: Email download link

## Tech Stack

- Frontend: **Next.js + React**
- Backend API: **FastAPI (OCR + GPT)** hosted on Railway
- Hosting: **Vercel**
- Language: JavaScript, HTML, CSS

## Environment Variables

| Key                    | Value (example)                                                                 |
|------------------------|----------------------------------------------------------------------------------|
| `NEXT_PUBLIC_API_URL`  | `https://prospect-list-production.up.railway.app/upload/`                       |

## Run Locally

```bash
npm install
npm run dev
