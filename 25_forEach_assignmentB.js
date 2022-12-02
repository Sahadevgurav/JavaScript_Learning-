const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`-------1-Log the array element with it’s index using forEach( ) with arrow function-------`);
arrayNumbers.forEach((element,index) => {
    console.log(`Array element:${element} Index:${index}`);
});

console.log(`------2-Find the positive numbers--------`);
arrayNumbers.forEach(element => {
    if (element>=0) {
        console.log(`${element}`);
    }
});

console.log(`-------3-Find the negative numbers---------`);
arrayNumbers.forEach(element => {
    if (element<0) {
        console.log(`${element}`);
    }
});

console.log(`-------4-Find the even numbers-------`);
arrayNumbers.forEach(element => {
    if (element%2==0) {
        console.log(`${element}`);
    }
});

console.log(`--------5-Find the sum of all elements from array_numbers-----------`);
let sum=arrayNumbers.reduce((value,runningTotal)=>value+runningTotal);
console.log(sum);

console.log(`-------6-Log the only even positioned array value--------`);
let newarray1=arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        console.log(`${element}`);
    }
});

console.log(`-------7-Log the odd positioned array value--------`);
arrayNumbers.forEach((element,index) => {
    if (index%2!=0) {
        console.log(`${element}`);
    }
});