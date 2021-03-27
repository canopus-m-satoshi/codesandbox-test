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
const sayHelllo = (name = "Will") => console.log(`Hello, ${name}!`);

sayHelllo("Taro");
sayHelllo();
