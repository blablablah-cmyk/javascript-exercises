const convertToCelsius = function(fahrenheit) {
  let temp = (fahrenheit-32)*(5/9);
  return Number.parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let temp = (celsius * (9/5))+32;
  return Number.parseFloat(temp.toFixed(1));
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
