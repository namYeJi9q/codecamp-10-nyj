// 행열의 덧셈 2차원배열, 2중배열 문제
// 내 풀이
function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      let answer = arr1[i][j] + arr2[i][j];
      console.log(answer);
    }
  }
}

// 멘토님 풀이

// 2중 for문
function solution(arr1, arr2) {
  const answer = [];
  // 1. arr1 배열의 전체 배열들을 가져오고
  for (let i = 0; i < arr1.length; i++) {
    // 2. arr1배열에서 가져온 배열들의 안쪽데이터를 조회
    for (let j = 0; j < arr1[i].length; j++) {
      // 3. i와 j 인덱스 값으로 각각의 위치에 해당되는 데이터들의 함
      const sum = arr1[i][j] + arr2[i][j];
      // 4. i에 해달되는 인덱스로 접근했을 때 배열이 없을 때는 빈 배열을 생성
      if (answer[i] === undefined) answer[i] = [];
      // 5. i와 j인덱스 값으로 해당 위치에 데이터를 삽입
      answer[i][j] = sum;
    }
  }
  return answer;
}

// map사용
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, j) => {
      return num2 + arr2[i][j];
    });
  });
  return answer;
}
