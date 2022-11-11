// 문자열 내림차순
function solution(s) {
  return s.split("").sort().reverse().join("");
}
// 오름차순 array.sort((a,b)=>a-b)
// 내림차순 array.sort((a,b)=>b-a)
//String.fromCharCode(65) 문자의 순서 'A' (97)은 'a' / 대문자는 소문자봐다 앞에있다.
// 문자열 오름차순 str.sort((a,b)=> a<b?-1:1)
// 문자열 내림차순 str.sort((a,b)=> b<a?-1:1)

// k번째 수
function solution(array, commands) {
  let answer = commands.map(
    (n) => array.slice(n[0] - 1, n[1]).sort((a, b) => a - b)[n[2] - 1]
  );
  // let kNum = array.slice(commands[0][0]-1,commands[0][1]).sort()[commands[0][2]-1]
  return answer;
}

function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];

    const result = array.slice(i - 1, j).sort((a, b) => a - b);

    answer.push(result[k - 1]);
  }
  return answer;
}

function solution(array, commands) {
  const answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b;
    });
    return result[el[2] - 1];
  });

  return answer;
}

// startsWith()
