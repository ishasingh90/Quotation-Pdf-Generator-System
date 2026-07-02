from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import Response
from sqlalchemy.orm import Session
from .. import crud, schemas
from ..database import get_db
from ..pdf_engine import render_quotation_pdf

router = APIRouter(prefix="/quotations", tags=["quotations"])


@router.post("", response_model=schemas.QuotationOut)
def create_quotation(payload: schemas.QuotationCreate, db: Session = Depends(get_db)):
    client = crud.get_client(db, payload.client_id)
    if not client:
        raise HTTPException(404, "Client not found")
    return crud.create_quotation(db, payload)


@router.get("/by-client/{client_id}", response_model=list[schemas.QuotationOut])
def list_quotations_for_client(client_id: int, db: Session = Depends(get_db)):
    return crud.get_quotations_for_client(db, client_id)


@router.get("/{quotation_id}", response_model=schemas.QuotationOut)
def get_quotation(quotation_id: int, db: Session = Depends(get_db)):
    quotation = crud.get_quotation(db, quotation_id)
    if not quotation:
        raise HTTPException(404, "Quotation not found")
    return quotation


@router.patch("/{quotation_id}", response_model=schemas.QuotationOut)
def update_quotation(quotation_id: int, payload: schemas.QuotationUpdate, db: Session = Depends(get_db)):
    quotation = crud.get_quotation(db, quotation_id)
    if not quotation:
        raise HTTPException(404, "Quotation not found")
    return crud.update_quotation(db, quotation, payload)


@router.delete("/{quotation_id}", status_code=204)
def delete_quotation(quotation_id: int, db: Session = Depends(get_db)):
    quotation = crud.get_quotation(db, quotation_id)
    if not quotation:
        raise HTTPException(404, "Quotation not found")
    crud.delete_quotation(db, quotation)


@router.get("/{quotation_id}/pdf")
def get_quotation_pdf(quotation_id: int, db: Session = Depends(get_db)):
    quotation = crud.get_quotation(db, quotation_id)
    if not quotation:
        raise HTTPException(404, "Quotation not found")

    pdf_bytes = render_quotation_pdf(quotation)
    filename = f"{quotation.client.name.replace(' ', '_')}_proposal.pdf"
    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )
