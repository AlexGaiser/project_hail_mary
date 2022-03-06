SECONDS_CONV_FACTOR = 2.33

ER_DIGITS = ['ℓ', 'I', 'V', 'λ', '+', '∀']

HUMAN_ERIDIAN_DIGITS = {}
ERIDIAN_HUMAN_DIGITS = {}
for i, d in enumerate(ER_DIGITS):
    HUMAN_ERIDIAN_DIGITS[str(i)] = d
    ERIDIAN_HUMAN_DIGITS[d] = str(i)
