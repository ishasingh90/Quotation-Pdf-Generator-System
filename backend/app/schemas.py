from datetime import datetime
from typing import Optional, List, Any
from pydantic import BaseModel, ConfigDict


# ---------- Client ----------

class ClientBase(BaseModel):
    name: str
    logo_text: Optional[str] = None
    logo_url: Optional[str] = None
    theme_navy: str = "#16213f"
    theme_accent: str = "#e8962e"
    theme_accent2: str = "#3a7bbf"


class ClientCreate(ClientBase):
    pass


class ClientUpdate(BaseModel):
    name: Optional[str] = None
    logo_text: Optional[str] = None
    logo_url: Optional[str] = None
    theme_navy: Optional[str] = None
    theme_accent: Optional[str] = None
    theme_accent2: Optional[str] = None


class ClientOut(ClientBase):
    model_config = ConfigDict(from_attributes=True)
    id: int
    created_at: datetime


# ---------- Quotation ----------

class QuotationBase(BaseModel):
    title: str
    pages: List[dict] = []  # holds the list of custom pages with their content blocks


class QuotationCreate(QuotationBase):
    client_id: int


class QuotationUpdate(BaseModel):
    title: Optional[str] = None
    pages: Optional[List[dict]] = None


class QuotationOut(QuotationBase):
    model_config = ConfigDict(from_attributes=True)
    id: int
    client_id: int
    created_at: datetime


class QuotationListItem(BaseModel):
    """Lightweight version for list views."""
    model_config = ConfigDict(from_attributes=True)
    id: int
    client_id: int
    title: str
    created_at: datetime
    page_count: int = 0

