export const solver = (formula, symbol, value) => {
  const all = formula.split("=")[1].split("")
  all.map((item, index) => {
    if(item === symbol) {
      all[index] = value
    }
  })
  return all
}

export const merge = (arr1, arr2) => {
  const final = [];
  arr1.map((item,index) => {
  if(/[a-z]/g.test(item)) {
      if(arr2.length>0) {
        final.push(arr2[index])
      } else {
        final.push("0");
      }
    } else {
      final.push(item)
    }
  })
  return final
}