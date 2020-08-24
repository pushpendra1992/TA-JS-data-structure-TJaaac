1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]` // false, Both array holds different references and array(obj) compare by its address not by value.
- What is the value of obj? // {surname:: 'Stark'}, Because it reassign the reference.
- `obj == newObj` // false, References are different
- `obj === newObj` // false
- `user === newObj`// false, Both array holds different references
- `user == newObj`// false
- `user == obj`// true ,Both array holds same references
- `arr == arr1` //error, arr1 is not defined.
- `arr === arr1` // error, arr1 is not defined.

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1); //{name: 'Alex', age: 30}
console.log(person2); // {name: 'john', age: 50}
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //1. true
console.log(brothers.length === brothers.length); //2. true
```
