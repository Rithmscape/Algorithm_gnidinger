import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        String x = sc.next();

        List<String> list = new ArrayList<>();

        list.add(x);

        int result = list.stream()
                .flatMap(a -> Arrays.stream(a.split("")))
                .mapToInt(Integer::parseInt)
                .sum();

        System.out.println(result);
    }
}