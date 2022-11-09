// 짝수 홀수를 반환 if else로 풀이
function solution(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//짝수 홀수 삼항연산자로 풀기
function solution(num) {
  return num % 2 ? "Odd" : "Even";
}

// 평균구하기
function solution(arr) {
  const length = arr.length;
  let total = 0;
  for (let i = 0; i < length; i++) {
    total += arr[i];
  }

  let answer = total / length;
  return answer;
}

// reduce 사용해서 풀기
function solution(arr) {
  return (
    arr.reduce((c, r) => {
      return c + r;
    }, 0) / arr.length
  );
}

// 가운데 글자 가져오기 삼항연산자 사용
function solution(s) {
  const divide = Math.ceil(s.length / 2);
  return s.length % 2 ? s[divide - 1] : s[divide - 1] + s[divide];
}

function solution(s) {
  var divide = Math.floor(s.length / 2);
  return s.length % 2 ? s[divide] : s[divide - 1] + s[divide];
}

// slice
function solution(s) {
  const divide = Math.floor(s.length / 2);
  const answer =
    s.length % 2
      ? s.slice(divide, divide + 1)
      : s.slice(divide - 1, divide + 1);
  return answer;
}
