var string = function stringHandsOn(){
    console.log("===============================Q1==============================");
    console.log(`Given String: "     Hey you are doing good, keep it up      "`);
    var givenString = "     Hey you are doing good, keep it up      "
    // var lengthString = givenString.length;
    console.log("===============================Q2==============================");
    console.log(`Length of String is : ${givenString.length}`);
    console.log("===============================Q3==============================");
    var trimResult = givenString.trim();
    console.log(`Removed Extra Spaces : ${trimResult.length}`);
    console.log("===============================Q4==============================");
    console.log(`Total Number Extra Spaces removed :  ${givenString.length = trimResult.length}`);
    console.log("===============================Q5==============================");
    console.log(`After Trim First Charcter :${trimResult.charAt(0)}`);
    console.log(`After Trim Last Charcter :${trimResult.charAt(trimResult.length-1)}`);
    console.log("===============================Q6==============================");
    var spiltWord = trimResult.split(" ")
    console.log(spiltWord);
    console.log("Total words available in string :",spiltWord.length);
    console.log("===============================Q7==============================");
    console.log(`Index of word good given string: ${givenString.indexOf("good")}`);
    console.log("===============================Q8==============================");
    console.log(`Substring starting from index "22" using substring:${trimResult.substring(22)}`);
    console.log(`Substring starting from index "22" using slice:${trimResult.slice(22)}`);
    console.log("===============================Q9==============================");
    console.log(`string word ends with word "up" :${trimResult.endsWith("up")} `);
    console.log("===============================Q10==============================");
    console.log(`string start'swith word "Hey" :${trimResult.endsWith("up")} `);
    




}

string();