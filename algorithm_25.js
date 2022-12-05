// 숫자 문자열과 영단어
const numArr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numArr.length; i++) {
    s = s.replaceAll(numArr[i], i);
  }
  return Number(s);
}
// 반만 맞다고 한다... 아하 replaceAll 로 해야되는구나.

// split 으로 나누고 join시 numArr[i] 값으로 이어주기
function solution(s) {
  numArr.forEach((el, i) => {
    s = s.split(el).join(i);
  });
  return Number(s);
}

// 정규표현식
function solution(s) {
  s = s.replace(/zero/g, "0");
  s = s.replace(/one/g, "1");
  s = s.replace(/two/g, "2");
  s = s.replace(/three/g, "3");
  s = s.replace(/four/g, "4");
  s = s.replace(/five/g, "5");
  s = s.replace(/six/g, "6");
  s = s.replace(/seven/g, "7");
  s = s.replace(/eight/g, "8");
  s = s.replace(/nine/g, "9");
  return Number(s);
}

// 정규표현식을 반복문으로 사용하는 법 / new RegExp
function solution(s) {
  for (let i = 0; i < numArr.length; i++) {
    // 찾으려는 인자, 옵션
    const regExp = new RegExp(numArr[i], "g");
    s = s.replace(regExp, i);
  }

  return Number(s);
}
