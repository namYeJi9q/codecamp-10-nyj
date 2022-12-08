// 실패율
function solution(N, stages) {
  var answer = [];
  const resultArr = [];

  stages = stages.sort((a, b) => a - b);
  const result = {};
  stages.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });

  for (let i in result) {
    resultArr.push(result[i]);
  }
  resultArr.sort((a, b) => a - b);
  result[0] / stages.length;
  console.log(resultArr);
  return answer;
}

function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const answer = new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i;
      const arr = stages.slice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );
      const fail = arr.length / allUsers;
      allUsers -= arr.length;

      return { stage, fail };
    })
    .sort((a, b) => b.fail - a.fail)
    .map((el) => el.stage);
  return answer;
}

// slice 메서드
const arr = [1, 2, 3, 1].sort((a, b) => a - b);
arr.slice(arr.indexOf(1), arr.lastIndexOf(1) + 1);
// 내가 원하는 값만 담은 배열을 가져올 수 있다.
