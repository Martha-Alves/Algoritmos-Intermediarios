function uniteUnique(...arr) {

  let myArr = arr
    .join(" ")
    .split(/\W+/)
    .map(Number);

  let newArr = [];

  for (let i = 0; i < myArr.length; i++) {
    if (!newArr.includes(myArr[i])) {
      newArr.push((myArr[i]))
    }
  }



  return newArr
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

  //unir arrays ignorando itens em comum!

