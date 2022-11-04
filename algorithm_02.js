// 4. 데이터 타입  //
// 015. 데이터 타입 변경
let num = 24;
let str;
str = String(num);

// 6. 조건문  //
// 018. 조건문 연습
function boolean(input1, input2) {
  if (input1 || input2) {
    return true;
  } else if (!input1 || !input2) {
    return false;
  }
}

// 019. 홀짝
function evenOdd(num) {
  // if (num === 0) {
  //   return "Zero";
  // } else if (num % 2 === 0) {
  //   return "Even";
  // } else {
  //   return "Odd";
  // }
  if (num === 0) return "Zero";
  return num % 2 ? "Odd" : "Even";
}

// 020. 온도
function temperature(num) {
  if (num <= 18) {
    return "조금 춥네요";
  } else if (num <= 23) {
    return "날씨가 좋네요";
  } else if (num >= 24) {
    return "조금 덥습니다";
  }
}

// 021. 며칠
const monthList = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
function days(month) {
  // if (month === 2) {
  //   return 28;
  // } else if (
  //   month === 1 ||
  //   month === 3 ||
  //   month === 5 ||
  //   month === 7 ||
  //   month === 8 ||
  //   month === 10 ||
  //   month === 12
  // ) {
  //   return 31;
  // } else {
  //   return 30;
  // }
  return monthList[month];
}

// 022. 미니 계산기
function calculator(num1, num2, operator) {
  if (
    operator === "+" ||
    operator === "-" ||
    operator === "/" ||
    operator === "*"
  ) {
    console.log(eval(num1 + operator + num2));
  } else {
    console.log("올바른 입력이 아닙니다");
  }
}
