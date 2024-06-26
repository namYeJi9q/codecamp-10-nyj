/// 1일차
// 문자열을 숫자로 변환
function solution(s) {
  var answer = 0;
  answer = parseInt(s);

  return answer;
}

// 숫자 배열에서 중복 요소 삭제한 배열 반환
// 통과 못한 코드 ( 테스트는 통화했지만 효율성에서 막힘 )
// function solution(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === arr[i+1]){
//           arr.splice(i, 1);
//             i--;
//         }

//     }

//     return arr;
// }

//통과한 풀이.
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 핸드폰 번호 가리기
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

function solution(phone_number) {
  // //원본배열을 해치기때문에 합칠때 join을 해줘야함
  // phone_number.split("").splice(1, 4);
  // //문자열을 자를땐 슬라이스가 좋다.
  // phone_number.slice(1, -4);
  answer = answer.padStart(phone_number.length - 4, "*");
  answer += answer.slice(phone_number.length - 4);
}
