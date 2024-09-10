//Section5
//Q1 変数の定義と代入
let nickname = "ごっしー";
let age = 28;

console.log(`私のニックネームは${nickname}です。年齢は${age}歳です。`);

//Q2 配列の定義と代入
const languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];

const favoriteLanguage = languages[0];
const nextLanguage = languages[3];

console.log(`私の好きな言語は${favoriteLanguage}です。次は${nextLanguage}を勉強してみたいです。`);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

//Q5
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

let totalAge = 0;
for (let player of playerList) {
  totalAge += player.age;
}

let averageAge = totalAge / playerList.length;

console.log(averageAge);

//Q6
function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
};

sayWorld();

//Q7
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello!');
};

user.sayHello();

//Q8
let calc = {};

calc.add = function(x, y) {
    console.log(x + y);
};

calc.subtract = function(x, y) {
    console.log(x - y);
};

calc.multiply = function(x, y) {
    console.log(x * y);
};

calc.divide = function(x, y) {
    console.log(x / y);
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(25, 5);

//Q9
function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);
console.log("5 を 3 で割った余りは " + result + " です。");

//Q10　section3
//スコープとは簡単に言うと、変数の有効範囲のことです。ある関数の中で定義した変数というのは
//その関数の中からしか参照できません。どこからでも参照できる変数のことをグローバル変数と言い
//関数内でしか参照できない変数のことをローカル変数と言います。


//section6
//Q1
let random = Math.floor(Math.random() * 10);
console.log('random => ', random);

//Q2
setTimeout(function() {
  console.log("Hello World!");
}, 3000);

//Q3
let num = 10;

if (num > 0) {
    console.log("num is greater than 0");
} else if (num < 0) {
    console.log("num is less than 0");
} else {
    console.log("num is 0");
}

//Q4
let numbers = [];

for (let i = 0; i <= 99; i++) {
    numbers.push(i);
}

console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

mixed.forEach(element => {

    if (typeof element === 'number') {
        if (element % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd');
        }
    } else {
        console.log('not number');
    }
});

/*
追加課題08/26
1
テンプレートリテラルと言い、バッククォートを使います。ドル中括弧を
${...}使って、変数や式を文字列の中に入れることができる。改行もできる。

2
以下のように変数に入っている現在の値に対して追加で計算する式が例として挙げられる。 section2
let number = 5;
number = number + 3;
console.log(number);

3
関数の実行方法は関数名と();で実行される。また実行の際は引数がなくてもよい。
回答Q6を見るとsayHello();、sayWorld();は共に引数がないが、実行するとそれぞれ定義した文字列はコンソールに表示される。

function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
};

sayWorld();
*/