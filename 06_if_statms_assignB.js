console.log(`--------------Q1--------------`);
function even(value){
    if(value%2==0)
    {
        console.log(`${value} No is "EVEN"`);
    }
    else{
        console.log(`${value} No is "ODD"`);
    }
}
even(45);
even(70);
even(67);
even(98);

console.log(`--------------Q2--------------`);

function vote(age){
    if(age>=18)
    {
        console.log(`You are eligible for vote`);
    }
    else{
        console.log(`You are not eligible for vote`);
    }
}
vote(18);
vote(20);
vote(17);
vote(40);

console.log(`--------------Q3--------------`);

function more(str){
    var result=str.length;
    if(result>10){
        console.log(`Given String is more than 10 character`);
    }
    else{
        console.log(`Given String is Not more than 10 character`);
    }

}
more("JavaScript-ES6");

console.log(`--------------Q4--------------`);

function start(str1){

    if (str1.startsWith("Java")) {
        console.log(`Given String Start with Java`);
    }
    else{
        console.log(`Given String Not Start with Java`);
    }
}
start("JavaScript Language")