import gruut_ipa

def convert_ipa_to_sampa(ipa_text: str) -> str:
    try:
        sampa_text = gruut_ipa.ipa_to_sampa(ipa_text)
        return sampa_text
    except Exception as e:
        raise ValueError(f"Conversion error: {str(e)}")