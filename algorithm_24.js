// 피보나치 수열..
function solution(n) {
  var answer = 0;
  const fibonacci = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
  }
  answer = fibonacci[n] % 1234567;
  return answer;
}

// 효율성문제에서 막힘.
