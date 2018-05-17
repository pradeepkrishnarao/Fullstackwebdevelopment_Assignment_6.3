var temperatureInCelsius=40; //temperatureInCelsius initialized to integer 40
var celsiusToFahrenheit,fahrenheitToCelsius; //celsiusToFahrenheit and fahrenheitToCelsius are not initialized yet
var temperatureInFahrenheit=104; //temperatureInFahrenheit initialized to integer 104
celsiusToFahrenheit=(temperatureInCelsius * 9)/5+32;
fahrenheitToCelsius=((temperatureInFahrenheit-32)*5)/9;
console.log("Temperature of "+temperatureInCelsius+" celsius, will be "+celsiusToFahrenheit+" fahrenheit");
console.log("Temperature of "+temperatureInFahrenheit+" fahrenheit, will be "+fahrenheitToCelsius+" celsius");