// 3진법 뒤집기
function solution(n) {
  // toString은 진법을 바꿔주기도 한다. (10진법 -> N진법)
  n = n.toString(3);

  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  // parseInt(s, 10)  첫번째 인자를 2번째 인자 진법으로 바꿔줌  (N진법 -> 10진법)
  return parseInt(reverse, 3);
}

// 3진법 뒤집기 메소드
function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}

// 이진 변환 반복하기
function solution(s) {
  let count = 0; //변환 횟수
  let remove = 0; // 제거된 0의 개수
  // return [count, remove]

  // 1이라면 반복문을 종료, 아니라면 반복문을 계속 실행
  while (s !== "1") {
    count++;
    // 1, 0을 제거
    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i];
    }
    s = temp.length; // 2. 0을 제거한 후의 길이
    s = s.toString(2); // 3. 이진 변환
  }

  return [count, remove];
}

// 재귀함수 사용해서 이진변환 반복하기
function solution(s) {
  let [count, remove] = [0, 0];

  function recursion(s) {
    if (s === "1") return [count, remove];

    // 이진변환이 반복된 횟수
    count++;
    s = s.split("").filter((num) => {
      if (num === "0") remove++;
      return num !== "0";
    }).length;
    return recursion(s.toString(2));
  }
  return recursion(s);
}
