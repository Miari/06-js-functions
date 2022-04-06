/* ****************************
* This function says hello
* @param name {String} - the input name of the person to greed
* @returns {String} - greeting message 
* ****************************/
function sayHello(name) {
  const greeting = 'Hi ' + name;
  return greeting;
}

const greeting = sayHello('Ella');
console.log(greeting);


/* ****************************
* This function gives volume of Pyramid
* @param baseWidth {Number} - the input name of the person to greed
* @returns {String} - greeting message 
* ****************************/
const getPyramidVolume = (baseWidth, baseLength, height) => (baseWidth * baseLength * height) / 3;

console.log(getPyramidVolume(100, 50, 50));


/* ****************************
* This function calculates perimeter of a rectangle.
* @param rectangleWidth {Number} - the input with
* @param rectangleHeight {Number} - the input height
* @return Perimeter {Number} - Perimeter of Rectangle
* ****************************/
const calculatePerimeter = (rectangleWidth, rectangleHeight) => (rectangleWidth + rectangleHeight) * 2;
console.log(calculatePerimeter(5, 2));

/*   CIRCLE   */
/* ****************************
* This function "calculateAreaOfCircle" calculates area of a circle.
* @param radius {Number} - the input radius
* @return AreaOfCircle {Number} - calculated area of circle 
* ****************************/
const calculateAreaOfCircle = (radius) => (pi * Math.pow(radius, 2));
/* ****************************
* This function "calculateircumferenceOfCircle" calculates circumference of a circle.
* @param radius {Number} - the input radius
* @return CircumferenceOfCircle {Number} - calculated circumference of circle
* ****************************/
const calculateCircumferenceOfCircle = (radius) => (2 * pi * radius);
const pi = 3.14;
const radiusOfCircle = 5;
console.log('Area of circle = ' + calculateAreaOfCircle(radiusOfCircle) + '; Circumference of circle = ' + calculateCircumferenceOfCircle(radiusOfCircle));

/*   SNICKERS   */
/* ****************************
* This function "calculateLifetimeSupplyOfSnickers" calculates area of a circle.
* @param currentAge {Number} - your current age
* @param dailyNumberOfSnickers {Number} - your daily required number of snickers 
* @return amountConsumedForRestOfLife {Number}
* ****************************/
const maxAge = 87;
const currentAge = 70;
const minNumberOfSnickers = 2;
const usualNumberOfSnickers = 3.34;
const maxNumberOfSnickers = 5;
const calculateLifetimeSupplyOfSnickers = (currentAge, dailyNumberOfSnickers) => Math.round((maxAge - currentAge) * 365 * dailyNumberOfSnickers);
console.log('If you are ' + currentAge + ' years old and you take ' + minNumberOfSnickers + ' Snickers per day, you will need ' + calculateLifetimeSupplyOfSnickers(currentAge, minNumberOfSnickers) + ' to last you until the ripe old age of ' + maxAge);
console.log('If you are ' + currentAge + ' years old and you take ' + usualNumberOfSnickers + ' Snickers per day, you will need ' + calculateLifetimeSupplyOfSnickers(currentAge, usualNumberOfSnickers) + ' to last you until the ripe old age of ' + maxAge);
console.log('If you are ' + currentAge + ' years old and you take ' + maxNumberOfSnickers + ' Snickers per day, you will need ' + calculateLifetimeSupplyOfSnickers(currentAge, maxNumberOfSnickers) + ' to last you until the ripe old age of ' + maxAge);


/*    TEMPERATURE   */
/* ****************************
* This function convert celsius to fahrenheit
* @param gradInCelsius {Number} - input grad in celsius
* @return amountConsumedForRestOfLife {Number}
* ****************************/

const celsiusToFahrenheit = (gradInCelsius) => {
  const gradInFahrenheit = gradInCelsius * 1.8 + 32;
  console.log(`${gradInCelsius}°C is ${gradInFahrenheit}°F`);
};
celsiusToFahrenheit(6);

const fahrenheitToCelsius = (gradInFahrenheit) => {
  const gradInCelsius = (gradInFahrenheit - 32) / 1.8;
  console.log(`${gradInFahrenheit}°F is ${gradInCelsius}°C`);
};
fahrenheitToCelsius(41);

/*    The Puppy Age Calculator    */
const calculateDogAge = (puppyAge, conversionRate) => {
  const defaultConversionRate = 7;
  let dogAge = 0;
  if (conversionRate) {
    dogAge = puppyAge * conversionRate;
  } else {
    dogAge = puppyAge * defaultConversionRate;
  }
  console.log(`Your doggie is ${dogAge} years old in dog years!`);
}
calculateDogAge(5);
calculateDogAge(2, null);
calculateDogAge(3, 6);


/*    CAESAR CIPHER ENCRYPTOR     */

const caesarEncryptor = (inputText, key) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  [...inputText].forEach(element => {
    for (let index = 0; index < alphabet.length; index++) {
      if (alphabet[index] === element) {
        if ((index + key) <= alphabet.length - 1) {
          console.log(alphabet[index + key]);
        } else {
          console.log(alphabet[index - alphabet.length + key]);
        }
      }
    }
  });
}
caesarEncryptor('zbx', 2);