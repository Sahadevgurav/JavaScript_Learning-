console.log("step1:write normal function with argument and using ternary operator:")


var EligibilityCheck = function (Gender, age, boy_name) {
   console.log(age >= 21);
   var Gender = "male";
   var result = Gender == "male" && age >= 21  // false || true
      ? `Congrates ${boy_name} you are eligigible for marraige`
      : "Unfortunately you are not eligible for marriage";
   console.log(result);
}
EligibilityCheck("male", 21, "sachin");
EligibilityCheck("male", 17, "anil");
console.log("===========================================");
console.log(" step 2:wf using If block");

function marriageCheck(Gender, age, girl_name) {
   var Gender = "female";
   if (Gender == "female" && age >= 18) {
      console.log(`${girl_name} you are eligigible for marraige`);
   }
   else {
      console.log(`${girl_name} you are not eligible for marriage`);
   }
}
marriageCheck("female", 18, "radha");
marriageCheck("female", 24, "krushna");











