// 2016년
// getDay() 함수를 사용해서 요일을 구하고 리턴해주었습니다.
function solution(a, b) {
  let day = new Date(`2016-${a}-${b}`).getDay();
  return day === 0
    ? "SUN"
    : day === 1
    ? "MON"
    : day === 2
    ? "TUE"
    : day === 3
    ? "WED"
    : day === 4
    ? "THU"
    : day === 5
    ? "FRI"
    : "SAT";
}
// 보다보니 배열로 가져오면 편할 것 같아 배열로 만들어 day의 반환값과 인덱스가 같은 요일을 가져오게 했습니다.
function solution(a, b) {
  const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = new Date(`2016-${a}-${b}`).getDay();
  return dayArr[day];
}

// 알고리즘 적으로 풀러보자
const month = {
  1: 31,
  2: 29,
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

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
function solution(a, b) {
  let answer = 0; // 총 일수를 저장하는 변수

  for (let i = 1; i < a; i++) {
    answer += month[i];
  }
  answer += b - 1;
  const day = week[answer % 7];
  return day;
}

// 위에 식을 reduce로 사용해보기
function solution(a, b) {
  const days = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return acc + (mn !== a ? month[mn] : b - 1);
  }, 0);

  return week[days % 7];
}
