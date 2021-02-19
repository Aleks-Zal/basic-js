const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (+date === new Date().getTime() || date === undefined) {
    return 'Unable to determine the time of year!';
  } else if (typeof date === 'string' || Array.isArray(date) || typeof date === 'number' ||
    typeof date === 'function' || date.item) {
    return err;
  } else {
    let month = date.toString().split(' ')[1];
    if (month === 'Jan' || month === 'Feb' || month === 'Dec') return 'winter';
    if (month === 'Mar' || month === 'Apr' || month === 'May') return 'spring';
    if (month === 'Jun' || month === 'Jul' || month === 'Aug') return 'summer';
    if (month === 'Sep' || month === 'Oct' || month === 'Nov') return 'autumn';
  };
};
