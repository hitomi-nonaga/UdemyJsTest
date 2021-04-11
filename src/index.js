/**
 * const,letなどの変数宣言
 */
var val1 = "var変数";
console.log(val1);
// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);
// var変数は再宣言可能
var val1 = "var変数は再宣言可能";
console.log(val1);

let val2 = "let変数";
console.log(val2);
// let変数は上書き可能
val2 = "let変数を上書き";
console.log(val2);
// let変数は再宣言不可
//let val2 = "let変数を再宣言";

const val3 = "const変数";
console.log(val3);
// const変数は上書き不可;
//val3 = "const変数を上書き";
// const変数は再宣言不可
//let val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能;
const val4 = {
  name: "test",
  age: 29
};
val4.name = "jak";
val4.address = "hiroshima";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "test";
const age = "29";
// 「私の名前はtestです。年齢は29です。」
// 従来
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);
// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です。"));
// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です。"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  name: "テスト",
  age: 28
};
const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(message3);

const { name1, age1 } = myProfile;
const message4 = `名前は${name1}です。年齢は${age1}です。`;
console.log(message4);

// 配列の場合
const myProfile1 = ["test", "29"];
const message5 = `名前は${myProfile1[0]}です。年齢は${myProfile1[1]}です。`;
console.log(message5);

const [name2, age2] = myProfile1;
const message6 = `名前は${name2}です。年齢は${age2}です。`;
console.log(message6);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = `test`) => console.log(`こんにちは！${name}さん。`);
sayHello(`aaaa`);

/**
 * スプレッド構文...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// // スプレッド構文でコピーすると元の値はそのままなのでOK
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
console.log(arr8);
// スプレッド構文使わずに＝でコピーすると元の値も変わってしまう！
arr8[0] = 100;
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
//　従来
const nameArr = ["田中", "山田", "test"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(`${i + 1}番目は${nameArr[i]}です。`);
}

// // 今
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

// １行で書くと
nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です。`));

// filterは条件を元に抽出することができる
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

// testの時以外はさんを付ける
const newNameArr = nameArr.map((name) => {
  if (name === "test") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// 条件？　Trueの時：Falseの時
const val6 = 1 < 0 ? `true` : `false`;
console.log(val6);
// // numが数値だったらカンマ入れる。それ以外なら数値入力してください。
const num = 13333;
console.log(num.toLocaleString());
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : `数値を入力してください。`;
console.log(formattedNum);

// 関数リターン部分に三項演算子使う例
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100超えてます。" : `許容範囲内です。`;
};
console.log(checkSum(50, 60));

/**
 * 論理演算子の意味　$$ ||
 */
const flag1 = true;
const flag2 = false;
if (flag1 || flag2) {
  console.log(`1か2はtrueになります。`);
}
if (flag1 && flag2) {
  console.log(`1も2はtrueになります。`);
}

// ||は左がFalseなら右を返す　JSはnullをFalseとみなす
const num3 = 100;
const fee = num3 || "金額未設定です。";
console.log(fee);

// &&は左がTrueなら右を返す
const num4 = null;
const fee2 = num4 && "金額設定されました。";
console.log(fee2);
