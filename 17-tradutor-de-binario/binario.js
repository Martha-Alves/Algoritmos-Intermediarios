function binaryAgent(...str) {

  let myStr = str
    .join(" ")
    .split(" ")
    .map(char => parseInt(char, 2)); //cuidado com os parametros daqui 


  let newStr = [];

  for (let i = 0; i < myStr.length; i++) {
    newStr += String.fromCharCode(myStr[i])
  }

  return newStr
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

  //tradutor de código binário