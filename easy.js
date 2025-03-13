// 문제 1: 기본 프로미스 생성
// 요구사항: 새로운 프로미스를 만들고, setTimeout을 사용하여 2초 후에
// "완료!" 메시지를 resolve하세요.
// then을 사용하여 결과를 출력하세요.
// 출력 결과: (2초 후) "완료!"

const m1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('완료!');
  }, 2000);
});

m1.then((message) => {
  console.log(message);
});

// 문제 2: 프로미스와 에러 처리
// 요구사항: 숫자를 매개변수로 받아서 새로운 프로미스를 반환하는 함수를 만드세요.
// 양수인 경우 resolve로 "(숫자)는 양수입니다" 메시지를 반환하고,
// 음수인 경우 reject로 "(숫자)는 음수입니다" 메시지를 반환하세요.
// then과 catch를 사용하여 결과를 처리하세요.
// 매개변수가 5일때
// 출력 결과: "5는 양수입니다"
function checkNum(num) {
  return new Promise((resolve, reject) => {
    if (num >= 0) resolve(num + '은 양수입니다.');
    else reject(num + '은 음수입니다.');
  });
}

checkNum(5)
  .then((message) => console.log(message))
  .catch((error) => {
    console.log(error);
  });

// 문제 3: 프로미스 체이닝 실습
// 요구사항: 숫자를 매개변수로 받아서 프로미스를 반환하는 함수를 만드세요.
// 매개변수로 받은 숫자를 처리 없이 바로 resolve 하세요.
// then을 3번 연속으로 체이닝하여 다음 작업을 순서대로 수행하세요:
// 1. 입력받은 숫자를 2배로 만들기
// 2. 결과값에 10을 더하기
// 3. "최종 결과: (계산된 값)" 형식으로 출력하기
// 매개변수가 5일때
// 출력 결과: "최종 결과: 20"
function fun1(num) {
  return new Promise((resolve) => resolve(num));
}

fun1(5)
  .then((result) => result * 2)
  .then((result) => result + 10)
  .then((result) => console.log(`최종결과:${result}`));

async function fun2() {
  let result1 = (await fun1(5)) * 2;
  let result2 = (await fun1(result1)) + 10;
  console.log(`최종결과:${result2}`);
}

fun2();
