class Numbers:
    _human_digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    _eridian_digits = ['L', 'I', 'V', 'λ', '+', '⍱']

    human = {}
    eridian = {}

    def base10ToBase6(self, num: int) -> int:
        if num == 0:
            return 0
        res = ''
        while num > 0:
            res = str(num % 6) + res
            num //= 6
        if res != '':
            return int(res)
        return 0

    def base6ToBase10(self, num: int):
        return int(str(num), 6)

    def __init__(self) -> None:
        for idx, val in enumerate(self._eridian_digits):
            self.human[self._human_digits[idx]] = val
            self.eridian[val] = self._human_digits[idx]


class HumanToEridianConverter:
    type = 'human'

    def __init__(self) -> None:
        self.numbers = Numbers()
        self.digits = self.numbers.human

    def integer(self, num: int) -> str:
        base6Num = self.numbers.base10ToBase6(num)
        num_str = str(base6Num)
        res = ''
        for d in num_str:
            res += self.digits[d]

        return res

    def atmospheres(self, atm):
        return atm * 29


class EridianToHumanConverter:
    type = 'eridian'

    def __init__(self) -> None:
        self.numbers = Numbers()
        self.digits = self.numbers.eridian

    def atmospheres(self, atm):
        return atm/29

    def integer(self, num: str) -> int:
        num_str = ''

        for d in num:
            num_str += self.digits[d]

        return self.numbers.base6ToBase10(int(num_str))


class Converter:
    def build(self, format: str = 'human'):
        if format == 'eridian':
            return EridianToHumanConverter()

        else:
            return HumanToEridianConverter()

    # def __init__() -> EridianToHumanConverter or HumanToEridianConverter:
