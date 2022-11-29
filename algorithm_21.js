// 완주하지 못한 선수
// 효율성 통과하지 못함. 매개변수에 들어오는 데이터가 너무 많음
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    participant.splice(participant.indexOf(completion[i]), 1);
  }
  return participant[0];
}

// 다른 방법으로 풀어보자

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

// 매서드도 이용
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
