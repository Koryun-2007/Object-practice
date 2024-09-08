debugger
function sum(initial) {  
    return function(x) {  
        if (typeof initial === "number" && typeof x === "number"){
            return initial + x;  
        }else{
        	return "write vaild number"
        }
        
    };  
}  
console.log(sum(1)("a"));
const addOne = sum(1);
console.log(addOne(2));  
const addTen = sum(10);  
console.log(addTen(2));  
console.log(addOne(4));
console.log(addTen(10));