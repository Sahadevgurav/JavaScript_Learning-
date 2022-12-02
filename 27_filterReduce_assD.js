class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","It",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_Rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_Sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_Monika=new Employee(77,"Monika","It",40000,"Wipro");
const emp_Vinayak=new Employee(88,"Vinayak","It",75000,"TCS");
const emp_Mahesh=new Employee(99,"Mahesh","HR",85000,"Infy");


let array_emps=[emp_anil,emp_radha,emp_Rishi,emp_Sonali,emp_Monika,emp_Vinayak,emp_Mahesh];

console.log(`--------------Q1-Emp From Wipro ------------------`);
array_emps.filter((element)=>{
         if (element.emp_company=="Wipro") {
            console.log(element);
         }
});

console.log(`---------------Q2- employees from IT OR HR dept------------------`);
array_emps.filter((element)=>{
    if (element.emp_dept=="It"||element.emp_dept=="HR") {
        console.log(element);
    }
});

console.log(`-------------Q3--employees whose emp id are greater than 50--------------`);
array_emps.filter((element)=>{
      if (element.emp_id>50) {
        console.log(element);
      }
});

console.log(`-------------------Q4- start with letter A or V or M----------------------`);
array_emps.filter((element)=>{
    if (element.emp_name.startsWith("A")||element.emp_name.startsWith("V")||element.emp_name.startsWith("M")) {
        console.log(element);
    }
})

console.log(`-----------------Q5- average salary of the employee---------------`);
const salary1=[];
let sala=array_emps.filter((element)=>{
    salary1.push(element.emp_salary)
})
let sumOfSa=salary1.reduce((value,sum)=>{
  return  value+sum;
})
// console.log(sumOfSa);
let avg=sumOfSa/salary1.length;
console.log(avg);

console.log(`---------------Q6- average salary for IT department ----------------`);
const itDept=[];
array_emps.filter((element)=>{
   if (element.emp_dept=="It") {
    itDept.push(element.emp_salary);
   }
});
// console.log(itDept);

let itSalary= itDept.reduce((sum,value)=>sum+value);
// console.log(itSalary);
let avg1=itSalary/itDept.length;
console.log(avg1);