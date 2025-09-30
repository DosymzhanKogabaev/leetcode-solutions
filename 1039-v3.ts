function minScoreTriangulation(values: number[]): number {
    const n = values.length;
    const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  
    for (let length = 2; length < n; length++) {
      for (let i = 0; i < n - length; i++) {
        const j = i + length;
        dp[i][j] = Infinity;
  
        for (let k = i + 1; k < j; k++) {
          dp[i][j] = Math.min(
            dp[i][j],
            dp[i][k] + dp[k][j] + values[i] * values[j] * values[k]
          );
        }
      }
    }
  
    return dp[0][n - 1];
}
  
// Testing
console.log(minScoreTriangulation([1, 2, 3]));       // 6
console.log(minScoreTriangulation([3, 7, 4, 5]));    // 144
console.log(minScoreTriangulation([1, 3, 1, 4, 1, 5])); // 13
  