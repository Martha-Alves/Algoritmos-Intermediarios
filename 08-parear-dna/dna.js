function pairElement(str) {
  const pares = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  }
  return str
    .split("")
    .map(x => [x, pares[x]])
}

console.log(pairElement("GCG"));