import sys

n = int(sys.stdin.readline().strip())
f = int(sys.stdin.readline().strip())

n -= n % 100

for i in range(100):
    if (n + i) % f == 0:
        print(str(i).zfill(2))
        break
