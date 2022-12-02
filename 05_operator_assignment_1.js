console.log(`---------------------Q1-------------------`);
var wordLenghtSquare=function(word){
     var wordlen=word.length;
     return wordlen*wordlen;
    
}
console.log(`JavaScript word length square:${wordLenghtSquare("JavaScript")}`);
console.log(`Google word length square:${wordLenghtSquare("Google")}`);
console.log(`Developer word length square:${wordLenghtSquare("Developer")}`);

console.log(`---------------------Q2.1-------------------`);
function str(){
    angular="I am Angular Developer";
    console.log(`Given String:${angular}`);
    var ressplit=angular.split("");
    var rev=ressplit.reverse().join("");
    // var joi=rev.join();
    console.log(`String after revers:${rev}`);
    

    console.log(`---------------------Q2.2-------------------`);
    var len=angular.length;
    console.log(`length of string:${len}`);
    var resultsplit=angular.split(" ");
    console.log(`Total no words :${resultsplit.length}`);
    console.log(`Result length Divide by word:${len/resultsplit.length}`);


    console.log(`---------------------Q2.3-------------------`);
     console.log(`Result After  length Multiplication by word:${len*resultsplit.length}`);

}
str();

