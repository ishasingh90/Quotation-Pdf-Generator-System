from sqlalchemy.orm import Session, selectinload
from . import models, schemas


# ---------- Clients ----------

def create_client(db: Session, data: schemas.ClientCreate) -> models.Client:
    client = models.Client(**data.model_dump())
    db.add(client)
    db.commit()
    db.refresh(client)
    return client


def get_clients(db: Session):
    return db.query(models.Client).order_by(models.Client.name).all()


def get_client(db: Session, client_id: int):
    return db.query(models.Client).filter(models.Client.id == client_id).first()


def update_client(db: Session, client: models.Client, data: schemas.ClientUpdate):
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(client, field, value)
    db.commit()
    db.refresh(client)
    return client


def delete_client(db: Session, client: models.Client):
    db.delete(client)
    db.commit()


# ---------- Quotations ----------

def create_quotation(db: Session, data: schemas.QuotationCreate) -> models.Quotation:
    quotation = models.Quotation(**data.model_dump())
    db.add(quotation)
    db.commit()
    db.refresh(quotation)
    return quotation


def get_quotations_for_client(db: Session, client_id: int):
    return (
        db.query(models.Quotation)
        .filter(models.Quotation.client_id == client_id)
        .order_by(models.Quotation.created_at.desc())
        .all()
    )


def get_quotation(db: Session, quotation_id: int):
    return (
        db.query(models.Quotation)
        .options(selectinload(models.Quotation.client))
        .filter(models.Quotation.id == quotation_id)
        .first()
    )


def update_quotation(db: Session, quotation: models.Quotation, data: schemas.QuotationUpdate):
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(quotation, field, value)
    db.commit()
    db.refresh(quotation)
    return quotation


def delete_quotation(db: Session, quotation: models.Quotation):
    db.delete(quotation)
    db.commit()

