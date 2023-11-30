import sys

dp = [0] * 68
dp[0], dp[1], dp[2], dp[3] = 1, 1, 2, 4

for i in range(4, 68):
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3] + dp[i - 4]

T = int(sys.stdin.readline().strip())
test_cases = [int(sys.stdin.readline().strip()) for _ in range(T)]

for n in test_cases:
    print(dp[n])