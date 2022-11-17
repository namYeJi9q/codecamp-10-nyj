// 두 개 뽑아서 더하기
// for문 2개와 forEach 사용해서 중복 없는 배열 만들기
function solution(numbers) {
  var answer = [];
  const elArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      elArr.push(numbers[i] + numbers[j]);
    }
  }
  elArr.forEach((el) => {
    if (!answer.includes(el)) answer.push(el);
  });
  return answer.sort((a, b) => a - b);
}

// new Set 사용해서 중복 없애기
function solution(numbers) {
  const elArr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      elArr.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(elArr)].sort((a, b) => a - b);
}

// forEach slice 사용하기
function solution(numbers) {
  const elArr = new Set([]);

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      const sum = num1 + num2;
      elArr.add(sum);
    });
  });
  return Array.from(elArr).sort((a, b) => a - b);
}
