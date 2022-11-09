// 서울에서 김서방찾기 / indexof 를 사용
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

// 문자열 다루기 기본  (정규식을 쓰는것도 좋겠다.)
function solution(s) {
  return Number(s) == parseInt(s) && (s.length === 4 || s.length === 6);
}

// 이건 런타임 에러가 남
function solution(s) {
  return s == Number(s) && (s.length === 4 || s.length === 6) ? true : false;
}

//  for 문으로 n의 약수의 함 구하기
function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) answer += i;
  }
  return answer;
}

// reduce() 이용
function solution(n) {
  return new Array(n).fill(1).reduce((acc, cur, i) => {
    const num = cur + i;
    return acc + (n % num === 0 ? num : 0);
  }, 0);
}
