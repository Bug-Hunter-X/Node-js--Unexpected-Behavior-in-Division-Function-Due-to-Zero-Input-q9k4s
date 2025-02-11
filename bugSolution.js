```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 'Division by zero is undefined'; // Or throw an error: throw new Error('Division by zero');
  }
  return a / b;
}
```