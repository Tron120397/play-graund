from random import sample


class TicTacToe:
    FREE_CELL = 0  # свободная клетка
    HUMAN_X = 1  # крестик (игрок - человек)
    COMPUTER_O = 2  # нолик (игрок - компьютер)

    def __init__(self):
        self.pole = tuple(tuple(Cell() for i in range(3)) for _ in range(3))

    def init(self):
        self.__init__()
        self.is_computer_win
        self.is_human_win
        self.is_draw

    def __chekc_indx(self, item):
        one, two = item
        if not isinstance(one, int) or not isinstance(two, int) or\
                not (0 <= one < 2) or not (0 <= two < 2):
            raise IndexError('некорректно указанные индексы')

    def show(self):
        for i in self.pole:
            print(*["|" + str(j.value) + "|" for j in i])
        print("_" * 11)

    def human_go(self):
        coords = tuple(map(int, input('Введите координаты').split()))
        self[coords] = self.HUMAN_X

    def computer_go(self):
        while True:
            indx = tuple(sample((0, 1, 2), 2))
            if not self[indx]:
                self[indx] = self.COMPUTER_O
                break

    def __getitem__(self, item):
        one, two = item
        return self.pole[one][two].value

    def __setitem__(self, key, value):
        one, two = key
        self.pole[one][two].value = value
        self.is_computer_win
        self.is_human_win

    def __check_pole(self, value):
        lst_wins = []
        for i in range(3):
            tpl = []
            for j in range(3):
                tpl.append(self.pole[i][j].value)
            lst_wins.append(tuple(tpl))

        for i in range(3):
            lst_wins.append(tuple(self.pole[j][i].value for j in range(3)))

        lr, rl = 0, 2
        tpllr, tplrl = [], []

        while lr <= 2:
            tpllr.append(self.pole[lr][lr].value)
            tplrl.append(self.pole[lr][rl].value)
            lr += 1
            rl -= 1
        else:
            lst_wins.append(tuple(tpllr))
            lst_wins.append(tuple(tplrl))

            return (value, value, value) in lst_wins

    @property
    def is_human_win(self):
        return self.__check_pole(1)

    @property
    def is_computer_win(self):
        return self.__check_pole(2)

    @property
    def is_draw(self):
        if not self.is_human_win and not self.is_computer_win and not self:
            return True
        return False

    def __bool__(self):
        fl_game = False

        for i in self.pole:
            for j in i:
                if j:
                    fl_game = True

        if self.is_human_win or self.is_computer_win:
            return False

        return fl_game


class Cell:

    def __init__(self):
        self.value = 0

    def __bool__(self):
        return self.value == 0


game = TicTacToe()
game.init()
step_game = 0
while game:
    game.show()

    if step_game % 2 == 0:
        game.human_go()
    else:
        game.computer_go()

    step_game += 1

game.show()

if game.is_human_win:
    print("Поздравляем! Вы победили!")
elif game.is_computer_win:
    print("Все получится, со временем")
else:
    print("Ничья.")
