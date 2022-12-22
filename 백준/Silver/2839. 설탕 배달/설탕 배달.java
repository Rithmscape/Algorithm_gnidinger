import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> list = new ArrayList<>();

        int n = sc.nextInt();

        int count = 0;

        while (n % 5 != 0) {
            count++;
            n = n - 3;
        }

        if (n < 0) System.out.println(-1);
        else System.out.println(n / 5 + count);
    }
}