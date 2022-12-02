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
const emp_radha=new Employee(11,"Radha","HR",74000,"Wipro");
const emp_Rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_Sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_Monika=new Employee(77,"Monika","It",40000,"Wipro");
const emp_Vinayak=new Employee(88,"Vinayak","It",75000,"TCS");
const emp_Mahesh=new Employee(99,"Mahesh","HR",85000,"Infy");


let array_emps=[emp_anil,emp_radha,emp_Rishi,emp_Sonali,emp_Monika,emp_Vinayak,emp_Mahesh];

console.log(`--------------Q1--------------------`);

var a=array_emps.sort((x,z)=>{
     return x.emp_id>z.emp_id?1:-1;
});
a.forEach((element)=>{
    console.log(`Employee ID:${element.emp_id},Employee Name:${element.emp_name}, Employee Dept:${element.emp_dept}`);
})

console.log(`--------------Q2--------------------`);
let c=array_emps.sort((a,b)=>{
  return  a.emp_dept>b.emp_dept?1:-1;
});
c.forEach((element)=>{
    console.log(`Employee ID:${element.emp_id}, Employee Dept:${element.emp_dept}, Employee Company:${element.emp_company}`);
});
console.log(`--------------Q3--------------------`);
let d=array_emps.sort((e,f)=>{
 return  e.emp_salary<f.emp_salary?1:-1;
});
d.forEach((element)=>{
    console.log(`Employee Name:${element.emp_name}, Employee Salary:${element.emp_salary}, Employee Company:${element.emp_company}`);
});

console.log(`--------------Q4--------------------`);
let g=array_emps.sort((h,i)=>h.emp_company>i.emp_company?1:-1);
g.forEach((element)=>{
    console.log(`Employee Company:${element.emp_company}, Employee ID:${element.emp_id},Employee Name:${element.emp_name},Employee Salary:${element.emp_salary}, Employee Dept:${element.emp_dept}`);
})