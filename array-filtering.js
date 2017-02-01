var myNumbers = ['1','2','3','4','5','6','7','8'];
var myVariable = myNumbers.filter(function evenNumbers (number) {
  return number % 2 === 0;
})