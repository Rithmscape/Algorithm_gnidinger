import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.IntStream;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        List<Integer> list = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            list.add(sc.nextInt());
        }

        int ave = (int) list.stream()
                .mapToInt(Integer::intValue)
                .average()
                .getAsDouble();

        int med = list.stream()
                .sorted()
                .mapToInt(Integer::intValue)
                .skip(2)
                .findFirst()
                .getAsInt();

        System.out.println(ave);
        System.out.println(med);

    }
}
