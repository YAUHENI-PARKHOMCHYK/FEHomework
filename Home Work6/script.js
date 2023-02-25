const array = [ 5, -25, 3, -6, 37, 8, 10, -4];
let multiplicate = array[0];
for(let i = 1; i <array.length; i++){
multiplicate *= array[i]
};
console.log(multiplicate);







let box = 0;
let summ = 0;

for( let i = 0; i<array.length; i++){
box = array[i] ** 2;
summ = summ + box;
}
console.log(summ);





let maxValue = array[0];
for(let i =1; i<array.length; i++)
{
if(maxValue<array[i]){
maxValue = array[i]
}
};
console.log(maxValue);





let minValue = array[0];
for(let i =1; i<array.length; i++)
{
if(minValue>array[i]){
minValue = array[i]
}
};
console.log(minValue);





let summArray = 0;
for(let i = 0; i<array.length; i++){
summArray = summArray + array[i];
}

console.log(summArray / array.length);




let positiveValue = 0;

for( let i = 0; i<array.length; i++)
{
if(array[i]>0){
positiveValue++
}
};
console.log(positiveValue);