const arrayNumbers=[2,3,5,4,6,1];

const arrayOfNames=["Anil","Santanu","Nutan","Suyog","DD","Pradnya"];
arrayOfNames.sort();
console.log(arrayOfNames);
console.log(`---------Sorting array element in ascending order-------`);
const arrayNumbers1=[22,33,50,100,600,77,455];
arrayNumbers1.sort((first,second)=>{
    return (first>second)?1:-1;
});
console.log(arrayNumbers1);


