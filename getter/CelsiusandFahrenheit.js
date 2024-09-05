const temperature = {
    _celsius: 0,
  
    set celsius(value) {
      if (typeof value === 'number') {
        temperature._celsius = value;
      } 
    },
  
    get celsius() {
      return temperature._celsius;
    },
  
    set fahrenheit(value) {
      if (typeof value === 'number') {
        temperature._celsius = (value - 32) * 5 / 9;
      }
    },
  
    get fahrenheit() {
      return (temperature._celsius * 9 / 5) + 32;
    }
  };
  
  temperature.celsius = 25;
  console.log(temperature.fahrenheit + '°F');
  temperature.fahrenheit = 32;
  console.log(temperature.celsius + '°C'); 

  