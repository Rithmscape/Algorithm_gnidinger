import sys

n = int(sys.stdin.readline())
scores = list(map(int, sys.stdin.readline().split()))

total_score = 0
combo = 0

for score in scores:
    if score == 1:
        combo += 1
        total_score += combo
    else:
        combo = 0

print(total_score)
