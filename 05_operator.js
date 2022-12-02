console.log(10 + 10);
console.log(10 + 100.23);

var num1 = 200;
var num2 = 400;
var result = num1 + num2;
console.log(`Result is : ${result}`);

var num1 = 10 ;
var num2 = 4 ;
var result = num1 / num2;    
console.log(`Result is : ${result}`);

var num1 = 100;
var num2 =50;
var result= num1 % num2
console.log(`Result is : ${result}`); 


console.log("=========% Module Operator========");
console.log(10%2);


console.log("==========++increment========");
// var incr = num1 + 1;
var num1 = 10;
var num2 =4;
var incr =++ num1;
var decr =-- num2;
console.log(`${incr} ${decr}`);


var num1 = 100;
var num2 = 50; 
num1+=num2;// num1 = num1 + num2;
console.log(`Compound Addition operator : += ====> ${num1}`);


console.log(`=======Comparison operator======`);
var num1 = 100;
var num2 = 50; 

console.log("num1<num2 ===> ",   num1<num2);
console.log("num1>num2 ===> ",  num1>num2);
console.log("num1!=num2 ====> ", num1!=num2);

var num3 = 50; 
console.log("num2<num3) ===> ",  num2<num3);
console.log("num2<=num3) ===> ",  num2<=num3);
console.log("num2>num3=====> ", num2>num3);
console.log("num2>=num3=====> ", num2>=num3);

var num2 = 50; 
var num3 = "50"; 
console.log(`******* == operator ************`);
var result = num2 == num3; // 50 == 50

console.log("num2==num3=====> ", result);

console.log("num2===num3=====> ", num2===num3);

