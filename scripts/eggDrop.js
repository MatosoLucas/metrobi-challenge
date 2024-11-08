function eggDropTwoEggs(floors) {
  let drops = 0;
  let currentFloor = 0;

  while (currentFloor < floors) {
    drops++;
    currentFloor += drops;
  }

  return drops;
}

const floors = 100;
console.log(`Minimum drops required with 2 eggs and 100 floors: ${eggDropTwoEggs(floors)}`);