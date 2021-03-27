/**
 * const let等の変数宣言
 *
 */

// var val1 = "var various";
// console.log(val1);

// const val5 = ["dog", "cat"];
// val5.push("monkey");
// val5.push("aaa");
// console.log(val5);

// arrow function

// const plus = (num1, num2) => num1 + num2;

// console.log(plus(1, 20));

// 分割代入

// const myProfile = {
//   name: "Sato",
//   age: 27
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;

// console.log(message1);

// // 分割代入を設定
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// デフォルト値 引数など
// const sayHelllo = (name = "Will") => console.log(`Hello, ${name}!`);

// sayHelllo("Taro");
// sayHelllo();

/**
 * スプレット構文
 */

// 配列の展開
// const arry1 = [1, 2];
// // console.log(arry1);
// // console.log(...arry1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arry1[0], arry1[1]);
// sumFunc(...arry1);

// まとめる
// const arry2 = [1, 2, 3, 4, 5];
// const [num1, ...arry3] = arry2;
// console.log(num1);
// console.log(arry3);

// 配列のコピーや結合
// const arry4 = [10, 20];
// const arry5 = [30, 40];

// const arry6 = [...arry4];
// console.log(arry6); //  [10, 20]

// const arry7 = [...arry4, ...arry5];
// console.log(arry7); //   [10, 20, 30, 40]

/**
 * mapやfilterを使った配列の処理
 */

const nameArry1 = ["Mike", "Will", "Dustin", "Lucas"];

// // map() 配列に対して使用できる関数
// const nameArry2 = nameArry1.map((name) => {
//   return name;
// });

// console.log(nameArry2); // ["Mike", "Will", "Dustin", "Lucas"]

// nameArry1.map((name) => console.log(name)); //Mike Will Dustin Lucas

// filter() ある条件に一致した値のみ返す関数
// const numArry1 = [1, 2, 3, 4, 5];
// const newNumArry = numArry1.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArry); //  [1, 3, 5]

// ~は何番目です　としたい時
// nameArry1.map((name, index) => console.log(`${name}は${index + 1}番目です`)); //Mikeは1番目です Willは2番目です Dustinは3番目です Lucasは4番目です

const newNameArry = nameArry1.map((name) => {
  if (name === "Mike") {
    return name;
  } else {
    return `Mr ${name}`;
  }
});

console.log(newNameArry); // ["Mike", "Mr Will", "Mr Dustin", "Mr Lucas"]
