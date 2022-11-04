//  1. 변수와 상수  //
// 001. 선언과 할당
let name = "남예지";

// 002. 재할당
name = "철수";

//  2. 배열  //
// 003. 배열의 선언과 할당
const fruits = [];
// push or index 이용
// fruits.push("사과")
// fruits.push("바나나")
// fruits.push("파인애플")
fruits[0] = "사과";
fruits[1] = "바나나";
fruits[2] = "파인애플";

//내 답안// fruits = ["사과", "바나나", "파인애플"];

// 004. 배열의 기능
//내 답안//// let newFruits = [];
///내 답안/// newFruits.push(fruits.pop());

//내 답안// let newFruits = [];
//내 답안// newFruits.push(fruits[fruits.length - 1]);

// 005. 배열의 기능
let students = ["철수", "영희", "훈이", "짱구", "유리"];
let newArr = students.slice(0, 3);

// 006. 배열의 기능
fruits = ["사과", "바나나"];
fruits = fruits.map((n) => "맛있는 " + n);

// 007. 문자열 배열
const number = "01012345678";
// const fs = number.slice(0,3);
// const sd = number.slice(3,7);
// const td = number.slice(7,11);
// const list = [fd, sd, td];

//  3. 객체  //
// 008. 객체의 선언과 할당
const student = {};
student.name = "철수";

// 009. 객체의 키&값 추가
const student = {
  name: "철수",
  age: 8,
};
const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

student.school = school;

// 010. 객체의 키&값 삭제
let student = {
  name: "철수",
  drink: "사이다",
};

delete student.drink;

// 011. 객체와 배열의 값
const classmates = [
  {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  },
  {
    name: "영희",
    age: 8,
    school: "토끼초등학교",
  },
  {
    name: "짱구",
    age: 8,
    school: "다람쥐초등학교",
  },
];

classmates[1].school = "다람쥐초등학교";
