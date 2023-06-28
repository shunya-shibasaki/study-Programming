// POINT 分割代入の使い方

// 分割代入とは、配列やオブジェクトの特定の要素を変数として抽出する方法
// const [ a, , c ] = ["配列1", "配列2", "配列3"];
// console.log(a);
// console.log(c);
// // console.log(arry[2]);

// プロパティ名と一致する必要がある
// const { z, x } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(x);
// console.log(z);

// 関数を使用した部品
const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

// 配列は順番に注意する
const fnArr = ([ country, state, city ]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

// objはプロパティ名と一致に注意する
const fnObj = ({ country, state }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  // console.log(`city: ${city}`);
};

// fnArr(arr);
fnObj(objAddress);
