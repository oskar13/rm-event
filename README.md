# RM Event

A landing page built on next.js with a "headless" CMS (Payload) used to manage the content. For database I will be using MongoDB.

From landing page this can be expanded in the future with other functionality as needed.


## Client Requirements: functional and non-functional

1. Site must support multiple languages.
2. Implement mostly used SEO optimizations.
3. Render under 2s on modern browsers/devices.
4. Include a CMS for the landing page and future news/blog. Providing multi role access for site admin, editors, translators and marketing people.
5. Expandable with integrated calendar for bookings if needed in the future.
6. Initial download must be under 1MB, rest can be lazy loaded.
7. Run on a VPS with 1 vcore and 2GB of RAM

For these quite strict peformance requirements I decided not to use WordPress and go with a flexible and expandable combo of Next.js and Payload CMS to create a lightweight and customizable site. With Payload I can easily satisfy changing requirements when it comes to adding post content, types, etc.  

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CD/CI - Github Actions and runner

Currently I set this project up to be automatically deployed via Github Actions on a VPS by self-hosted runner.
The node process will be monitored by PM2 [https://pm2.keymetrics.io/](https://pm2.keymetrics.io/)