
function squared(array) {
  return _.partition(array, x => Math.sqrt(x) % 1 === 0);
}

const a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(squared(a1));
