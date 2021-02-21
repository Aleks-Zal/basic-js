const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    for (let item of arr) {
      let depth = 1;
      if (Array.isArray(item)) {
        depth = depth + this.calculateDepth(item);
        if (depth > counter) {
          counter = depth;
        };
      };
    };
    return counter;
  };
};