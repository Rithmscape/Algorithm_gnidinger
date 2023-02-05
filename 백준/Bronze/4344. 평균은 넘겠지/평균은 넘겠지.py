import sys

c = int(sys.stdin.readline())

result = []

for i in range(c):
    total = list(map(int, sys.stdin.readline().split()))
    number = total[0]
    score = total[1:]
    average = sum(score) / number
    count = 0

    # print(number)
    # print(score)
    # print(sum(score))
    # print(average)

    for j in score:
        if j > average:
            count += 1
    # result.append(count / number)
    rate = count * 100 / number
    print(f'{rate:.3f}%')
