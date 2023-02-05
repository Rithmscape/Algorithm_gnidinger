import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {


    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        List<Integer> result = new ArrayList<>();

        int t = sc.nextInt();

        for (int i = 0; i < t; i++) {

            List<Integer> list = new ArrayList<>();
            int x = 0;
            int y = 0;
            int r1 = 0;
            int r2 = 0;
            int rp = 0;
            int rm = 0;
            double d = 0;

            for (int j = 0; j < 6; j++) {
                list.add(sc.nextInt());
            }

            x = Math.abs(list.get(3) - list.get(0));
            y = Math.abs(list.get(4) - list.get(1));
            r1 = list.get(2); // 1번 원의 반지름
            r2 = list.get(5); // 2번 원의 반지름
			rp = r1 + r2;
			rm = Math.abs(r1 - r2);
            d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)); // 두 원 중심 사이의 거리

            if (rm == 0 && d == 0) { // 원의 중심이 같고 반지름도 같은 경우(일치)
                result.add(-1);
            } else if (rp < d || d < rm || (d == 0 && rm != 0)) { // 원이 만나지 않는 경우
                result.add(0);
            } else if (rm == d || rp == d) { // 원이 내접, 외접할 경우
                result.add(1);
            } else if (rm < d && d < rp) { // 원이 두 점에서 만날 경우
                result.add(2);
            }
        }
        result.forEach(System.out::println);
    }
}