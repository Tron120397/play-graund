def queue_time(customers, n):
    time = 0
    while len(customers) > n:
        time += max(customers[:n])
        customers = customers[n:]

    return time + max(customers, default=0)


print(
    queue_time([
        68, 143, 133, 92, 127, 146, 98, 16, 11, 75, 42, 125, 39, 42, 147, 36,
        21, 16, 42, 93, 41, 71, 90, 112, 97, 127, 47, 76, 55, 79, 124, 111, 24,
        14, 74, 98, 138, 76, 45, 139, 75, 150, 18, 79, 97, 17, 11, 35, 122, 100
    ], 8))
