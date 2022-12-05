// 피보나치 수열..
function solution(n) {
  var answer = 0;
  const fibonacci = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
  }
  answer = fibonacci[n] % 1234567;
  return answer;
}

// 효율성문제에서 막힘. push할때 %1234567을 해주면 된다!!
// fibonacci.push((fibonacci[i]+fibonacci[i+1])%1234567)

return answer;
// 멘토님 풀이

function solution(n) {
    let prev = 0 // 피보나치의 0번째 수 = F(n-2)
    let next = 1 // 피보나치의 1번째 수 = F(m-1)
    let sum = 1 // F(2) = F(0) + F(1)
    const answer = []
    for(let i=2; i<=n; i++){
        sum = (prev + next) % 1234567
        answer.push(sum)
        prev = next
        next = sum
    }
    return answer[n-2]
}


// // e+ 가 나온다면 사용할 수 있는 정수 범위를 넘었다는 뜻 
// // 사용 가능한 안전한 수를 알려주는 메서드
// Number.isSafeInteger(a)
// 큰 수는 연산을 먼저 하고 푸시를 해주는게 효율성면에서 좋다. 

// reduce 메소드 이용
function solution(n) {
  let prev = 0; // 0번째 피보나치 수
  const answer = new Array(n-1).fill(1).reduce((acc) => {
      const sum = (prev + acc) % 1234567;
      prev = acc;
      return sum
      
  }, 1)
  return answer;
}

// 

