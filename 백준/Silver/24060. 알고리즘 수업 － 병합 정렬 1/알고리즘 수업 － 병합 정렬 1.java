import java.util.Arrays;
import java.util.Scanner;

public class Main {

    private static int[] temp;
    private static int k;
    private static int cnt = 0;

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        k = sc.nextInt();

        int[] arr = new int[a];
        temp = new int[a];

        for (int i = 0; i < a; i++) {
            arr[i] = sc.nextInt();
        }

        mergeSortImpl(arr, 0, a - 1);

        System.out.println(-1);
    }

    public static void mergeSortImpl(int[] arr, int start, int end) {        //배열 A를 클래스 멤버 변수로

        if (start == end) return; // 끝까지 쪼개면 리턴

        int mid = (start + end) / 2; // 절반으로 나누기

        mergeSortImpl(arr, start, mid); // 왼쪽 절반 재귀호출
        mergeSortImpl(arr, mid + 1, end); // 오른쪽 절반 재귀호출

        merge(arr, start, mid, end);
    }

    private static void merge(int[] arr, int p, int q, int r) {
        int i = p;
        int j = q + 1;
        int t = 0;                //배열은 0부터 시작하기에 0으로 초기화
        while (i <= q && j <= r) {
            if (arr[i] <= arr[j])
                temp[t++] = arr[i++];
            else
                temp[t++] = arr[j++];
        }
        while (i <= q)
            temp[t++] = arr[i++];
        while (j <= r)
            temp[t++] = arr[j++];
        i = p;
        t = 0;                //바로 위 주석과 같은 이유
        while (i <= r) {
            arr[i++] = temp[t++];
            cnt++;
            if (cnt == k) {
                System.out.println(arr[i - 1]);
                System.exit(0);
            }
        }
    }
}