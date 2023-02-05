import sys

a = int(sys.stdin.readline())

for i in range(a):
    b = list(sys.stdin.readline())
    count = 0
    result = 0
    for j in b:
        if j == 'O':
            count += 1
            result += count
        else:
            count = 0
    print(result)