function numberUnitHandler(input) {

  // let numRegex = /(?:\d+(?:\.\d+)?|\.\d+|\/)+/g;
  let numRegex = /^(?:\d+(?:\.\d+)?|\.\d+|\/)+/g;
  let unitRegex = /[A-Za-z]+/i;

  const number = (input.match(numRegex) || '1')[0];
  const unit = (input.match(unitRegex) || [''])[0];
  
  return [number, unit];
}

function fractionHandler(fractionMaybe) {
  let fractionSplit = fractionMaybe.split('/');
  if (fractionSplit.length > 2) {
    return false;
  }
  return fractionSplit;
}

function ConvertHandler() {

  this.getNum = function(input) {
    
    //  const numStr = numberUnitHandler(input)[0];
    let numStr = numberUnitHandler(input)[0]; 
    let fractionSplit = fractionHandler(numStr);
    
    let result;
    
    if (!fractionSplit) {
      return undefined;
    }

    let numerator = fractionSplit[0];
    let denominator = fractionSplit[1];
    
    if ( !isNaN(numerator) && !denominator ) {
      result = numerator;
    } else if (!isNaN(numerator) && !isNaN(denominator)) {
      const fractionResult = parseFloat(numerator) / parseFloat(denominator);
      result = fractionResult % 1 === 0 ? fractionResult.toFixed(0) : fractionResult.toFixed(5);
    }

    return parseFloat(result);
    
  };

  this.getUnit = function(input) {
    let result;
    const validUnit = ["l", "gal", "km", "mi", "kg", "lbs"];
    const unitStr = numberUnitHandler(input)[1]?.toLowerCase();

    if (!unitStr || !validUnit.includes(unitStr)) {
      result = "invalid unit";
    } else if (unitStr === 'l') {
      result = 'L'
    } else {
      result = unitStr;
    }

    return result;
  };

  this.getReturnUnit = function(initUnit) {
    let result;

    const unitMap = {
      gal: "L",
      L: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs"
    };

    result = unitMap[initUnit] || "invalid unit";
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    const spellOutMap = {
      gal: "gallons",
      L: "liters",
      mi: "miles",
      km: "kilometers",
      lbs: "pounds",
      kg: "kilograms"
    };

    result = spellOutMap[unit] || "invalid unit";
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (initUnit === 'km') {
      result = (initNum / miToKm).toFixed(5);
    } else if (initUnit === 'mi') {
      result = (initNum * miToKm).toFixed(5);
    } else if (initUnit === 'L') {
      result = (initNum / galToL).toFixed(5);
    } else if (initUnit === 'gal') {
      result = (initNum * galToL).toFixed(5);
    } else if (initUnit === 'kg') {
      result = (initNum / lbsToKg).toFixed(5);
    } else if (initUnit === 'lbs') {
      result = (initNum * lbsToKg).toFixed(5);
    } else {
      result = "invalid unit";
    }

    // result = result.toFixed(5);
    return parseFloat(result);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;

    return result;
  };

}


module.exports = ConvertHandler;
