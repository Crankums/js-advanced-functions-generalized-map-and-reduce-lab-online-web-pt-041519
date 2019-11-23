// Add your functions here
function map(src, fn) {
    let arr = []
    for (let i=0; i<src.length; i++) {
      let el = src[i]
      arr.push(fn(el))
    }
    return arr
}

function reduce(src, start = 0) {
  let arr =[]
  if (start) {
    let total = 0
    for (let i=start; i < src.length; i++) {
      total += src[i]
    }
    return total
  } else {
    let total = 0
    for (let i = 0; i < src.length; i++) {
      total+= src[i]
    }
    return total
  }
}
