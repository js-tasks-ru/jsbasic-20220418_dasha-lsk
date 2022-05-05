function getMinMax(str) {
  // ваш код...
  let arrayOfNumbersAndStrings = str.split(" ");
  let numbersAndNans = arrayOfNumbersAndStrings.map(item => Number(item));
  let numbers = numbersAndNans.filter(item => !isNaN(item));
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return {min: min, max: max};
}
