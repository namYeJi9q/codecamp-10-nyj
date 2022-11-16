//콜라주 추측
// while문
function solution(num) {
  var answer = 0;

  while (num !== 1 && answer !== 500) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    answer += 1;
  }
  return num === 1 ? answer : -1;
}

// reduce문
function solution(num) {
  let count = 0;
  const result = new Array(500).fill(1).reduce((cu, el) => {
    if (cu !== 1) {
      count++;
      return cu % 2 === 0
        ? cu / 2 // 짝수
        : cu * 3 + 1; // 홀수
    } else {
      return 1;
    }
  }, num);
  return result !== 1 ? -1 : count;
}

// forEach
function solution(num) {
  let answer = 0;
  const result = new Array(500).fill(1).forEach((el) => {
    if (num !== 1) {
      num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
      answer++;
    }
  });
  return num !== 1 ? -1 : answer;
}
