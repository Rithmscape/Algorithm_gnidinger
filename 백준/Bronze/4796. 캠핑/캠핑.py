import sys

test_case = 1
while True:
    l, p, v = map(int, sys.stdin.readline().split())
    if l == 0:
        break
    days = (v // p) * l + min(v % p, l)
    print(f"Case {test_case}: {days}")
    test_case += 1
