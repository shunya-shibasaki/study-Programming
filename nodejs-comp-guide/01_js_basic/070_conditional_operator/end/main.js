// POINT 三項演算子（ ? : ）の使い方

const a = 0;
// if文の省略形　条件式 ? true : false;
let resultA = a ? 10 : -10;

// if(a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }

console.log(resultA);

function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());
