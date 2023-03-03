function myReplace(str, before, after) {
  let myStr = str.split(" ")
  for (let i = 0; i < myStr.length; i++) {
    if (myStr[i] === before) {
      if (/^[A-Z]/.test(before)) {
        myStr[i] = after[0].toUpperCase() + after.slice(1)
        return myStr.join(" ")
      } else {
        myStr[i] = after[0].toLowerCase() + after.slice(1)
        return myStr.join(" ")
      }
    }
  }

}

console.log(myReplace("Let us go to the store", "store", "mall"));

  //"Hello, World!".match(/Hello/)

  //substituir palavra de uma frase