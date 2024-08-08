from fastapi import APIRouter, HTTPException
from app.models import ConvertRequest, ConvertResponse
from app.services.conversion import convert_ipa_to_sampa

router = APIRouter()

@router.post("/convert", response_model=ConvertResponse)
async def convert(request: ConvertRequest):
    try:
        sampa_text = convert_ipa_to_sampa(request.ipa_text)
        if not sampa_text:
            raise HTTPException(status_code=400, detail="Conversion failed. Invalid IPA text.")
        return ConvertResponse(sampa=sampa_text)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))