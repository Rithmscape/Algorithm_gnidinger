import sys

total_cost = int(sys.stdin.readline().strip())

for _ in range(9):
    book_price = int(sys.stdin.readline().strip())
    total_cost -= book_price

print(total_cost)