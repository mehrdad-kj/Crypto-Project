# Cryptobase - Crypto Tracker

A modern cryptocurrency tracking application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Real-time cryptocurrency price tracking
- Search and filter cryptocurrencies
- Trending coins display
- User authentication with Firebase
- Save coins to watchlist
- Dark/Light theme toggle
- Responsive design

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth
- **Database:** Firebase Firestore
- **Data Source:** CoinGecko API

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── account/           # Account page
│   ├── signin/            # Sign in page
│   ├── signup/            # Sign up page
│   ├── coin/[coinId]/     # Dynamic coin detail page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
├── context/               # React context providers
├── lib/                   # Utility functions and configs
└── public/                # Static assets
```

## Configuration

### Firebase Setup

The Firebase configuration is in `lib/firebase.ts`. Make sure your Firebase project is set up with:
- Authentication (Email/Password)
- Firestore Database

### Environment Variables

Create a `.env.local` file if needed for additional configuration.

## Deployment

This project can be deployed on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any Node.js hosting platform

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)