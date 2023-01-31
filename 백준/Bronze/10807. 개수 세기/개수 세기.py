import sys

a = int(sys.stdin.readline())

b = sys.stdin.readline().split()

c = sys.stdin.readline().rstrip()

count = 0

for i in b:
    if i == c:
        count += 1

print(count)