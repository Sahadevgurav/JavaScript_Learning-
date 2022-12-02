const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(array_roll_numbers);
console.log(`-----------------Q1-Reverse the array----------`);
array_roll_numbers.reverse();
console.log(array_roll_numbers);

array_roll_numbers.sort();
// console.log(array_roll_numbers);
console.log(`-----------------Q3-Sort the array in ascending order----------`);
array_roll_numbers.sort((a,b)=>{
   return (a>b)?1:-1;
});
console.log(array_roll_numbers);

console.log(`-----------------Q4-Sort the array in descending order----------`);
array_roll_numbers.sort((a,b)=>{
    return (a<b)?1:-1;
 });
 console.log(array_roll_numbers);
console.log(`------------------Q5-------------------`);
let sortarray=array_roll_numbers.sort((a,b)=>{
   return (a>b)?1:-1;
});
sortarray.reverse();
console.log(sortarray);

 console.log(`---------------Q6-Greatest Number From array-------------`);
 array_roll_numbers.sort((a,b,c)=>{
    return (a<b)?1:-1;
 });
 console.log(array_roll_numbers[0]);

 console.log(`---------------Q7-e smallest number from the array------------------`);
 let samllestnoArray=array_roll_numbers.sort((a,b,c)=>{
   return (a>b)?1:-1;
});
console.log(samllestnoArray[0]);

console.log(`---------------Q8-Remove duplicates from array-------------------`);
let newarray=[...new Set(array_roll_numbers)];
console.log(newarray);
