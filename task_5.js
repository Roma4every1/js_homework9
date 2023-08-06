const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Прошло 5 секунд");
    }, 5000);
  });
  
  function checkNumber(num) {
    return new Promise((resolve, reject) => {
      if (num > 10) {
        resolve("Число больше 10");
      } else {
        reject("Число меньше 10");
      }
    });
  }

  function addWords() {
    return new Promise((resolve) => {
      resolve("Hello");
    })
      .then((result) => {
        return result + " World";
      })
      .then((result) => {
        return result + "!";
      })
      .then((result) => {
        console.log(result);
      });
  }
  
  function sumArray(arr) {
    return new Promise((resolve) => {
      const sum = arr.reduce((acc, num) => acc + num);
      resolve(sum);
    });
  }
  
  checkNumber(10)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  
  function checkBoolean(bool) {
    return new Promise((resolve, reject) => {
      if (bool === true) {
        resolve("Hello");
      } else {
        reject("Goodbye");
      }
    });
  }
  
  checkBoolean(true)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });