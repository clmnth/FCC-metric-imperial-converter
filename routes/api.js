'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

  // Complete the necessary routes in /routes/api.js
  let convertHandler = new ConvertHandler();

  app.route('/api/convert/').get((req, res) => {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);


    let responseObject = {};
    responseObject['initNum'] = initNum

    res.json(responseObject);
  });

};
