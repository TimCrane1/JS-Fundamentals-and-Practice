'use strict';

// determine if every element in the array passes a truth test
const every = (array, truthTest) => {
  let passing = true;
  array.forEach(el => {if(!truthTest(el)) {passing = false}});
  return passing;
};

module.exports = { every };
