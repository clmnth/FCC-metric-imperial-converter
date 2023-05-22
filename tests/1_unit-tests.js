const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

  // #1
  test('whole number input', function() {
    let input = 4;
    assert.equal(convertHandler.getNum(input), 4)
    done();
  });

  // #2
  test('decimal number input', function() {
    let input = 46.95;
    assert.equal(convertHandler.getNum(input), 46.95)
    done();
  });

  // #3
  test('fractional input', function() {

    done();
  });

  // #4
  test('fractional input with a decimal', function() {

    done();
  });

  // #5
  test('error on a double-fraction', function() {

    done();
  });


  // #6
  test('default to a numerical input of 1', function() {

    done();
  });


  // #7
  test('read each valid input unit', function() {

    done();
  });

  // #8
  test('read each valid input unit', function() {

    done();
  });





});