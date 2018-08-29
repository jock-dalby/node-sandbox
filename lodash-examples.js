const _ = require('lodash');

// lodash add
console.log(_.add(1, 4));

// lodash isString
console.log(_.isString('Test')); // true
console.log(_.isString(65)); // false

// loadash uniq => removes duplicate entries from an array
console.log(_.uniq([5, 4, 7, 6, 5, 3, 4, 7])); // [ 5, 4, 7, 6, 3 ]