function destroyer(arr, ...extraarr) {
  let myArr1 = arr.slice();
  let extraArr = [...extraarr].slice();
  let newArr = [];
  let myArr = arr.concat(...extraarr)
  for (let i = 0; i < myArr.length; i++) {
    if (myArr.includes(myArr1[i] && extraArr[i])) {
      myArr.splice(myArr[i] - 1, myArr[i]);
    } else {
      newArr.push(myArr[i]);
    }
  }


  return myArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3, 4], 2, 3, 4));

  //retornar apenas elemetos em comum sem repetição