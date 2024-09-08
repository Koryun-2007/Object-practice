debugger
function sum(initial) {  
    return function(x) {  
        return initial + x;  
    };  
}  
console.log(sum(1)(2));
const addOne = sum(1);
console.log(addOne(2));  
const addTen = sum(10);  
console.log(addTen(2));  
console.log(addOne(4));
console.log(addTen(10));