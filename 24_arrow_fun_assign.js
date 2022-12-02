console.log(`---------------Q1------------`);
let simple=()=>console.log("Good Evening, Today is Friday");
simple();

console.log(`---------------Q2------------`);
let multi=(a,b,c)=>{
        console.log(`Multiplication of ${a}, ${b}, ${c} is :${a*b*c}`);
}
multi(5,5,2);
multi(10,2,c=1);


console.log(`---------------Q3------------`);
let add=(a1,a2,a3,a4,a5)=>{
      return  a1+a2+a3+a4+a5;
}
let result=add(100,100,200,349,756);
let result1=add("I am","learning","ES6",'features',"in depth");
console.log(`Concatenation :${result1}`);
console.log(`Addition of 5 Values : ${result}`);

