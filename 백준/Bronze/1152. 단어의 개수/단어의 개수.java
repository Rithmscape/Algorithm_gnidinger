import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine().trim();

        if(str.length() == 0) System.out.println(0);

        else {
            long result = Arrays.stream(str.split(" "))
                    .count();
            System.out.println(result);
        }
    }
}