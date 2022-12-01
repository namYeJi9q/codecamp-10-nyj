// 폰켓몬 문제
function solution(nums) {
  // 총 폰켓몬의 수
  const poncatmon = nums.length / 2;
  // 중복을 제거한 폰켓몬의 수
  const set = new Set(nums).size;

  return poncatmon <= set ? poncatmon : set;
}
// 문제 풀이 : 폰켓몬의 수의 N/2 마리만 가져가는데 그 중 최대로 들어가는 폰켓몬 종류의 개수를 구하라 했다.
// 일단 가져갈 폰켓몬의 수는 nums 중 1/2 이고, 중복을 제거한 수가 가져갈 폰켓몬 수보다 많다면 그냥 poncatmon을 리턴하고,
// 그렇지 않다면 중복되는 폰켓몬의 종류수를 리턴해준다.
// 너무 알고리즘 적 사고를 못한게 아쉽다.

// 멘토님 for문으로 풀이
function solution(nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (
      nums.length / 2 !== answer.length &&
      answer.includes(nums[i]) === false
    ) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}
