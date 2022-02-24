from converters import Converter, Numbers

human = Converter().build()

eridian = Converter().build('eridian')
numbers = Numbers()


def test_human_converter():
    assert human.type == 'human'

    assert human.atmospheres(1) == 29

    assert human.integer(0) == 'L'
    assert human.integer(1) == 'I'
    assert human.integer(2) == 'V'
    assert human.integer(3) == 'λ'
    assert human.integer(4) == '+'
    assert human.integer(5) == '⍱'

    assert human.integer(10) == 'I+'


def test_eridian_converter():
    assert eridian.type == 'eridian'

    assert eridian.atmospheres(29) == 1
    assert eridian.integer('L') == 0
    assert eridian.integer('I') == 1
    assert eridian.integer('IL') == 6
    assert eridian.integer('Iλ') == 9
    assert eridian.integer('I+') == 10
    assert eridian.integer('⍱+λVIL') == 44790


def test_number_class():

    assert str(
        numbers.human) == "{'0': 'L', '1': 'I', '2': 'V', '3': 'λ', '4': '+', '5': '⍱'}"
    assert str(
        numbers.eridian) == "{'L': '0', 'I': '1', 'V': '2', 'λ': '3', '+': '4', '⍱': '5'}"

    assert numbers.base10ToBase6(6) == 10
    assert numbers.base10ToBase6(10) == 14
    assert numbers.base6ToBase10(5) == 5
    assert numbers.base6ToBase10(14) == 10
