/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
document.write(got.houses);
console.log(got.houses);

// 2. Log the length of the "houses" key
document.write(got.houses.length);
console.log(got.houses.length);

// 3. Log the name of all houses in got one by one
for (let i = 0; i < got.houses.length; i++) {
  console.log(got.houses[i].name);
  document.write(got.houses[i].name);
}
// 4. Log the name of all the people in house Starks (index 0) one by one
for (let j = 0; j < got.houses[0].people.length; j++) {
  console.log(got.houses[0].people[j].name);
}
// 5. Log the name of all the people in house Lannisters (index 1) one by one
for (let j = 0; j < got.houses[1].people.length; j++) {
  console.log(got.houses[1].people[j].name);
}
// 6. Log the name of all the people in house Lannisters (index 1) one by one
for (let j = 0; j < got.houses[1].people.length; j++) {
  console.log(got.houses[1].people[j].name);
}
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
for (let j = 0; j < got.houses[1].people.length; j++) {
  console.log(`I am ${got.houses[1].people[j].name} and my bio is ${got.houses[1].people[j].description}`)
}
// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
for (let j = 0; j < got.houses[0].people.length; j++) {
  console.log(`I am ${got.houses[0].people[j].name} and my bio is ${got.houses[0].people[j].description}`)
}
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
for (let j = 0; j < got.houses[0].people.length; j++) {
  if (got.houses[0].people[j].name == 'Robb Stark') {
    console.log(`Name : ${got.houses[0].people[j].name} \nDescription : ${got.houses[0].people[j].description}`)
    break;
  } else
    continue;
}
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`

for (let j = 0; j < got.houses[1].people.length; j++) {
  if (got.houses[1].people[j].name == 'Tywin Lannister') {
    console.log(`Name : ${got.houses[0].people[j].name} \nDescription : ${got.houses[0].people[j].description}`)
    break;
  } else
    continue;
}
// 11. Push the name of the houses in an array named `houseNames` and Log the array
let arr = [];
for (let j = 0; j < got.houses.length; j++) {
  arr.push(got.houses[0].name);
}
console.log(arr);

// 12. Log the size of people in Starks house
console.log(got.houses[0].people.length);

// 13. Log the size of people in Lannisters house
console.log(got.houses[1].people.length);

// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
let obj = {};
obj.Starks = 4;
obj.Lannisters = 6;
console.log(obj);

// 15. Log the name of all the people of all the houses in got one by one
for (let i = 0; i < got.houses.length; i++)
  for (let j = 0; j < got.houses[i].people.length; j++) {
    console.log(got.houses[i].people[j].name);
  }
// 16. Push all names into a new array named `allPeople` and log the value array.
let arr = [];
for (let i = 0; i < got.houses.length; i++)
  for (let j = 0; j < got.houses[i].people.length; j++) {
    arr.push(got.houses[i].people[j].name);
  }
console.log(arr);

// 17. Log the value and length of `allPeople` array created above
for (let k = 0; k < allPeople.length; k++) {
  console.log(allPeople[k]);
}
console.log(allPeople.length);

// 18. Push all descriptions into an array named `allDescription`
let allDescription = [];
for (let i = 0; i < got.houses.length; i++)
  for (let j = 0; j < got.houses[i].people.length; j++) {
    allDescription.push(got.houses[i].people[j].description);
  }
console.log(allDescription);

// 19. Log the value and length `allDescription`
for (let k = 0; k < allDescription.length; k++) {
  console.log(allDescription[k]);
}
console.log(allDescription.length);
// 20. Only the the description whose length is more than 30. (use .lenght property on string to get the length)
for (let k = 0; k < allDescription.length; k++) {
  if (allDescription[k].length > 30)
    console.log(allDescription[k]);
  else
    continue;
}