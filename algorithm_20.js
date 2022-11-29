// 최대공약수 최소공배수
// 최대공약수 : 두 수의 공통되는 약수 중에서 제일 큰 수
// 최소공배수: 두 수의 공통되는 배수 중에서 제일 작은 수
function solution(n, m) {
  const answer = [];
  const a = Math.min(n, m);
  for (let i = 1; i <= a; i++) {
    if (n % i === 0 && m % i === 0) answer.push(i);
  }
  const divisor = Math.max(...answer);
  const multiple = (n * m) / divisor;
  return [divisor, multiple];
}

// 유클리드 호제법
// 유클리드 호제법이란? 최대공약수를 구하기 위한 알고리즘
// a를 b로 나눴을 때(a가 b보다 클 경우 === 큰 수에서 작은 수를 나눴을 때
//나머지 값이 0이 되면 작은수(b)가 최대공약수가 된다.
// 나머지 값이 0이 되지 않으면, 작은수(b)가 큰수( ㅁ)가 ㅚㄴㄷ

// 먼저 기준점을 3개 만든다.

function solution(n, m) {
  let a = m; // 큰 수
  let b = n; // 작은 수
  let r = 0; // 큰 수를 작은 수로 나눴을 때의 나머지 값

  while (a % b > 0) {
    r = a % b; // 큰 수에서 작은 수를 나눈 나머지 값을 저장
    a = b; // 큰 수는 나눴을 때의 작은 수를 가져온다.
    b = r; // 작은 수에는 나머지 값을 가져온다.
  }

  // 최소공배수는 두 수를 곱한 수에 최대공약수를 나눠준 몫의 값
  return [b, (n * m) / b];
}
