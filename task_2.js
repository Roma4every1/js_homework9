function sumFromOneToN(n) {
    if (n === 1) {
      return 1;
    } else {
      return n + sumFromOneToN(n - 1);
    }
  }

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }