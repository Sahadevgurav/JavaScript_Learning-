const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log('Given Array',array_numbers);
console.log(`-------------------Q1 length of array---------------------`);
console.log(array_numbers.length);
console.log(`-------------------Q2 log first element and last element ---------------------`);
console.log('First element=',array_numbers[0]);
console.log('lsat element=',array_numbers[array_numbers.length-1]);
console.log(`-------------------Q3 log 3rd last element ---------------------`);
console.log('3rd last element=',array_numbers[array_numbers.length-3]);
console.log(`-------------------Q4 log All even no  ---------------------`);
for (let index = 0; index < array_numbers.length; index++) {
    let a=array_numbers[index];
    if (a%2==0) {
        console.log(`${a}`);
    }
}
console.log(`-------------------Q5 log All Odd no  ---------------------`);
for (let index = 0; index < array_numbers.length; index++) {
    let a=array_numbers[index];
    if (a%2!=0) {
        console.log(`${a}`);
    }
}

console.log(`-------------------Q6 log All even Position no  ---------------------`);
for (let index = 0; index < array_numbers.length; index++) {
    
    if (index%2==0) {
        let a=array_numbers[index];
        console.log(`${a}`);
    }
}

console.log(`-------------------Q7 log All Odd Position no  ---------------------`);
for (let index = 0; index < array_numbers.length; index++) {
    if (index%2!=0) {
        let a=array_numbers[index];
        console.log(`${a}`);
    }
}

console.log(`-------------------Q8 sum of all element  ---------------------`);
var sum=0;
for (let index = 0; index < array_numbers.length; index++) {
    let a=array_numbers[index];
        sum=sum+a;
}
console.log(sum);

console.log(`-------------------Q9 numbers which are multiple of 5  ---------------------`);

for (let index = 0; index < array_numbers.length; index++) {
    let a=array_numbers[index];
       if (a%5==0) {
           console.log(a);
       } 
}
console.log(`-------------------Q10 is 115 available of not in array---------------------`);
let f=array_numbers.includes(115);
console.log(f);

console.log(`-------------------Q11 is 23 available of not in array---------------------`);
let g=array_numbers.includes(23);
console.log(g);