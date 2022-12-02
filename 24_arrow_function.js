function display(){
    console.log("Hello");
}


let show =  () => {
    console.log("Hello");
}
show();


let add = function(n1, n2) {
    return n1 + n2;
}
console.log( add(10, 20));

let sum = (n1, n2) =>  n1 + n2; 

// let sum1 = (n1, n2) => {
//     return n1 + n2
// } 

console.log( sum(10, 20));