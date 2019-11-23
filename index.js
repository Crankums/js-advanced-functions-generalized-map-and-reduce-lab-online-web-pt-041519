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

}
