function sumPrimes(num) {
  let myArr = []
  let soma = 0;

  for (let i = 0; i <= num; i++) {
    myArr.push(i)
  }

  let newArr = myArr.filter(num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return num > 1;
  })


  soma = newArr.reduce((preVal, x) => preVal + x, 0)


  return soma;
}

console.log(sumPrimes(11));



  //somando todos os números primos 