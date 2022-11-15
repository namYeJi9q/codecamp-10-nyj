// 자연수 뒤집어 배열로 만들기

function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((x) => (x = parseInt(x)));
}

// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  let answer = arr.filter((n) => n % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
