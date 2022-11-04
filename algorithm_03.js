//  7. 반복문  //
// 023. 숫자 더하기
function sum(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += i;
  }
  return count;
}

sum(5);
sum(3);

// 024. 특정 문자열 세기
function countLetter(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      count += 1;
    }
  }
  return count;
}

countLetter("I am from Korea"); // 2
countLetter("A day without laughter is a day wasted."); // 6

// 025. 문자열 삽입
function makeNumber(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      str += i;
    }
    str += "-" + i;
  }

  return str;
}

makeNumber(5); // 1-2-3-4-5
makeNumber(7); // 1-2-3-4-5-6-7

// 026. 홀수 문자열
function makeOdd(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2) {
      str += i + "";
    }
  }
  return str;
}

makeOdd(5); // "135"
makeOdd(7); // "1357"

// 027. 가장 큰 수 찾기
function bigNum(str) {
  str = str.split("");
  console.log(str);
  console.log(Math.max(...str));
  // let biggest = Number(str[0]);

  // for(let i=1; i<str.length;i++){
  // if(Number(str[i]) > biggest){
  // biggest = Number(str[i])
  // }
  // }

  // return biggest
}

bigNum("12345"); // 5
bigNum("87135"); // 8
