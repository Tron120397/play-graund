import sys


class Vertex:

    def __init__(self):
        self._links = []

    @property
    def links(self):
        return self._links

    @links.setter
    def links(self, value):
        if value not in self._links:
            self._links.append(value)


class Link:

    def __init__(self, v1, v2, dist=1):
        self._v1 = v1
        self._v2 = v2
        self._dist = dist

    @property
    def v1(self):
        return self._v1

    @property
    def v2(self):
        return self._v2

    @property
    def dist(self):
        return self._dist

    @dist.setter
    def dist(self, value):
        self._dist = value

    @staticmethod
    def check_link_in_list_links(link, lst):

        def get_vert(link):
            return {link.v1, link.v2}

        if isinstance(link, set):
            return all(map(lambda x: link != get_vert(x), lst))

        return all(map(lambda x: get_vert(link) != get_vert(x), lst))


class LinkedGraph:

    def __init__(self):
        self._links = []
        self._vertex = []

    def add_vertex(self, vertex):
        if vertex not in self._vertex:
            self._vertex.append(vertex)

    def add_link(self, link):
        if Link.check_link_in_list_links(link, self._links):
            self._links.append(link)
            x1, x2 = link.v1, link.v2
            if x1 not in self._vertex:
                self.add_vertex(x1)
            if x2 not in self._vertex:
                self.add_vertex(x2)
            if Link.check_link_in_list_links({x1, x2}, x1.links):
                x1.links = link
            if Link.check_link_in_list_links({x1, x2}, x2.links):
                x2.links = link

    def __get_vert_in_link(self, link, vertex):
        return link.v1 if link.v2 == vertex else link.v2

    def find_path(self, start_v, stop_v):
        dict_vertex_weight = dict([(i, sys.maxsize) if i != start_v else (i, 0)
                                   for i in self._vertex])
        dict_vertex_visit = {i: False for i in self._vertex}
        dict_path_to_vertex = dict(
            list((i, []) if i != start_v else (i, [start_v])
                 for i in self._vertex))
        dict_path_to_link = dict(list((i, []) for i in self._vertex))

        while not dict_vertex_visit[stop_v]:
            min_vertex_weight = sys.maxsize
            weight = 0

            # берем точку с минмальным весом из всех точек и чтобы она была не посященной
            for vertex, weight in dict_vertex_weight.items():
                if weight < min_vertex_weight and not dict_vertex_visit.get(
                        vertex):
                    min_vertex_weight = weight
                    now_vertex = vertex

            neughbrus_vertex = []
            for link in now_vertex.links:
                vertex_in_link = self.__get_vert_in_link(link, now_vertex)

                if dict_vertex_visit[vertex_in_link]:
                    continue

                if dict_vertex_weight[
                        now_vertex] + link.dist < dict_vertex_weight[
                            vertex_in_link]:
                    dict_vertex_weight[vertex_in_link] = dict_vertex_weight[
                        now_vertex] + link.dist
                    dict_path_to_vertex[vertex_in_link] = [
                        *dict_path_to_vertex[now_vertex], vertex_in_link
                    ]
                    dict_path_to_link[vertex_in_link] = [
                        *dict_path_to_link[now_vertex], link
                    ]

            dict_vertex_visit[now_vertex] = True

        return dict_path_to_vertex[stop_v], dict_path_to_link[stop_v]


class Station(Vertex):

    def __init__(self, name):
        super().__init__()
        self.name = name

    def __str__(self):
        return self.name

    def __repr__(self):
        return self.name


class LinkMetro(Link):

    def __init__(self, v1, v2, dist):
        super().__init__(v1, v2, dist)


map2 = LinkedGraph()
v1 = Vertex()
v2 = Vertex()
v3 = Vertex()
v4 = Vertex()
v5 = Vertex()

map2.add_link(Link(v1, v2))
map2.add_link(Link(v2, v3))
map2.add_link(Link(v2, v4))
map2.add_link(Link(v3, v4))
map2.add_link(Link(v4, v5))

assert len(map2._links
           ) == 5, "неверное число связей в списке _links класса LinkedGraph"
assert len(map2._vertex
           ) == 5, "неверное число вершин в списке _vertex класса LinkedGraph"

map2.add_link(Link(v2, v1))
assert len(
    map2._links
) == 5, "метод add_link() добавил связь Link(v2, v1), хотя уже имеется связь Link(v1, v2)"

path = map2.find_path(v1, v5)
s = sum([x.dist for x in path[1]])
assert s == 3, "неверная суммарная длина маршрута, возможно, некорректно работает объект-свойство dist"

assert issubclass(Station, Vertex) and issubclass(
    LinkMetro, Link
), "класс Station должен наследоваться от класса Vertex, а класс LinkMetro от класса Link"

map2 = LinkedGraph()
v1 = Station("1")
v2 = Station("2")
v3 = Station("3")
v4 = Station("4")
v5 = Station("5")

map2.add_link(LinkMetro(v1, v2, 1))
map2.add_link(LinkMetro(v2, v3, 2))
map2.add_link(LinkMetro(v2, v4, 7))
map2.add_link(LinkMetro(v3, v4, 3))
map2.add_link(LinkMetro(v4, v5, 1))

assert len(map2._links
           ) == 5, "неверное число связей в списке _links класса LinkedGraph"
assert len(map2._vertex
           ) == 5, "неверное число вершин в списке _vertex класса LinkedGraph"

path = map2.find_path(v1, v4)

print(path)