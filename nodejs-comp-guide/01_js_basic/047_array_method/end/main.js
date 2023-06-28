// POINT 配列のmap、filterメソッドの使い方
const arry = [10, 20, 30, 40];
const newArry = [];

for(let i = 0; i < arry.length; i++) {
  const val = arry[i] * 2;
  if(val > 50) {
    newArry.push(arry[i] * 2)
  }
}

// NewArryの中身がarryの配列の中身が2倍となっている
console.log(newArry);

// 
const newArry2 = arry.map(val => val * 2);
console.log(newArry2)
const newArry3 = newArry2.filter(val => val > 50);
console.log(newArry3)

// 上記のソースを省略してチェーンとして作成した省略形
const newArry4 = arry.map(val => val * 2).filter(val => val > 50);
console.log(newArry4)