var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
<<<<<<< HEAD
  var animal = 'cat';
=======
  
  var animal = 'cat';
  
>>>>>>> eb4e0e78be348c4f5f73864f5d95e930ea148b44
  return animal
}

function add2(n) {
<<<<<<< HEAD
=======
  
>>>>>>> eb4e0e78be348c4f5f73864f5d95e930ea148b44
  const two = 2;
  return n + two

  // Feel free to move things around!
  
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction ()();
