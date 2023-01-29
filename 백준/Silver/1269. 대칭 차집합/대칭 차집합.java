import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class Main {
    
    public static void main(String[] args) throws IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        
        Set<Integer> setN = new HashSet<>();
        Set<Integer> setM = new HashSet<>();

        StringTokenizer stN = new StringTokenizer(br.readLine());
        
        for (int i = 0; i < n; i++) {
            setN.add(Integer.parseInt(stN.nextToken()));
        }

        StringTokenizer stM = new StringTokenizer(br.readLine());
        for (int i = 0; i < m; i++) {
            setM.add(Integer.parseInt(stM.nextToken()));
        }

        // 합집합
        Set<Integer> union = new HashSet<>(setN);
        
        union.addAll(setM);

        // 교집합
        Set<Integer> inter = new HashSet<>(setN);
        
        inter.retainAll(setM);
        
        // 대칭 차집합
        union.removeAll(inter);

        System.out.println(union.size());
    }
}
