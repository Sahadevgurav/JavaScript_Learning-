console.log(`---------------------Q3-------------------`);
var even=function(word){
    var len=word.length;
    var res=len%2==0?"EVEN":"ODD";
    console.log(`${word} length is : ${res}`);
}
even("JavaScript");
even("developer");
even("Google");