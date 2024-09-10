function isIsogram(str) {
    str = str.toLowerCase();
    let charArray = []; 
    
    for (let char of str) {
      if (charArray.indexOf(char) !== -1) {
        return false; 
      }
      charArray.push(char);
    }
  
    return true;
  }
  console.log(isIsogram("Machine"));
  console.log(isIsogram("Programming"));