from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, JSON
from sqlalchemy.orm import relationship
from .database import Base


class Client(Base):
    __tablename__ = "clients"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    logo_text = Column(String, nullable=True)  # shown in the white logo box; defaults to name
    logo_url = Column(String, nullable=True)   # optional custom logo image URL
    theme_navy = Column(String, default="#16213f")
    theme_accent = Column(String, default="#e8962e")
    theme_accent2 = Column(String, default="#3a7bbf")
    created_at = Column(DateTime, default=datetime.utcnow)

    quotations = relationship("Quotation", back_populates="client", cascade="all, delete-orphan")


class Quotation(Base):
    __tablename__ = "quotations"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, ForeignKey("clients.id"), nullable=False)

    title = Column(String, nullable=False)        # e.g. "Social Media Marketing Proposal"
    pages = Column(JSON, nullable=False)          # structured pages array
    created_at = Column(DateTime, default=datetime.utcnow)

    client = relationship("Client", back_populates="quotations")
