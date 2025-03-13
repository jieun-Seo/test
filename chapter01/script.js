function outer(name) {
  return function inner() {
    console.log(name);
  };
}

let f1 = outer('홍길동');
let f2 = outer('심청이');

f1();
f2();

function processArray(arr) {
  return arr.filter((num) => num > 0).map((num) => num * 2);
}
