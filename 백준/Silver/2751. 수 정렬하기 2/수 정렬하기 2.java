import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int n = Integer.parseInt(br.readLine());

        List<Integer> list = new ArrayList<>();

        for(int i = 0; i < n; i++) {
            list.add(Integer.parseInt(br.readLine()));
        }

        List<Integer> result = list.stream()
                .sorted()
                .collect(Collectors.toList());

        for(int i = 0; i < n; i++) {
            bw.write(result.get(i) + "\n");
        }

        bw.flush();
        bw.close();
    }
}