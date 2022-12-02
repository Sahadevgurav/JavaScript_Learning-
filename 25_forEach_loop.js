

let show=(n1,test)=>{
    console.log("hi");
}
show(10,"test");

// const arrayNumbers=[10,20,30,40,20,10];
// arrayNumbers.forEach(function (currentValue, index, array) {
//     console.log(currentValue, index, array);
// });



const arrayNumbers=[10,20,30,40,20,10];
arrayNumbers.forEach( (currentValue)=> {
    console.log(currentValue);
});

console.log(`--------------Positive no log----------------`);
const arrayNumbers1=[10,-20,30,40,20,-10];
arrayNumbers1.forEach( (currentValue,index)=> {
    if(currentValue<0){
    console.log(currentValue,index);
    }
});

console.log(`---------Traversing set using ForEach()-----------`);
const setOfNumbers=new Set(arrayNumbers)
setOfNumbers.forEach((value)=>{
    console.log(value);
});

console.log(`--------Traversing Map using forEach()---------`);
let map = new Map();
map.set(22,"Sachin");
map.set(11,"Dravid");
map.set(33,"Gangully");
map.set(77,"Dravid");

map.forEach((key,value)=>{
     console.log(key,value);
});

console.log(`----------Travers over array of Object using forEach()-----------`);
class Person {
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person("Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person("Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person("Billgates", "USA", 67, "Male");

const array = [ personAnil, personAnita, personBill];
array.forEach((person)=>{
   console.log(person.fullName);
});


