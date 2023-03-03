function destroyer(arr, ...extraarr) {
  let myArr1 = arr.slice();
  let extraArr = [...extraarr].slice();
  let myArr = arr.concat(...extraarr);
  let newArr = [];
  for (let i = 0; i < myArr.length; i++) {
    if (myArr.includes(myArr1[i] && extraArr[i])) {
      myArr.splice(myArr[i])

    } else {
      newArr.push(myArr1[i]);
    }
  }


  return myArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

  //retornar tudo que está no primeiro e não está no segundo (ignorando os números iguais)