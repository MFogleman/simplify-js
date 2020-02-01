const norfolk = require('./rawNorfolkCoords')
const simplify = require('./simplify');


// console.log(norfolk);


const result = simplify(norfolk[0], 1, false);

console.log(result)
console.log('orig.length', norfolk.length);

console.log('result length', result.length);
