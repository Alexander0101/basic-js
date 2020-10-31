const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let period = parseFloat(sampleActivity);
  if (period + '' == 'NaN' || typeof(period) != 'string' || period <= 0 || period > MODERN_ACTIVITY) {
    return false;
  } else if (typeof(period) != 'number') {
    return false;
  }
  
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / period) / (0.693 / HALF_LIFE_PERIOD));
  return result;
};
