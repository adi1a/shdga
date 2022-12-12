// let age = prompt('Тебе сколько лет');

// if (age > 1){
//     alert('Число больше 1')
// }else if (age < 1){
//     alert('Число меньше 1')
// }else {
//     alert('Число равно 1')
// }


// const x = 3;
// const y= 3;

// if (x > 3) {
//     console.log('x > 2');
// }else {
//     console.log('x is less than 3');
// }

// const name = 'Adifl';

// if (name == 'Adil'){
//     console.log('name is Isa')
// }else {
//     console.log('not Adil')
// }

// const banana = 'banana';
// const apple = 'apple';

// if (banana == 'banana'){
//     console.log('banana is banana')
// }else {
//     console.log('is not' )
// }

// const x = 2;
// const y = 5;
// if (x  != y){
//     console.log('x != y');
// }else {
//     console.log('x == y');
// }


// const personOne = {
//     name: 'Adil',
//     age: 24,
// } 

// const personTwo = {
//     name:  'John',
//     age: 34,
// }

// if (personOne.age == personTwo.age){
//     console.log('Они ровесники')
// }else{
//     console.log('Не ровесники')
//     console.log(personOne.name + ' ' + personOne.age)
//     console.log(personTwo.name + ' ' + personTwo.age)
// }


// const fruit = 'apple';
// const fruiTwo = 'apple';

// const numOne = 1;
// const numTwo = '1';

// if (numOne === numTwo){
//     console.log('Равно')
// }


// const button = document.querySelector('button');

// function changeButtonColor() {
//     alert('Не нажимай');
// }

// button.addEventListener('click', function(){
//     changeButtonColor()
// });


// const arr = ['apple','banana','orange'];
// const arrLength = arr.length;

// console.log(arrLength);

// if (arr.length >= 3){ 
//     alert('Ok')
// }else{
//     alert('Меньше трех')
// }


// if (arr.length ){
//     alert('не пусто')
// }else{
//     alert('пусто')
// }

// const numOne = 12;
// const numTwo = 23;
// const numThree =21;
// const numFour = 5;

// console.log(numOne * numTwo * numThree * numFour);
// console.log (numTwo / numFour);
// console.log (numThree + numFour * numTwo);
// console.log (numOne + numTwo * numThree / 2);


// const personOne = {
//     name: 'John',
//     age: 21,
//     hobby: 'chess',
// }
// const personTwo = {
//     name: 'Adil',
//     age: 21,
//     hobby: 'football',
// }

// if (personOne.age == personTwo.age) {
//     console.log ('Ровесники')
// }else{
//     console.log ('Не ровесники')
// }

// if (personOne.hobby == personTwo.hobby) {
//     console.log ('Интересы сходятся')
// }else {
//     console.log ('Интересы разные')
// }

// const x = 1;
// const y = 2;
// let result = 0;
// function plus(x, y){
//     console.log ('result', x + y);
// }


// const some = plus(23 , 24);




// let userName = prompt('Ваше имя:')
// function helloName (userName) {
//     console.log ('Hello' + ' ' + userName);
// }
// helloName(userName);


// const myName  = 'John';
// function helloUserName (myName) {
//     console.log ('name' + myName);
// }


// const isTrue = true;
// const isFalse = 1;

// if (isTrue === isFalse) {
//     console.log('is Ok')
// }else {
//     console.log('not Ok')
// }


// const x = 1;
// const y = 2;

// function compateNumbers(x, y){
//     if(x >= y){
//         console.log('OK');
//     }else{
//         console.log('not OK');
//     }
// }

// compateNumbers(25, 12);


// const nameOne = 'John';
// const nameTwo = 'John';

// const numOne = 35;
// const numTwo = 12;

// function checkName(nameOne, nameTwo){
//     if (nameOne == nameTwo){
//         console.log('identical name');
//     }else{
//         console.log('not the same name');
//     }
// }

// function checkNumber(numOne, numTwo){
//     if (numOne == numTwo){
//         console.log('identical numbers');
//     }else{
//         console.log('not the same numbers');
//     }
// }

// checkName(nameOne, nameTwo);
// checkNumber(numOne, numTwo);


// let arr = [3,5,6];
// let result = 0;
// function test(arr){
//     result = arr[1] + arr[2]
//     console.log(result)
// }
// test();


let numOne= [12, 52];
const numTwo= [2, 6];
const numThree= [6, 3];

function test(numOne){
    if (numOne[1] < numOne[2]){
        console.log('Меньше первое число')
    }else if (numOne[1] > numOne[2]){
        console.log('Меньше второе второе')
    }else{
        console.log('Ошибка!')
    }
}

test(numOne);