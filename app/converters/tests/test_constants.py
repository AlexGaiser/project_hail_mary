from converters import constants


def test_constants():
    assert constants.SECONDS_CONV_FACTOR == 2.33
    assert constants.HUMAN_ERIDIAN_DIGITS == {'0': 'ℓ', '1': 'I',
                                              '2': 'V', '3': 'λ', '4': '+', '5': '∀'}
    assert constants.ERIDIAN_HUMAN_DIGITS == {'ℓ': '0', 'I': '1',
                                              'V': '2', 'λ': '3', '+': '4', '∀': '5'}
