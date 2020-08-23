```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true // holds same reference/address 
- `user === newUser;` // true // holds same reference/address 
- `user.name === newUser.name;` //true // holds same reference/address 
- `user.name == newUser.name;` //true // holds same reference/address 
- `user.sibling == newUser.sibling;` //true // holds same reference/address 
- `user.sibling === newUser.sibling;` //true // holds same reference/address 
- `user.sibling == allBrothers;` // false // reference/address are differenrt
- `user.sibling === allBrothers;` // false // reference/address are differenrt
- `brothersCopy === allBrothers;` // false // reference/address are differenrt
- `brothersCopy == allBrothers;` // false // reference/address are differenrt
- `brothersCopy == user.sibling;` // true // holds same reference/address 
- `brothersCopy === user.sibling;` // true // holds same reference/address 
- `brothersCopy[0] === user.sibling[0];` // true // holds same reference/address 
- `brothersCopy[1] === user.sibling[1];` //true // holds same reference/address 
- `user.sibling[1] === newUser.sibling[1];` // true // holds same reference/address 
