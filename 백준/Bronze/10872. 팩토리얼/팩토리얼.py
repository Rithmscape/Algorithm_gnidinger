import sys


def fac(n):
    if n == 0:
        return 1
    return n * fac(n - 1)


n = int(sys.stdin.readline().rstrip())

print(fac(n))
