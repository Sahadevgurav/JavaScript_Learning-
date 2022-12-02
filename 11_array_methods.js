let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
// arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(5);
arrayOfNumbers.unshift(0,99,77,66);
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
    // console.log(element);
}
for (const key in arrayOfNumbers) {
        const element = arrayOfNumbers[key];
        // console.log(element);
}

console.log("============ slice() ===========");
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
let slicedElements =  arrayNumbers.slice(2);
console.log(slicedElements);
let slicedValues = arrayNumbers.slice(1, 4);
console.log(slicedValues);

console.log("============ splice() ===========");
let array_numbers = [1, 3, 7, 8, 9, 3, 7];
console.log(array_numbers);
// let splicedElements =  array_numbers.splice(4);//It remove element from 4th index to the end
let splicedElements =  array_numbers.splice(2,2);
console.log(splicedElements);
console.log(array_numbers);



console.log("============ splice() ===========");
let array_numbers1 = [1, 3, 7, 8, 9, 3];
console.log(array_numbers);
 // let splicedElements =  array_numbers.splice(4); // It remove elements from 4th index to the end
 // let splicedElements =  array_numbers.splice(2, 3) // It removes the total  element starting from index 2
 // console.log(splicedElements);
 // let splicedElements =  array_numbers.splice(2, 0, 22 ) // Will insert element 22 before index 2, 0 - means don't replace
 // array_numbers.splice(2, 1, 22);
 array_numbers1.splice(2, 1, 22, 44, 66);
 console.log(array_numbers);





let totalElements = arrayOfNumbers.length-1;
for (let index = totalElements; index >= 0; index--) {
    const element = arrayOfNumbers[index];
    // console.log(element);
    
}