import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        String N = st.nextToken();
        int B = Integer.parseInt(st.nextToken());

        int ans = 0;
        for (int i = 0; i < N.length(); i++) {
            int n = 0;
            if ('0' <= N.charAt(i) && N.charAt(i) <= '9') {
                n = N.charAt(i) - '0';
            } else {
                n = N.charAt(i) - 'A' + 10;
            }
            ans = ans * B + n;
        }

        System.out.println(ans);
    }
}