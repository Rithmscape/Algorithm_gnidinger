import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        List<Integer> areaList = new ArrayList<>();

        for (int i = 0; i < 10000; i++) {
            areaList.add(0);
        }

        for (int i = 0; i < n; i++) {

            int x = sc.nextInt();
            int y = sc.nextInt();
            int z = y * 100 + x; // 시작점

            for (int j = z; j < z + 1000; j = j + 100) {
                for (int k = 0; k < 10; k++) {
                    areaList.set(j + k, 1);
                }
            }
        }
        long area = areaList.stream()
                .filter(a -> a == 1)
                .count();

        System.out.println(area);
    }
}