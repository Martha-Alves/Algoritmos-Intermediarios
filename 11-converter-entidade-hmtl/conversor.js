function convertHTML(str) {

  const html = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;"
  }

  let myStr = str
    .split("")
    .map(x => html[x] || x)
    .join("")

  return myStr;


}

console.log(convertHTML("Dolce & Gabbana"));

//conversor de HTML 