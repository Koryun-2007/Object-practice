const obj = {
    _name: [], 
  
    set name(value) {
    if(typeof value === 'string'){
    obj._name = value.split(", ").map((name) => [name, name.length]);
    }
      
    },
  
    get name() {
      return obj._name;
    }
  };
  
  obj.name = 'Vrezh,Artavazd';
  console.log(obj.keys(obj));