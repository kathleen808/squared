
function squared(array) {
  const final = [];
  const perfect = _.groupBy(array, x => Math.sqrt(x) % 1 === 0);
  final.push(perfect.true);
  final.push(perfect.false);
  return final;
}

const a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(squared(a1));
