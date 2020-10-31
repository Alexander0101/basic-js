const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  let result = '';
  for(const i of members){
    if(typeof(i) == 'string'){
      result += i.split(' ').join('')[0];
    }
  }
  return false ? result == '' : result.toUpperCase().split('').sort().join('');
};