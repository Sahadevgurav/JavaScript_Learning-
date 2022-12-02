let variable_name="";
let person={
     fullName:"Sachin Tendulakar",
     age:47,
     isMarriad:true,
    address:{
        street:"AS Club",
        pinCode:12345,
        city:"Pune",
        state:"MH"
    },
    eat:function(){
        console.log("I am vegetarian");
    },
    walk:function(){
        console.log("I do walk everyday");
    },
    details:function(){
        console.log(this.fullName);
    }
}
console.log('---------------- in operator -----------------');
let isAvailable="fullName" in person;
console.log(isAvailable);
person.details();
console.log(typeof(person));
console.log(person);
console.log(person["age"]);
person.pinCode=12344;
person.age=60;
person.address.landmark="Near Main Road";
delete person.age;
console.table(person);
person.eat();
console.log(Object.values(person));