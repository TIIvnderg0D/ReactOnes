function sum(a) {
    let c = 0;
    function subSum(a) {
        c += a;
        return function(b) {
            return (b ? subSum(b) : c)
        }
    }
    return subSum(a)
}

/*const sum = (a) => {
    return (b) => b ? sum(a + b): a
  }

  function sum(a) {
    return function(b) {
      return b ? sum(a + b): a
    }
  }*/

const result = sum(3)(5)(11)(3)(13)(11)()
console.log(result)
