import sys

n = int(sys.stdin.readline())

max_prize = 0
for _ in range(n):
    a, b, c = map(int, sys.stdin.readline().split())
    if a == b == c:
        prize = 10000 + a * 1000
    elif a == b or b == c or a == c:
        prize = 1000 + (a if a == b or a == c else b) * 100
    else:
        prize = max(a, b, c) * 100
    max_prize = max(max_prize, prize)

print(max_prize)
