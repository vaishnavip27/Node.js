// Whatever mathematic function I use, i will write it in this file
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// The following is called multiple export
module.exports = {
  add,
  sub,
};

// exporting using exports function

// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
