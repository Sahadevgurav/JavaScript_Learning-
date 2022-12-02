console.log(`---------------Q1---------------------`);
class vehicle{
    constructor(Name,Type,color,compony){
        this.Name=Name;
        this.Type=Type;
        this.color=color;
        this.compony=compony;
    }
}
let a=new vehicle("XUV200","SUV","White","Mahindra");
let b=new vehicle("DEZIRE LXI","SUV","White","Maruti Suziki");
let c=new vehicle("VERNA","MUV","Red","Hyundai");
let d=new vehicle("XUV700","SUV","White","Mahindra");
let e=new vehicle("Fortuner","SUV","black","Toyota");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(`---------------Q2---------------------`);
class College{
    constructor(collegeName,no_Of_Faculty,totalStudent){
    this.collegeName=collegeName;
    this.no_Of_Faculty=no_Of_Faculty;
    this.totalStudent=totalStudent;
    }

}
let coll1=new College("Walchanad Sangli college",10,10000);
let coll2=new College("KWC Sangli college",5,19000);
let coll3=new College("Warana college Kolhapur",7,12000);
let coll4=new College("VP INSTITUTE Sangli ",1,1000);

console.log(coll1);
console.log(coll2);
console.log(coll3);
console.log(coll4);



console.log(`---------------Q3---------------------`);

function traverse_object(College){
       for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key}  :${element}`);
        }
       }
}

traverse_object(coll1);
console.log(`------------------`);
traverse_object(coll2);
console.log(`------------------`);
traverse_object(coll3);
console.log(`------------------`);
traverse_object(coll4);


