function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  for (let i = 0; i < arr.length; i++) {
    arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));
    delete arr[i].avgAlt;
  }

  return arr;



}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

  //calculando altitude média