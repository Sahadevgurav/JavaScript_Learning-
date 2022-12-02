const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];

let newarray=array_numbers.filter((element)=>{
    return element>50;
});
console.log(`---------Q1-----------`);
console.log(`Number which are grater than 50 = ${newarray}`);

console.log(`---------Q2-----------`);
array_numbers.filter((element)=>{
    if (element%2==0) {
        console.log(`Even No :${element}`);
    }
});

console.log(`---------Q3-----------`);
array_numbers.filter((element)=>{
    if (element%2!=0) {
        console.log(`Odd No :${element}`);
    }
});

console.log(`---------Q4-Number which is multiple of 5----------`);

array_numbers.filter((element)=>{
    if (element%5==0) {
        console.log(`${element}`);
    }
});

console.log(`---------Q5-Number which are between 20-50 ----------`);
array_numbers.filter((element)=>{
     if (element>=20 && element<=50) {
        console.log(element);
     }
});


console.log(`--------------------Reduce-------------------`);

const array_numbers1=[20,11,40,25,37,49,9,90,60,2,19];
console.log(array_numbers1);
console.log(`---------------Q1-Sum of all Numbers---------------`);
let sum=array_numbers1.reduce((runningTotal,value)=>{
    return value+runningTotal;

});
 console.log(sum);

console.log(`---------------Q2-Sum of all even NO---------------`);
let evenfilter=array_numbers1.filter((element)=>{
    return element%2==0;
});

let sum1=evenfilter.reduce((value,runningTotal)=>value+runningTotal);
console.log(sum1);
