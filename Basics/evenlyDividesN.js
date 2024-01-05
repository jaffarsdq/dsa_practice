function evenlyDivides(N) {
  let ans = 0;
  let val = N;
  while (val !== 0) {
    let lastDigit = val % 10;
    if (N % lastDigit == 0) ans++;
    val = Math.floor(val / 10);
  }
  return ans;
}

console.log(evenlyDivides(23));
