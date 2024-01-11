function getEven(arr){
  return arr.filter( num => num.toString().length % 2 === 0).length
}

console.log(getEven([22,2,14,3333]))