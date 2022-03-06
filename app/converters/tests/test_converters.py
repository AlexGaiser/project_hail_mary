from converters.constants import ER_DIGITS
from converters import constants
from converters.converters import Converter, Numbers

human = Converter.build()

eridian = Converter.build('eridian')
numbers = Numbers()


def test_combined_converter():
    converter = Converter()
    assert converter.human.type == 'human'
    assert converter.human.outputType == 'eridian'
    assert converter.human.atmospheres(1) == 1/29

    assert converter.human.integer(0) == ER_DIGITS[0]
    assert converter.human.integer(1) == ER_DIGITS[1]
    assert converter.human.integer(2) == ER_DIGITS[2]
    assert converter.human.integer(3) == ER_DIGITS[3]
    assert converter.human.integer(4) == ER_DIGITS[4]
    assert converter.human.integer(5) == ER_DIGITS[5]

    assert converter.human.integer(10) == 'I+'

    assert converter.eridian.type == 'eridian'

    assert converter.eridian.atmospheres(1) == 29
    assert converter.eridian.integer('ℓ') == 0
    assert converter.eridian.integer('I') == 1
    assert converter.eridian.integer('Iℓ') == 6
    assert converter.eridian.integer('Iλ') == 9
    assert converter.eridian.integer('I+') == 10
    assert converter.eridian.integer('∀+λVIℓ') == 44790


def test_human_converter():
    assert human.type == 'human'
    assert human.outputType == 'eridian'
    assert human.atmospheres(1) == 1/29

    assert human.integer(0) == ER_DIGITS[0]
    assert human.integer(1) == ER_DIGITS[1]
    assert human.integer(2) == ER_DIGITS[2]
    assert human.integer(3) == ER_DIGITS[3]
    assert human.integer(4) == ER_DIGITS[4]
    assert human.integer(5) == ER_DIGITS[5]
    assert human.integer(10) == 'I+'


def test_eridian_converter():
    assert eridian.type == 'eridian'
    assert eridian.outputType == 'human'
    assert eridian.atmospheres(1) == 29
    assert eridian.integer('ℓ') == 0
    assert eridian.integer('I') == 1
    assert eridian.integer('Iℓ') == 6
    assert eridian.integer('Iλ') == 9
    assert eridian.integer('I+') == 10
    assert eridian.integer('∀+λVIℓ') == 44790


def test_seconds_converter():
    assert human.seconds(2.33) == constants.HUMAN_ERIDIAN_DIGITS['1']
    assert eridian.seconds(constants.HUMAN_ERIDIAN_DIGITS['1']) == 2.33
    assert eridian.seconds('∀+λVIℓ') == 104360.7


def test_number_class():

    # assert str(
    #     numbers.human) == "{'0': 'ℓ', '1': 'I', '2': 'V', '3': 'λ', '4': '+', '5': '∀'}"
    # assert str(
    #     numbers.eridian) == "{'ℓ': '0', 'I': '1', 'V': '2', 'λ': '3', '+': '4', '∀': '5'}"

    assert numbers.base10ToBase6(6) == 10
    assert numbers.base10ToBase6(10) == 14
    assert numbers.base6ToBase10(5) == 5
    assert numbers.base6ToBase10(14) == 10
