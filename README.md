# Pdf generator System
Full-stack tool to build branded client PDFs without touching
JSON or design files by hand. Add a client, build their calendar in a table,
click Generate PDF.
## Stack
- **Backend:** Python FastAPI + SQLAlchemy + Playwright/Chromium (PDF rendering)
- **Database:** PostgreSQL (falls back to local SQLite if `DATABASE_URL` isn't set)
- **Frontend:** React (Vite)
