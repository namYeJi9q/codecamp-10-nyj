// 자릿수 더하기 for문과 for in문을 사용해봤는데 for문이 더 빠르다.
function solution(n) {
  let answer = 0;
  let str = String(n);

  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str[i]);
  }
  return answer;
}

function solution(n) {
  let answer = 0;
  let str = String(n);

  for (let i in str) {
    answer += parseInt(str[i]);
  }
  return answer;
}

//reduce 사용
function solution(n) {
  return String(n)
    .split("")
    .reduce((a, c) => {
      return a + Number(c);
    }, 0);
}

// x만틈 간격이 있는 n개의 숫자  /for문
function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

//map 함수 사용
function solution(x, n) {
  return new Array(n).fill(1).map((num, i) => (num + i) * x);
}
