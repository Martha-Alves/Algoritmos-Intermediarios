function destroyer(arr, ...extraarr) {

  let myArr1 = arr.slice();
  let extraArr = [...extraarr].slice();
  let myArr = arr.concat(...extraarr)
    .filter(item => !myArr1.includes(item) || !extraArr.includes(item));

  return myArr;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//retornar um array mantendo todos os números que não estão no segundo parâmetro 