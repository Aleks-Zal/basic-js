const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) return err;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let finalArr = [];
    let index = 0;

    for (let i = 0; i < message.length; i++) {
      let code = message[i].charCodeAt(0);
      if (code >= 65 && code <= 90) {
        let letter = String.fromCharCode((code + key.charCodeAt(index)) % 26 + 65);
        finalArr.push(letter);
        if (index !== key.length - 1) {
          index++;
        } else {
          index = 0;
        };
      } else {
        finalArr.push(message[i]);
      };
    };

    if (this.reverse === false) {
      return finalArr.reverse().join('');
    } else {
      return finalArr.join('');
    };

  };

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) return err;

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let finalArr = [];
    let index = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let code = encryptedMessage[i].charCodeAt(0);
      if (code >= 65 && code <= 90) {
        let letter = String.fromCharCode((code + 26 - key.charCodeAt(index)) % 26 + 65);
        finalArr.push(letter);
        if (index !== key.length - 1) {
          index++;
        } else {
          index = 0;
        };
      } else {
        finalArr.push(encryptedMessage[i]);
      };
    };

    if (this.reverse === false) {
      return finalArr.reverse().join('');
    } else {
      return finalArr.join('');
    };
  };

};

module.exports = VigenereCipheringMachine;
