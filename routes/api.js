'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function(app) {

  // Complete the necessary routes in /routes/api.js
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {

    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    

    if ((initNum === "invalid number" || !initNum) && initUnit === "invalid unit") {
      res.send("invalid number and unit");
    }

    if (!initNum || initNum === "invalid number") {
      res.send("invalid number");
    }

    if (!initUnit || initUnit === "invalid unit") {
      res.send("invalid unit");
    }

   res.json({ initNum, initUnit, returnNum, returnUnit, string: toString });

  });



};
