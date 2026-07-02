from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine, Base
from .routers import clients, quotations

# Creates tables on startup if they don't exist yet.
# For production schema changes later, switch to Alembic migrations.
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Arkose Quotation PDF API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten this to your deployed frontend URL in production
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(clients.router)
app.include_router(quotations.router)


@app.get("/")
def health_check():
    return {"status": "ok", "service": "arkose-quotation-pdf-api"}

