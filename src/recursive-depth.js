const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let arrays = arr.filter(a => Array.isArray(a));
    return arrays.length ? this.calculateDepth(arrays.flat(), depth + 1) : depth;
  }
};