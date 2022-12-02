console.log(`------------------Q1----------------`);
var str="Good Morning IT Champ";
var strlo=str.toLowerCase();
var count=0;
var vowels="aeiou"
for (let a = 0; a < strlo.length; a++) {
     var b=strlo.charAt(a);
     var isAvailable=vowels.includes(b);
    if (isAvailable){
        count=count+1;
    }  
}
console.log(str);
console.log(`Total vowels:${count}`);


console.log(`------------------Q2----------------`);

function countVowels() {
    var str1="I Love JavaScript";
    var count1=0;
    var lo=str1.toLowerCase();
    for (let c = 0; c < str1.length; c++) {
        var char=lo.charAt(c);
       if (char=="a"||char=="e"||char=="i"||char=="o"||char=="u") {
        count1=count1+1;    
       }   
    }
    console.log(str1);
    console.log(`The total count of vowels:${count1}`);
}

countVowels();
console.log(`------------------Q3----------------`);
var sum=function() {
    var count3=0;
    for (let index = 1; index <=10; index++) {
      count3=count3+index;    
    }
    console.log("sum of 1-10 no:");
    console.log(count3);
}
sum();

console.log(`------------------Q4----------------`);

  function sqr() {
    var sq=0;
    for (let s = 1; s <=5 ; s++) {
        sq=sq+s*s;  
    }
    console.log("sum of square 1-5 no:");
    console.log(sq);
}
  sqr();

console.log(`------------------Q5.1----------------`);

function evenPositionedChars(e) {
    console.log(`${e}`);
    var result='';
    for (let st2 = 0; st2 < e.length; st2++) {
        var chh=e.charAt(st2);
       if (st2%2==0&& chh!=" ") {
        result=result+chh;
       }    
    }
    console.log(`even position character:  ${result}`);
}
evenPositionedChars("Hard Work always pays back");
console.log(`---------------------------------`);
evenPositionedChars("Soon I will be Angular IT Champ");


console.log(`------------------Q5.2----------------`);
function oddPositionedChars(od) {
    console.log(`${od}`);
    var result='';
    for (let st3 = 0; st3 < od.length; st3++) {
        var ch=od.charAt(st3);
        if (st3%2!=0&&ch!=" ") {
            result=result+ch;
        }
        }   
        console.log(`odd position character:  ${result}`); 
}
oddPositionedChars("Hard Work always pays back");
console.log(`---------------------------------`);
oddPositionedChars("Soon I will be Angular IT Champ");

