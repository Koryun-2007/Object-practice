function notVaildString(value){
    if (typeof value !== "string" ){
        return false
    }
    return true
}
function add_suffix(initial) {  
    return function(x) {  
        if (notVaildString(initial) && notVaildString(x)){
            return initial + x;  
        }
        	return "write vaild string"
        
    };  
}  


add_ly = add_suffix("ly");
console.log(add_ly("hopeless")); // "hopelessly"
console.log(add_ly("total"));// "totally"
add_less = add_suffix("less");
console.log(add_less("fear")); // "fearless"
console.log(add_less("ruth"));//"ruthless"

