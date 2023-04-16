from random import randint


class Cell:

    def __init__(self):
        self.__is_mine = False
        self.__number = 0
        self.__is_open = False

    @property
    def is_mine(self):
        return self.__is_mine

    @is_mine.setter
    def is_mine(self, value):
        if not isinstance(value, bool):
            raise ValueError("недопустимое значение атрибута")
        self.__is_mine = value

    @property
    def number(self):
        return self.__number

    @number.setter
    def number(self, value):
        if value > 8:
            raise ValueError("недопустимое значение атрибута")
        self.__number = value

    @property
    def is_open(self):
        return self.__is_open

    @is_open.setter
    def is_open(self, value):
        if not isinstance(value, bool):
            raise ValueError("недопустимое значение атрибута")
        self.__is_open = value

    def __bool__(self):
        return self.is_open

    def __add__(self, other):
        if isinstance(other, int):
            self.number += other


class GamePole:
    _is_instance = None

    def __new__(cls, *args, **kwargs):
        if cls._is_instance is None:
            cls._is_instance = object.__new__(cls)
        return cls._is_instance

    def __init__(self, N, M, total_mine):
        self.__pole_cells = tuple(
            tuple(Cell() for _ in range(N)) for _ in range(M))
        self.N = N
        self.M = M
        self.total_mine = total_mine

    @property
    def pole(self):
        return self.__pole_cells

    def __total_mine(self, pole, column):
        pass

    def init_pole(self):
        self.__init__(self.N, self.M, self.total_mine)

        total_mine = self.total_mine

        while total_mine:
            pole = randint(0, self.M - 1)
            column = randint(0, self.N - 1)

            if not self.pole[pole][column]:
                self.pole[pole][column].is_mine = True
                self.__total_mine(pole, column)
                total_mine -= 1

    def open_cell(self, i, j):
        try:
            if self.pole[j][i].is_mine:
                raise ValueError("Вы подарвались")
            self.pole[j][i].is_open = True
        except IndexError:
            raise IndexError('некорректные индексы i, j клетки игрового поля')

    def show_string(self, string):
        res = ""

        for i in string:
            if i:
                res += str(i.number) + " "
            else:
                res += "#" + " "

    def show_pole(self):
        for pole in self.pole:
            print(self.show_string(pole))


p1 = GamePole(10, 20, 10)
p2 = GamePole(10, 20, 10)
assert id(p1) == id(p2), "создается несколько объектов класса GamePole"
p = p1

cell = Cell()
assert type(Cell.is_mine) == property and type(
    Cell.number
) == property and type(
    Cell.is_open
) == property, "в классе Cell должны быть объекты-свойства is_mine, number, is_open"

cell.is_mine = True
cell.number = 5
cell.is_open = True

assert bool(cell) == True, "функция bool() вернула неверное значение"

try:
    cell.is_mine = 10
except ValueError:
    assert True
else:
    assert False, "не сгенерировалось исключение ValueError"

try:
    cell.number = 10
except ValueError:
    assert True
else:
    assert False, "не сгенерировалось исключение ValueError"

p.init_pole()
m = 0
for row in p.pole:
    for x in row:
        assert isinstance(
            x, Cell), "клетками игрового поля должны быть объекты класса Cell"
        if x.is_mine:
            m += 1

assert m == 10, "на поле расставлено неверное количество мин"
p.open_cell(0, 1)
p.open_cell(9, 19)

try:
    p.open_cell(10, 20)
except IndexError:
    assert True
else:
    assert False, "не сгенерировалось исключение IndexError"


def count_mines(pole, i, j):
    n = 0
    for k in range(-1, 2):
        for l in range(-1, 2):
            ii, jj = k + i, l + j
            if ii < 0 or ii > 9 or jj < 0 or jj > 19:
                continue
            if pole[ii][jj].is_mine:
                n += 1

    return n


for i, row in enumerate(p.pole):
    for j, x in enumerate(row):
        if not p.pole[i][j].is_mine:
            m = count_mines(p.pole, i, j)
            assert m == p.pole[i][
                j].number, "неверно подсчитано число мин вокруг клетки"
