// const { suite, test } = require('mocha');
const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

  suite("Function convertHandler.getNum(input)", function() {

    // #1
    test('whole number input', function() {
      let input = "4km";
      assert.equal(convertHandler.getNum(input), 4)
    });

    // #2
    test('decimal number input', function() {
      let input = "46.95km";
      assert.equal(convertHandler.getNum(input), 46.95)
    });

    // #3
    test('fractional input', function() {
      let input = "5/2km";
      assert.equal(convertHandler.getNum(input), 5 / 2);
    });

    // #4
    test('fractional input with a decimal', function() {
      let input = "5.3/2km";
      assert.equal(convertHandler.getNum(input), 5.3 / 2);
    });

    // #5
    test('error on a double-fraction', function() {
      let input = "5/2/5km";
      assert.equal(convertHandler.getNum(input), undefined);
    });

    // #6
    test('default to a numerical input of 1', function() {
      let input = "km";
      assert.equal(convertHandler.getNum(input), 1);
    });

  });

  suite("Function convertHandler.getUnit(input)", function() {

    // #7
    test('read each valid input unit', function() {
      assert.equal(convertHandler.getUnit('3.5gal'), 'gal');
      assert.equal(convertHandler.getUnit('1/2km'), 'km');
      assert.equal(convertHandler.getUnit('5L'), 'L');
      assert.equal(convertHandler.getUnit('10mi'), 'mi');
      assert.equal(convertHandler.getUnit('7kg'), 'kg');
      assert.equal(convertHandler.getUnit('3lbs'), 'lbs');
    });

    // #8
    test('return an error for an invalid input unit', function() {
      assert.equal(convertHandler.getUnit('3.5mn'), 'invalid unit');
      assert.equal(convertHandler.getUnit('1/2What'), 'invalid unit');
      assert.equal(convertHandler.getUnit('5qwE'), 'invalid unit');
      assert.equal(convertHandler.getUnit('10kl'), 'invalid unit');
    });

    // #9
    test('return the correct return unit for each valid input unit', function() {
      assert.equal(convertHandler.getReturnUnit('gal'), 'L');
      assert.equal(convertHandler.getReturnUnit('L'), 'gal');
      assert.equal(convertHandler.getReturnUnit('mi'), 'km');
      assert.equal(convertHandler.getReturnUnit('km'), 'mi');
      assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
      assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
    });

    // #10
    test('return the spelled-out string unit for each valid input unit', function() {
      assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
      assert.equal(convertHandler.spellOutUnit('L'), 'liters');
      assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
      assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
      assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
      assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms');
    });

    // #11
    test('convert gal to L', function() {
      assert.approximately(convertHandler.convert(10, 'gal'), 37.85410, 0.1);
    });

    // #12
    test('convert L to gal', function() {
      assert.approximately(convertHandler.convert(10, 'L'), 2.64172, 0.1);
    });

    // #13
    test('convert mi to km', function() {
      assert.approximately(convertHandler.convert(10, 'mi'), 16.09340, 0.1);
    });

    // #14
    test('convert km to mi', function() {
      assert.approximately(convertHandler.convert(10, 'km'), 6.21373, 0.1);
    });

    // #15
    test('convert lbs to kg', function() {
      assert.approximately(convertHandler.convert(10, 'lbs'), 4.53592, 0.1);
    });

    // #16
    test('convert kg to lbs', function() {
      assert.approximately(convertHandler.convert(10, 'kg'), 22.04624, 0.1);
    });

  });

});