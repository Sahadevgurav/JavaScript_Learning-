const array_numbers=[20,11,40,25,11,9,31,60,2,19];
const newarray=array_numbers.map((element)=>element+10);
console.log(`----------Q1----------`);
console.log(`After adding 10 in each element array is :${newarray}`);
console.log(`----------Q2----------`);
const newarray1=array_numbers.map((element)=>{
  return  element*element;
});
console.log(`Square each array element: ${newarray1}`);
console.log(`----------Q3----------`);
const newarray2=array_numbers.map((currentValue,index)=>{
   return currentValue+index;
  });
  console.log(`After adding index in each element array is :${newarray2}`);