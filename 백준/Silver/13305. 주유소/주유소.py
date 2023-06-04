import sys

n = int(sys.stdin.readline().rstrip())

distances = list(map(int, sys.stdin.readline().rstrip().split()))
prices = list(map(int, sys.stdin.readline().rstrip().split()))

min_cost = 0
min_price = prices[0]

for i in range(1, n):
    min_cost += min_price * distances[i - 1]
    if prices[i] < min_price:
        min_price = prices[i]

print(min_cost)
