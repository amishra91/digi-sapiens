from pydantic import BaseModel

class ConvertRequest(BaseModel):
    ipa_text: str

class ConvertResponse(BaseModel):
    sampa: str