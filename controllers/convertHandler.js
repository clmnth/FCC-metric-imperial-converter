function handleInput(input) {
  let numRegex = /(?:\d+(?:\.\d+)?|\.\d+|\/)+/g;
  // let unitRegex = /[A-Za-z]+/i;
  let unitRegex = /[A-Za-z]+/i;

  const number = (input.match(numRegex) || ['1'])[0];
  const unit = (input.match(unitRegex) || [''])[0];

  console.log(number, "<= number")
  console.log(unit, "<= unit")

  return [number, unit];
}



function ConvertHandler() {

  this.getNum = function(input) {
    const numStr = handleInput(input)[0];

    let result;

    if (numStr.includes('/')) {
      const [numerator, denominator] = numStr.split('/');
      result = parseFloat(numerator) / parseFloat(denominator);
    } else {
      result = parseFloat(numStr);
    }
    return result;
  };


  this.getUnit = function(input) {
    let result;
    const validUnit = ["l", "gal", "km", "mi", "kg", "lbs"];
    const unitStr = handleInput(input)[1]?.toLowerCase();

    if (!unitStr || !validUnit.includes(unitStr)) {
      result = "invalid unit";
    } else {
      result = unitStr;
    }

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    let result;


    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };

}


module.exports = ConvertHandler;
