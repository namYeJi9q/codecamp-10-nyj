// 내적 for문 사용 //////////////////////////////////
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// reduce 풀이
function solution(a, b) {
  return a.reduce((cu, el, i) => {
    return cu + el * b[i];
  }, 0);
}

// 제일 작은 수 제거하기 ///////////////////////////////////

// 실패한 풀이
function solution(arr) {
  arr.sort((a, b) => b - a).pop();
  return arr.length !== 0 ? arr : arr.concat(-1);
}
// 왜 실패했을까. 우선 배열의 순서를 내 마음대로 바꿔서 전부 실패로 뜬것같다.
// 배열의 순서는 건드리지 말고 reduce나 Math 를 사용해보자

// Math를 활용한 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length !== 0 ? arr : [-1];
}

// reduce 풀이
function solution(arr) {
  let minNum = arr.reduce((a, b) => (a < b ? a : b));
  arr.splice(arr.indexOf(minNum), 1);
  return arr.length !== 0 ? arr : [-1];
}
