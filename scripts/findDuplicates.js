function findDuplicates(arr) {
  const duplicates = [];
  const countMap = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  for (const [key, count] of Object.entries(countMap)) {
    if (count > 1) {
      duplicates.push(key);
    }
  }

  return duplicates;
}

const array = [1, 2, 3, 4, 3, 5, 1, 6, 2, 9, 9, 9, 2];
console.log(findDuplicates(array));