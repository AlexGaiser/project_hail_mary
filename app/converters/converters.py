from converters import constants
import abc


class Numbers:
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
        self.human = constants.HUMAN_ERIDIAN_DIGITS
        self.eridian = constants.ERIDIAN_HUMAN_DIGITS


class IConverter(metaclass=abc.ABCMeta):

    @abc.abstractmethod
    def integer(self, num: int or str):
        pass

    @abc.abstractmethod
    def seconds(self, num):
        pass

    @abc.abstractmethod
    def atmospheres(self, num):
        pass


class HumanToEridianConverter(IConverter):
    type = 'human'
    outputType = 'eridian'

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

    def seconds(self, seconds) -> int:
        return self.integer(int(seconds/constants.SECONDS_CONV_FACTOR))

    def atmospheres(self, atm):
        return atm/29


class EridianToHumanConverter(IConverter):
    type = 'eridian'
    outputType = 'human'

    def __init__(self) -> None:
        self.numbers = Numbers()
        self.digits = self.numbers.eridian

    def atmospheres(self, atm):
        return atm * 29

    def integer(self, num: str) -> int:
        num_str = ''

        for d in num:
            num_str += self.digits[d]

        return self.numbers.base6ToBase10(int(num_str))

    def seconds(self, seconds: str):
        return self.integer(seconds) * constants.SECONDS_CONV_FACTOR


class Converter:
    def __init__(self) -> None:
        self.human: IConverter = HumanToEridianConverter()
        self.eridian: IConverter = EridianToHumanConverter()

    def build(format: str = 'human') -> IConverter:
        if format == 'eridian':
            return EridianToHumanConverter()
        else:
            return HumanToEridianConverter()
