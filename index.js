// Add your functions here
// function map(src, val) {
//     let arr = []
//     for (let i=0; i<src.length; i++) {
//       let el = src[i]
//       arr.puch(val(el))
//     }
//     return arr
// }
function map(src, cb) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
  }

  return r;
}
