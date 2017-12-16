const ml = v => {
  let s = 0
  for (let i = 1; i < v; i++) {
    if (i%3 === 0 || i%5 === 0) s += i
  }
  return s
}
console.log(ml(1000))
