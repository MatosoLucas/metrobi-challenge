function logItemsWithDelay(arr) {
  let delay = 1000

  arr.map((item) => {
    setTimeout(() => {
      console.log(item);
    }, delay);
    delay *= 2;
  });
}

const array = ["A", "B", "C", "D"];
logItemsWithDelay(array);