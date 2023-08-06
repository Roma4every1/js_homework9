function createCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    }
  }

  function makeAdder(x) {
    return function(y) {
      return x + y;
    }
  }
  
  function multiplier(x) {
    return function(y) {
      return x * y;
    }
  }