# JavaScript Fundamentals & Web Internals

A curated collection of notes, experiments, examples and small projects that explain how JavaScript, the runtime, the NodeJs, and the web work under the hood.

Focus areas:
- JavaScript core concepts and idioms
- Asynchronous patterns and the event loop
- Node.js runtime internals and simple servers
- Hands-on experiments that reveal real runtime behavior

---

## Repository overview

Top-level folders and what you'll find in them:
- `assets/` — supplemental images, diagrams and media used across docs and examples.
- `core-js/` — bite-sized JS examples and experiments (arrays, promises, this, prototypes, etc.).
- `docs/` — detailed conceptual notes: event-loop, async patterns, HTTP, Node internals and more.
- `node-basics/` — small Node.js examples and notes.
- `node-express-server/` — a small Express-based server skeleton (starter code).
- `node-http-server/` — minimal examples using Node's built-in `http` module.
- `playground/` — quick scripts to try interesting runtime behavior locally.
- `projects/` — small sample projects

Also check:
- `package.json` — project metadata / scripts.

---

## Quick start

Requirements:
- Node.js (LTS recommended)

Run a simple example or experiment:

1. From repo root, run a playground script:

```bash
node playground/event-loop-order.js
```

2. Run a small server (many examples include `index.js`):

```bash
node node-http-server/index.js
# or
node node-express-server/index.js
```

3. Open the docs for conceptual reading: see `docs/` for write-ups on event loop, async/await, HTTP details and more.

Note: individual projects may require `npm install` if they use dependencies (check the project folder).

---

## Where to read first
- `docs/event-loop/` — microtasks vs macrotasks, timers and Promise resolution order.
- `docs/async-js/` — Promises, `async/await` and error handling.
- `core-js/` — run small example files to observe language behavior.

---

## Projects & examples
- `short-url/` — small full-stack example (routes, views, MongoDB connection helper).
- `projects/project-01/`, `projects/project-02/` — sample app code and data to explore.

Each project contains a `README` or `task.txt` describing how to run it.

---

## Contributing
- Add small, focused examples or notes that clarify runtime behavior.
- Keep experiments deterministic and well-documented.
- If you add a new example, include a short README or inline comment with how to run it.

Pull requests and issues are welcome.

---
