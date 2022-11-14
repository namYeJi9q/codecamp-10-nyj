// 문자열 내 p와 y의 개수  / filter
function solution(s) {
  let strArray = s.toLowerCase().split("");
  let Pplenth = strArray.filter((i) => i === "p").length;
  let Yylenth = strArray.filter((i) => i === "y").length;
  return Pplenth === Yylenth;
}

// 이상한 문자 만들기   3가지 방법  점점 효울성 좋게 바꾸기
//1번 방법
function solution(s) {
  var answer = "";
  let str = s.split(" ");
  for (let i in str) {
    for (let j in str[i]) {
      j % 2 !== 0
        ? (answer += str[i][j].toLowerCase())
        : (answer += str[i][j].toUpperCase());
    }
    if (i < str.length - 1) answer += " ";
  }
  return answer;
}

//2번 방법
function solution(s) {
  let answer = "";
  let idx = 0; //단어별로 인덱스 값을 저장하는 역할
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백이라면 그냥 공백을 넣어준다.
      answer += " ";
      idx = 0;
    } else {
      answer +=
        idx % 2 === 0
          ? s[i].toUpperCase() // 짝수 인덱스라면 대문자
          : s[i].toLowerCase(); // 홀수 인덱스라면 소문자
      idx++;
    }
  }
  return answer;
}

//3번 방법
function solution(s) {
  // 공백을 기준으로 쪼개서 배열에 저장 (단어를 기준으로)
  const answer = s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
      // 하나의 문자열로 (붙어서) 만들어 준다.
    })
    .join(" ");
  // 공백을 기준으로 (띄어서) 문자열을 만들어 준다.
  return answer;
}
