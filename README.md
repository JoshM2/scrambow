# Scrambow - Puzzle Scramble Generator
![scrambo](http://rawgithub.com/nickcolley/scrambo/master/scrambo.svg)

## Usage
```javascript
// Generate a new 4x4 scramble with the seed of 1
var seeded_scramble = new Scrambow().setType('444').setSeed(1).get();
console.log(seeded_scramble);

// Generate 5 scrambles (defaults to 3x3)
var multiple_scrambles = new Scrambow().get(5);
console.log(multiple_scrambles);
```

## Cli
```bash
# install
npm install -g scrambow
# or
yarn global add scrambow

# example usage
scrambow -t 333 -n 5
```
### Command line options
```
-V, --version        output the version number
-n, --number [num]   set amount of scrambles to generate
-t, --type [string]  set the scramble type (default: "333")
-s, --seed [num]     set seed
-l, --length [num]   set scramble length
-h, --help           output usage information
```

## Node.js
```bash
npm install scrambow
```
```javascript
var Scrambow = require('scrambow').Scrambow;

var threebythree = new Scrambow(); // Defaults to 3x3
console.log(threebythree.get(5)); // Returns 5 scrambles
```

## API
```javascript
.get(num); // Returns a number of scrambles, defaults to 1.
.setType(str); // Sets the scramble type, defaults to 333.
.setSeed(num); // Repeatable scrambles.
.setLength(num); // Set scramble length, currently only for NNN, minx scrambles.
```

## Current status
Working! (I think)

## Credits
This is a fork of [scrambo](https://github.com/nickcolley/scrambo)
