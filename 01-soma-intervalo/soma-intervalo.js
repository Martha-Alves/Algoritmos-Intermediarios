function sumAll(arr) {

  let menor = Math.min(arr[0], arr[arr.length - 1]);
  let maior = Math.max(arr[0], arr[arr.length - 1]);
  let meuResultado = 0;
  for (let i = menor; i <= maior; i++) {
    meuResultado += i;
  }
  return meuResultado;
}

console.log(sumAll([1, 4]));

//somar todos os números de um intervalo 