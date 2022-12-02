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

let map_employee=new Map();
map_employee.set(22,emp_anil);
map_employee.set(33,emp_radha);
map_employee.set(55,emp_Rishi);
map_employee.set(66,emp_Sonali);
map_employee.set(77,emp_Monika);
map_employee.set(88,emp_Vinayak);
map_employee.set(99,emp_Mahesh);

map_employee.forEach((element)=>{
    console.log(`Emp id = ${element.emp_id} ==> Name=${element.emp_name} Dept=${element.emp_dept} Company=${element.emp_company} Salary=${element.emp_salary}`);
});
