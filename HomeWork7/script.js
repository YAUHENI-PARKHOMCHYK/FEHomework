//Задача №1
var arr = {
  'ru':['голубой', 'красный', 'зеленый'],
  'en':['blue', 'red', 'green'],
};
console.log(arr.ru[0]);

//Задача №2
const object =[
{name: "Коля",
cash: 200},
{name: "Вася",
cash: 300},
{name: "Петя", 
 cash: 400}];

for(let i=0; i<object.length; i++){
console.log(`${object[i].name}- зарплата ${object[i].cash} долларов.`)
}

//Задача №3
const obj ={
js:['jQuery', 'Angular'], 
php: 'hello', 
css: 'world'}
console.log(obj.js[0])

//Задача №4

let array = {
'ru':["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
'en':["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};
// console.log(`${array.ru[0]} ${array.en[2]}`)

console.log(array.ru[0], array.en[2])

//Задача №5

const weeksDays ={
первый:"Понедельник",
второй:"Вторник",
третий:"Среда",
четвертый:"Четверг",
пятый:"Пятница",
шестой:"Суббота",
седьмой:"Воскресенье"    
};

console.log(weeksDays.четвертый);
//от себя еще добавил вариант с деструкторизацией
const {четвертый}=weeksDays;
console.log(четвертый)