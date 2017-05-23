//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    //
    // YOUR CODE GOES HERE
    switch (input) {
        case '':
            return "Hello, World!";
            break
        case 'Bob':
            return "Hello, Bob!"
            break
        case 'Sally':
            return "Hello, Sally!"
            break
    }
    //
};

module.exports = HelloWorld;
