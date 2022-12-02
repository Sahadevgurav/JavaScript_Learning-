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


let array_employee=[emp_anil,emp_radha,emp_Rishi,emp_Sonali,emp_Monika,emp_Vinayak,emp_Mahesh];

console.log(`------------------Q1------------------`);
array_employee.forEach((element)=>{
       if (element.emp_company=="TCS") {
        console.log(`Employee Name:${element.emp_name} Company Name:${element.emp_company}`);
       }
});

console.log(`------------------Q2------------------`);
array_employee.forEach((element)=>{
    if (element.emp_salary>=50000) {
     console.log(element);
    }
});

console.log(`------------------Q3------------------`);
let sum=0;
array_employee.forEach((element)=>{
   let a=element.emp_salary;
   sum=sum+a;
});
console.log(`Sum Of All Employees Salary: ${sum}`);

console.log(`------------------Q4 ------------------`);
let avg=sum/array_employee.length;
console.log(`Average Salary : ${avg}`);

console.log(`------------------Q5----------------`);

array_employee.forEach((element)=>{
    if (element.emp_dept=="It" && element.emp_salary>=75000) {
        console.log(element);
       }
    else{
        if (element.emp_dept=="HR" && element.emp_salary>=75000) {
            console.log(element);
        }
    }
    
});
