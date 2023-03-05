let obj = {};
function numStrings (num, text){
for(let i = 0; i<=num; i++){
obj[text + i] = `${text}${i}`;
}
return obj;
}

numStrings(3, "dog")
console.log(obj);


let summEven = 0;
let summOdd = 0;
function evenNumbers(num){
    for(let i =0; i<num.length; i++){
    if(num[i] % 2 === 0){
    summEven += num[i];
    } 

    }
}

function oddNumbers(num){
    for(let i =0; i<num.length; i++){
    if(num[i] % 2 !== 0){
    summOdd += num[i];
    } 

    }
}
function maxSummValue(number1, number2){
if(number1 > number2){
console.log(number1);
}else{
    console.log(number2);
}
};

let massive = [2, 4, 5, 6, 1, 7];
evenNumbers(massive);
oddNumbers(massive)
maxSummValue(summEven, summOdd)


function degreesF(numb1){
console.log(9/5*numb1 +32);
}
degreesF(3);


const justMassive =[2, 7, 9, 17, 3, 21, 1]

function maxValue(number){
let maxNumb = number[0];
for(let i = 0; i<number.length; i++){
if(number[i]>maxNumb){
maxNumb = number[i];
}
}
console.log(maxNumb);
}

maxValue(justMassive)

function minValue(number){
    let minNumb = number[0];
    for(let i = 0; i<number.length; i++){
    if(number[i]<minNumb){
    minNumb = number[i];
    }
    }
    console.log(minNumb);
    }

    minValue(justMassive);