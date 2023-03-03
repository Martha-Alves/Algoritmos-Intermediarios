function smallestCommons(arr) {

  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let maior = [];
  let menor = [];
  let mmc = max;

  for (let i = 1; i <= max; i++) {
    maior.push(i)
  }

  for (let i = 1; i <= min; i++) {
    menor.push(i)
  }

  for (let i = max; i >= min; i--) {
    if (mmc % i !== 0) {
      mmc += max;
      i = max;
    }
  }


  return mmc

}
console.log(smallestCommons([1, 5]));

//mmc de dois números