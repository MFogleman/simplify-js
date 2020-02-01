const norfolk = require('./rawNorfolkCoords')
const simplify = require('./simplify');
const richmond = require('./rawRichmondCoords');

// console.log(norfolk);


// const unwrap = norfolk[0];
const unwrap = norfolk[0];

const result = simplify(unwrap, .0010, false);

console.log(result)
console.log('orig.length', unwrap.length);

console.log('result length', result.length);



// using both options;
// Norfolk
// 570  -> .001 -> 47

// Richmond
// 6889 -> .00291 -> 48
// 6889 -> .0030  -> 44
// 6889 -> .0035  -> 39
// 6889 -> .001   -> 98