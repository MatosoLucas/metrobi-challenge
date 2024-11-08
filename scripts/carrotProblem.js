function maxValue(items, maxCapacity) {
  const array = Array(maxCapacity + 1).fill(0);

  // Loop through all the available items
  for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
    const { kg: itemWeight, price: itemValue } = items[itemIndex];

    // For each possible capacity, from the item's weight to maxCapacity
    for (let currentCapacity = itemWeight; currentCapacity <= maxCapacity; currentCapacity++) {
      // Update array[currentCapacity] to the best value achievable by either:
      //Verify what's the best value: the current one or the value of the item plus the best value achievable with the remaining weight
      array[currentCapacity] = Math.max(array[currentCapacity], itemValue + array[currentCapacity - itemWeight]);
    }
  }

  return array[maxCapacity];
}

// Example usage:
const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];

const maxCapacity = 36;

console.log(maxValue(carrotTypes, maxCapacity));