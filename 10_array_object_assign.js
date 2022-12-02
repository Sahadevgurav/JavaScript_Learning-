
console.log(`-----------------Q1----------------------`);
const array_nums=[20,3,4,56,90,400,49];
let array_clone=array_nums;
array_clone.push(55);
array_clone.push(66);
console.log(`Original Array:  ${array_nums}`);
console.log(`Shallow clone Array:  ${array_nums}`);
console.log(`-----------------Q2----------------------`);
let array_clone1=[...array_nums];
array_nums.push(10);
array_nums.push(25);
console.log(`After Update Original Array:  ${array_nums}`);
console.log(`Deep clone Array:  ${array_clone1}`);
console.log(`-----------------Q3----------------------`);
const array_even=[2,30,14,8];
const array_merge=[...array_nums,...array_even]
console.log('Before merge array_even,array_nums',array_even,array_nums);
console.log('After merge using spread operator:',array_merge);
console.log(`-----------------Q5-a----------------------`);
const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli ,431202"
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}
console.table(employee_info.address);
console.log(`-----------------Q5-b----------------------`);
console.log('Mobile numbers:',employee_info.mobiles);
console.log(`-----------------Q6----------------------`);
const employee={...employee_info};
console.log('Original object ',employee_info.address.locality,employee_info.mobiles);
console.log('Deep Clone object ',employee.address.locality,employee.mobiles);
employee.address.locality.street="Kolhapur";
employee.mobiles[0]="91 7255 9623";
console.log('Original object After Update street,mobile ',employee_info.address.locality,employee_info.mobiles);
console.log('Deep Clone object After Update street,mobile ',employee.address.locality,employee.mobiles);
// console.log(`point is both original as well as deep clone object will be updated`);
console.log(`-----------------Q7----------------------`);
let employee1=JSON.parse(JSON.stringify(employee_info));
employee1.salary.july_month="80,000INR";
employee1.address.country="United Kingdom";
console.log('Original Object After update',employee_info.salary,employee_info.address.country);
console.log('Deep Clone Object After update',employee1.salary,employee1.address.country);