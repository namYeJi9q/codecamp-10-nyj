// 041. 조건문 실전 적용 - 점수에 따른 등급
function grade(score) {
  if (100 < score || 0 > score) {
    return "잘못된 점수입니다";
  } else if (score <= 59) {
    return "F";
  } else if (score <= 69) {
    return "D";
  } else if (score <= 79) {
    return "C";
  } else if (score <= 89) {
    return "B";
  } else if (score <= 100) {
    return "A";
  }
}

grade(105); // "잘못된 점수입니다"
grade(-10); // "잘못된 점수입니다"
grade(97); // "A"
grade(86); // "B"
grade(75); // "C"
grade(66); // "D"
grade(52); // "F"

// 043. 마이페이지
const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

const MySHOppingList = () => {
  let count = 0;
  let price = 0;
  let grade = 0;

  for (let obj in myShopping) {
    if (myShopping[obj].category === "의류") {
      count += 1;
      price += myShopping[obj].price;
    }
  }

  if (count <= 2) {
    grade = "Bronze";
  } else if (count <= 4) {
    grade = "Silver";
  } else if (count >= 5) {
    grade = "Gold";
  }

  return `의류를 구매한 횟수는 총 ${count}회 금액은 ${price}원이며 등급은 ${grade}입니다.`;
};
