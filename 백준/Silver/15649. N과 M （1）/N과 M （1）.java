import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	static int n;
	static int m;
	static int[] arr;
	static boolean[] isVisited;
	static StringBuilder sb= new StringBuilder();

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		arr = new int[m];
		isVisited = new boolean[n + 1];

		dfs(0);

		System.out.println(sb);
	}

	private static void dfs(int depth) {
		if (depth == m) {
			for (int num : arr) {
				sb.append(num).append(" ");
			}
			sb.append('\n');
			return;
		}

		for (int i = 1; i <= n; i++) {
			if (!isVisited[i]) {
				isVisited[i] = true;
				arr[depth] = i;
				dfs(depth + 1);
				isVisited[i] = false;
			}
		}
	}
}
