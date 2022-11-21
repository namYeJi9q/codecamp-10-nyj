// 하샤드 수  // reduce
function solution(x) {
  let sum = (x + "")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
  return x % sum === 0;
}
