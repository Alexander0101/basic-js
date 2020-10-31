const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
      this.reverse = reverse
  }

  encrypt(message, key) {
      if (!message || !key) throw new Error()

      let result = new String()
      let arr = new Array()
      message = message.toUpperCase()
      key = key.toUpperCase()

      for (let i = 65; i < 91; i++) {
          arr.push(String.fromCharCode(i))
      }

      for (let i = 0, k = 0; i < message.length; i++, k++) {
          if (arr.includes(message[i])) {
              let element = (arr.indexOf(message[i]) + arr.indexOf(key.charAt(k % key.length))) % arr.length
              result += arr[element]
          } else {
              k = k - 1
              result += message[i]
          }
      }
      return (this.reverse === false) ? result.split('').reverse().join('') : result
  }

  decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) throw new Error()

      let result = new String()
      let arr = new Array()
      encryptedMessage = encryptedMessage.toUpperCase()
      key = key.toUpperCase()

      for (let i = 65; i < 91; i++) {
          arr.push(String.fromCharCode(i));
      }

      for (let i = 0, k = 0; i < encryptedMessage.length; i++, k++) {
          if (arr.includes(encryptedMessage[i])) {
              let element = ((arr.indexOf(encryptedMessage[i]) + arr.length) - arr.indexOf(key.charAt(k % key.length))) % arr.length
              result += arr[element]
          } else {
              k = k - 1
              result += encryptedMessage[i]
          }
      }
      return (this.reverse === false) ? result.split('').reverse().join('') : result
  }
}

module.exports = VigenereCipheringMachine;