var ffi = require('ffi');
var ref = require('ref');
var int = ref.types.int;

// This is the absolute directory
var mathlibLoc = './lib/build/Release/math.dylib';

var math = ffi.Library(mathlibLoc, {
    "add": [int, [int, int]],
    "minus": [int, [int, int]],
    "multiply": [int, [int, int]]
});

module.exports = math;
