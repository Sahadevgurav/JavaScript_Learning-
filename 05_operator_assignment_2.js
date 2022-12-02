console.log("-----------Q1-----------");
var greatstTwovalue = function(arg1,arg2){
    var result = arg1>arg2?arg1:arg2;
    console.log(`Greatest value is:${result}`);
}
greatstTwovalue(10,-10);
greatstTwovalue(800,899);

console.log("--------------Q2---------");
var evenoddnumber = function (arg3){
    var numberresult =arg3%2==0?true:false;
    console.log(`To check number is odd or even:${numberresult} `);
}
evenoddnumber(29);
evenoddnumber(44);
evenoddnumber(0);
evenoddnumber(101);

console.log(`---------------------Q3-------------------`);
var even=function(word){
    var len=word.length;
    var res=len%2==0?"EVEN":"ODD";
    console.log(`${word} length is : ${res}`);
}
even("JavaScript");
even("developer");
even("Google");

    

