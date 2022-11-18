// 정수 제곱근 판별

function solution(n) {
  // if(Number.isInteger(Math.sqrt(n))){
  //     return (Math.sqrt(n) +1) ** 2;
  // } else{
  //     return -1;
  // }
  //Number.isInteger() **메서드는 주어진 값이 정수인지 판별합니다.
  //Math.sqrt() 함수는 숫자의 제곱근을 반환합니다.
  //Math.pow(n,2) n의 제곱을 반환합니다.
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}
