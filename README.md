# async-loop

Adds asynchronous version of javascript `loop` functionality to [caolan/async](https://github.com/caolan/async).

# Installation

```
npm install wiggzz/async-loop
```

# Usage

```javascript
var asyncLoop = require('async-loop');

var count = 0;
asyncLoop(function(_break,_continue) {
  if(++count > 2) {
    _break();
  } else {
    _continue();
  }
}, function() {
  console.log('Looped ' + count + ' times.');
});

// output:
// Looped 3 times.

```
