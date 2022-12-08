// 시저 암호
// 알파벳을 변수 1개로
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백일 경우
      answer += " ";
    } else {
      let index = alphabet.indexOf(s[i]);
      const word =
        index > 25
          ? alphabet.slice(26, alphabet.length)
          : alphabet.slice(0, 26);
      index = word.indexOf(s[i]) + n;

      if (index >= 26) {
        index -= 26;
      }

      answer += word[index];
    }
  }

  return answer;
}

// 알파벳을 변수 2개로
const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자 알파벳만 저장

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백일 경우
      answer += " ";
    } else {
      // 소문자인지를 먼저 검증한 후
      // 소문자가 맞다면, 소문자 리스트를 저장
      // 소문자가 아니라면, 대문자 리스트를 저장
      const word = lower.includes(s[i]) ? lower : upper;
      let index = word.indexOf(s[i]) + n;

      if (index >= 26) {
        index -= 26;
      }

      answer += word[index];
    }
  }
  return answer;
}
// 유니코드
function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue; // 반복문 뛰어넘기
    }
    // charCodeAt()
    // 대문자 (65-90)
    // 소문자 (97-122)
    let code = s[i].charCodeAt() + n;
    console.log(s[i], code, String.fromCharCode(code));
    // String.fromCharCode()
    if (code > 122 || (code > 90 && code - n < 97)) {
      code -= 26;
    }
    answer += String.fromCharCode(code);
  }
  return answer;
}

// reduce

const lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자만 저장
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자만 저장

function solution(s, n) {
  const answer = s.split("").reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;

    if (idx >= 26) {
      idx -= 26;
    }
    return acc + (cur === " " ? " " : word[idx]);
  }, "");
  return answer;
}
