const arrayNumbers=[2,3,5,4,6,1];
let newarray=arrayNumbers.filter((element)=>{
     return element>=4;
});
console.log(newarray);

console.log(`-----------Reduce()----------`);
let sum=arrayNumbers.reduce((value,runningTotal)=>value+runningTotal);
console.log(sum);