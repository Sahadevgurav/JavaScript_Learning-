
function reverseString(str) {
    console.log(` Before reverse string:  ${str} `);
    var a=str.length-1;
    var result='';
    for (let index = a; index >= 0; index--) {
        result=result+str.charAt(index);
    }
    console.log(` After reverse string:  ${result} `);
}
reverseString("Hard Work always pays back");
console.log(`---------------------------------`);
reverseString("Soon I will be Angular IT Champ");