/**
 * const,letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);
// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);
// // var変数は再宣言可能
// var val1 = "var変数は再宣言可能";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);
// // let変数は再宣言不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);
// const変数は上書き不可
// val3 = "const変数を上書き";
// // const変数は再宣言不可
// let val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "test",
//   age: 29
// };
// val4.name = "jak";
// val4.address = "hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
