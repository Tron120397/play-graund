from collections import deque

lifo = []
data = list(map(int, input().split()))
lifo.extend(data)

print(*[lifo.pop() for _ in range(2)])
