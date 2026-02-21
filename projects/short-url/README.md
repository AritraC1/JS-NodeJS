# URL Shortener

A simple URL-shortener built with Express, EJS and MongoDB. This project demonstrates a minimal end-to-end flow:

- generate a short id for a long URL,
- redirect from the short id to the original URL,
- record simple visit analytics (timestamped visits),
- a minimal SSR UI located at `/`.

## Tech stack

- Node.js + Express
- EJS for server-side rendering (views in `views/`)
- MongoDB + Mongoose (models in `models/`)
- `nanoid` for short id generation

## What’s included

- `index.js` — app entry, static serving and route mounting
- `routes/url.js` — API routes: create URL, redirect, analytics
- `controllers/url.js` — handler logic (create, redirect, analytics)
- `models/url-model.js` — Mongoose schema for `url` documents
- `views/index.ejs` — UI used as the demo frontend
- `public/` — static assets (CSS).

## Environment

Create a `.env` file in `projects/short-url/` with at least:

```
PORT=3000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.example.mongodb.net/dbname
```

Note: `index.js` loads `dotenv` (via `dotenv.config()` in the root of this repo). Ensure the values are correct before starting.

## Run locally

From the project root (`projects/short-url/`):

```bash
npm install
node index.js
```

Open http://localhost:3000/ to view the demo UI.

## API endpoints

- `POST /api/url` — create a new short URL
  - Request JSON: `{ "url": "https://example.com/long/path" }`
  - Response JSON: `{ "id": "<shortId>" }`

- `GET /api/:shortId` — redirect to the stored `redirectUrl` and record a visit timestamp

- `GET /api/analytics/:shortId` — return analytics JSON:
  - `{ totalClicks: number, analytics: [{ timestamp: number }, ...] }`

These routes are defined in `routes/url.js` and implemented in `controllers/url.js`.

## Usage notes

- The demo UI (`views/index.ejs`) calls `POST /api/url` to create a short id, displays the generated short link, and offers an analytics modal that fetches `/api/analytics/:shortId`.
- Visit history entries are simple objects with a `timestamp` (number). The analytics view sorts and displays these timestamps.

## Demo
![Home Page](../../assets/homepage.png)
![Shortend URL](../../assets/shortend.png)
![Analytics per shortend url](../../assets/analytics.png)

---

