// 예산 for문
function solution(d, budget) {
  d.sort((a, b) => a - b); // 오름차순
  let answer = 0; // 지원한 부서의 수

  for (let i = 0; i < d.length; i++) {
    // 예산에서 지원할 부서의 예산을 빼도 0보다 크면 빼주기
    if (budget - d[i] >= 0) {
      budget -= d[i];
      answer++;
    } else {
      continue; // 예산이 부족하면 끝내기
    }
  }
  return answer;
}

// while문
function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  while (budget - d[answer] >= 0) {
    budget -= d[answer];
    answer++;
  }
  return answer;
}

// filter를 사용해서 걸러주기
function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter((money) => {
      budget -= money;
      return budget >= 0;
    });
  return answer.length;
}
