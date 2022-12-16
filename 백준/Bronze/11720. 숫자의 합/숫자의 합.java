import java.util.Scanner;

public class Prob11720Stream {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int result = sc.next().chars()
                .map(a -> a - 48)
                .sum();

        System.out.println(result);
    }
}
