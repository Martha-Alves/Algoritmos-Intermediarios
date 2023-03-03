function fearNotLetter(str) {
  let alfabeto = "abcdefghijklmnopqrstuvwxyz"
  let inicio = alfabeto.indexOf(str[0]);
  let strTam = str.length
  for (let i = inicio; i < inicio + strTam; i++) {
    if (!str.includes(alfabeto[i])) {
      return alfabeto[i]
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));

//verificar qual letra está faltando na sequência