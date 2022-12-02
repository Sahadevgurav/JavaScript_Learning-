var teacher ={
    teacherName:"Khrat Gajanan",
    subject:"Angular Developer",
    ID:1234,
    mobile:123456789,
    degrees:{
        graduate:'B.C.S',
        postgraduate:'M.C.A',
        PHD:'Adv Computing',

    },
    certificates:{
        certificates1:'Hacker Rank Participation',
        certificates2:'Certificate in IFE course',
        certificates3:'Certificate in Adv Programming'
    },
    details:function(){
        return `Total degrees:${teacher.degrees.graduate} , ${teacher.degrees.postGraduate} , ${teacher.degrees.PHD}`   
      }

}
console.log(`-------------------After concat all degrees--------------------`);
var b=teacher.details();
console.log(b);
console.log(teacher);
console.log(`-------------------After Adding new property address='Pune'--------------------`);
teacher.address='Pune';
console.log(`${teacher.address}`);
console.log(`-------------------After Modify existing property subject--------------------`);
teacher.subject='Java';
console.table(teacher);
console.log(`--------------------After Delete certificate1 and Add new certificate4------------------`);
delete teacher.certificates.certificates1;
teacher.certificates.certificates4='Coding Ninjas';
console.table(teacher.certificates);