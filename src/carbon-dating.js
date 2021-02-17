const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(num) {
  let newNum;
  let approximation = 0.693;

  if (isNaN(num) || num === '' || num === ' ' || num === ' \n\t\r' || num <= 0 || num > 15) {
    return false;
  } else if (typeof num === 'string') {
    newNum = +num;
    return Math.ceil(Math.log(MODERN_ACTIVITY / newNum) / (approximation / HALF_LIFE_PERIOD));
  } else {
    return false;
  };
};
