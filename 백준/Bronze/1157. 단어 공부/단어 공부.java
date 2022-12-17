import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < 26; i++) {
            result.add(0);
        }

        List<Integer> ch = sc.nextLine().toUpperCase().chars()
                .map(a -> a - 65)
                .boxed()
                .collect(Collectors.toList());

        for (int i = 0; i < ch.size(); i++) {
            result.set(ch.get(i), result.get(ch.get(i)) + 1);
        }

        List<Integer> sortedResult = result.stream()
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.toList());

        if (sortedResult.get(0).equals(sortedResult.get(1))) System.out.println("?");
        else System.out.println((char) (result.indexOf(sortedResult.get(0)) + 65));
    }
}