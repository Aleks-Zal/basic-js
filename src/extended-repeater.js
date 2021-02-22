const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let finalStr = [];
  let finalAdd = [];
  if (typeof str !== 'string') {
    str = String(str);
  };
  if (options.repeatTimes === undefined) {
    repeatTimes = 1;
  } else {
    repeatTimes = options.repeatTimes;
  };

  separator = options.separator;
  if (options.addition === false || options.addition === null || options.addition === null || typeof options.addition === 'object') {
    addition = options.addition;
    addition = String(options.addition);
  } else {
    addition = options.addition;
  };

  if (options.additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = options.additionRepeatTimes;
  };
  additionSeparator = options.additionSeparator;

  for (let i = 0; i < additionRepeatTimes; i++) {
    if (!additionSeparator) {
      finalAdd.push(addition);
      if (i < additionRepeatTimes - 1) {
        finalAdd.push('+');
      };
    } else {
      finalAdd.push(addition);
      if (i < additionRepeatTimes - 1) {
        finalAdd.push(additionSeparator);
      };
    };
  };

  for (let i = 0; i < repeatTimes; i++) {
    if (!separator) {
      finalStr.push(str);
      finalStr.push(finalAdd.join(''));
      if (i < repeatTimes - 1) {
        finalStr.push('+');
      };
    } else {
      finalStr.push(str);
      finalStr.push(finalAdd.join(''));
      if (i < repeatTimes - 1) {
        finalStr.push(separator);
      };
    };
  };
  return finalStr.join('');
};
