# Arkose Content Calendar System
Full-stack tool to build branded client content-calendar PDFs without touching
JSON or design files by hand. Add a client, build their calendar in a table,
click Generate PDF.
## Stack
- **Backend:** Python FastAPI + SQLAlchemy + Playwright/Chromium (PDF rendering)
- **Database:** PostgreSQL (falls back to local SQLite if `DATABASE_URL` isn't set)
- **Frontend:** React (Vite)
## How it works
1. Create a client (sets their brand colors: navy / accent / accent2)
2. Create a calendar for that client, add rows (day / type / idea / goal / notes)
3. Stats (REELS / STATIC POSTS / CAROUSEL POSTS / TOTAL) are auto-counted from
   the rows — never type them manually, never get them wrong
4. Click "Generate PDF" — downloads the branded, multi-page PDF instantly
## Local development
### Backend
```bash
cd backend
pip install -r requirements.txt
python -m playwright install chromium
uvicorn app.main:app --reload --port 8000
```
Runs against a local SQLite file (`local_dev.db`) by default — no setup needed.
> **Windows note:** PDF rendering uses Playwright's headless Chromium rather
> than WeasyPrint, specifically to avoid WeasyPrint's GTK/Pango/Cairo system
> dependency, which is painful to install on Windows. The
> `playwright install chromium` step above downloads a self-contained browser
> binary via pip — no separate system installer needed. If `uvicorn` isn't
> found after `pip install`, run it as `python -m uvicorn app.main:app
> --reload --port 8000` instead (bypasses PATH issues with the standalone
> `uvicorn.exe` script).
### Frontend
```bash
cd frontend
npm install
npm run dev
```
Set `VITE_API_URL` in `frontend/.env` to point at your backend (defaults to
`http://localhost:8000`).
## Deploying
### Backend → Render
1. Push this repo to GitHub
2. On Render: New → Blueprint → point at the repo (uses `backend/render.yaml`)
3. This provisions a free Postgres DB and wires `DATABASE_URL` automatically
4. Note the deployed API URL (e.g. `https://arkose-content-api.onrender.com`)
### Frontend → Vercel
1. Import the `frontend/` folder as a new Vercel project
2. Set environment variable `VITE_API_URL` to your Render API URL
3. Deploy — Vercel auto-builds on every push to `main`, same as your other
   Arkose Infosoft projects
### Database — other options
If you'd rather not use Render's Postgres, any standard Postgres connection
string works — Supabase, Railway, Neon, or a VPS. Just set `DATABASE_URL`.
## Project structure
```
backend/
  app/
    main.py          # FastAPI app entrypoint
    database.py       # DB connection (Postgres/SQLite)
    models.py         # SQLAlchemy tables: Client, Calendar, CalendarRow
    schemas.py         # Pydantic request/response shapes
    crud.py            # DB operations
    pdf_engine.py       # Renders a Calendar -> branded PDF bytes
    templates/
      calendar_template.html.j2   # The actual PDF design (Jinja2 + CSS)
    routers/
      clients.py
      calendars.py
  requirements.txt
  render.yaml          # Render deploy blueprint
frontend/
  src/
    api.js              # Talks to the backend
    App.jsx              # Top-level state + wiring
    components/
      Sidebar.jsx          # Client list
      CalendarEditor.jsx    # Calendar fields + actions
      RowsEditor.jsx          # The day-by-day content table
```
## Extending
- **New client field** (e.g. logo image): add a column to `Client` in
  `models.py`, a field in `schemas.py`, and a form input in the frontend.
- **New PDF section:** edit `calendar_template.html.j2` directly — it's plain
  HTML/CSS with Jinja2 `{{ }}` placeholders, same template engine the
  original standalone script used.
- **Bulk import existing calendars:** write a small script using `api.py`
  patterns to POST each client/calendar from a spreadsheet — useful for
  migrating Earthy Tales / other existing client decks into the system.

  