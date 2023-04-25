import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	static int n;
	static int m;
	static int[] arr;
	static boolean[] isVisited;

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		arr = new int[m];
		isVisited = new boolean[n + 1];

		dfs(1, 0);

	}

	private static void dfs(int start, int depth) {
		if (depth == m) {
			for (int num : arr) {
				System.out.print(num + " ");
			}
			System.out.println();
			return;
		}

		for (int i = start; i <= n; i++) {
			if (!isVisited[i - 1]) {
				isVisited[i - 1] = true;
				arr[depth] = i;
				dfs(i + 1, depth + 1);
				isVisited[i - 1] = false;
			}
		}
	}
}
