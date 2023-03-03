function spinalCase(str) {
  let myStr = str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase()
    .trim()

  return myStr;
}

console.log(spinalCase('AllThe-small Things'));


  // const myFr = "Oi, sou uma frase!"

  // const myRegex = /\W/gi;

  // const myRes = myFr.match(myRegex)

  // console.log(myRes) <= apenas para relembrar

  //organizar e colocar hifen 