from collections import deque

data = list(map(int, input().split()))
fifo = deque()
fifo.extend(data)
print(fifo)
q_answer = []

for i in range(3):
    q_answer.append(fifo.popleft())

print(*q_answer)

assert fifo == deque([1, 2, 3, 4, 5]), "Все хорошо"