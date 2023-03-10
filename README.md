# rb-methods

## Installation

`npm install rb-methods --save`

## Usage

`import 'rb-methods'` or `require('rb-methods)` 

Examples:

```javascript
import "rb-methods"

const numbers = [1, 4, 5, 6]
const foo = "foo"
const one = 1
const two = 2

const max = numbers.max
console.log(max)
// output: 6

const min = numbers.min
console.log(min)
// output: 1

const average = numbers.average
console.log(average)
// output: 4

const sum = numbers.sum
console.log(sum)
// output: 16

console.log(one.isEven)
// output: false 
console.log(one.isOdd)
// output: true

console.log(foo.first)
// output: "f"
```

## Disclaimer

Be aware that modifying built-in JavaScript objects like strings, arrays etc it is not considered a good practice. Use it at your own risk.