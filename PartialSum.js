// debugger
// function sum(initial) {  
//     return function(x) {  
//         if (typeof initial === "number" && typeof x === "number"){
//             return initial + x;  
//         }else{
//         	return "write vaild number"
//         }
        
//     };  
// }  
// console.log(sum(1)("a"));
// const addOne = sum(1);
// console.log(addOne(2));  
// const addTen = sum(10);  
// console.log(addTen(2));  
// console.log(addOne(4));
// console.log(addTen(10));


function isValidNumber(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      return false;
    }
    return true;
  }
  function sumFunc(num) {
    return function (num2) {
      if (isValidNumber(num) && isValidNumber(num2)) {
        return num + num2;
      }
      return "invalid input";
    };
  }
  const addOne = sumFunc("1");
  const addTwo = sumFunc(2);
  const addTen = sumFunc(10);
  console.log(sumFunc(1)(2));
