// 수포자 중 가장 많이 맞춘 사람
// 풀다가 한계에 부딧침..
function solution(answers) {
  var answer = [];
  const giver1 = [1, 2, 3, 4, 5];
  const giver2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const giver3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const numArr1 = answers.filter((num, index) => giver1[index] === num);
  const numArr2 = answers.filter((num, index) => giver2[index] === num);
  const numArr3 = answers.filter((num, index) => giver3[index] === num);

  const a = numArr1.length;
  const b = numArr2.length;
  const c = numArr3.length;

  // for(let i=0; i<answers.length; i++){
  //     if(answers[i] === giver1[i]) answer.push(1)
  //     if(answers[i] === giver2[i]) answer.push(2)
  //     if(answers[i] === giver3[i]) answer.push(3)
  // }

  console.log([a, b, c].sort((a, b) => b - a));
  return answer.sort((a, b) => a > b);
}

// 풀이
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const score = [0, 0, 0]; // 학생들의 점수를 저장하는 배열
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < answerTable.length; j++) {
      if (answerTable[j][i % answerTable[j].length] === answers[i]) score[j]++;
    }
  }
  // 제일 많이 맞춘 문제의 수를 찾아온다.
  const biggest = Math.max(...score);

  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === biggest) answer.push(i + 1);
  }
  return answer;
}

// 메소드를 이용한 풀이
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5],
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자가 찍는 방식
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur, j) => {
      return acc + (el[j % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score }; // score: score
  });
  // 최대로 맞춘 문제의 수 가져오기
  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score; // 결과값: [5,0,0]
    })
  );
  const answer = scoreList
    .filter((el) => {
      return biggest === el.score;
    })
    .map((el) => el.student);
  return answer;
}
