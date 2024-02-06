import sys

a = int(sys.stdin.readline())
op = sys.stdin.readline().strip()
b = int(sys.stdin.readline())

if op == '+':
    result = a + b
else:
    result = a * b

print(result)
