const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let part = '';
  if (!options.separator)
    options.separator = '+';
  if(!options.additionSeparator)
    options.additionSeparator = '|';
  if(options.addition + '' && options.addition !== undefined)
  part = (options.addition + '' + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
  return (str + part + options.separator).repeat(options.repeatTimes - 1) + str + part;
};
  