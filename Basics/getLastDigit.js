function getLastDigit(a, b) {
  //code here
  let power = a ** b;
  let lastdigit = power % 10;
  return lastdigit;
}

let a = 3,
  b = 10;

console.log(getLastDigit(a, b));
