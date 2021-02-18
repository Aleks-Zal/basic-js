const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let letters = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        letters.push(members[i].replace(/\s+/g, '').slice(0, 1).toUpperCase());
      };
    };
    return letters.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }).join('');
  } else {
    return false;
  };
};
