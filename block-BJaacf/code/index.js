// 1. Create an array named numbers and store 5 number values in it
let numbers = [5, 6, 7, 8, 9]
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
console.log(sum / numbers.length)
// 4. Find the highest number in the array and print it to the console using console.log()
let highest = 0;
for (let i = 0; i < numbers.length - 1; i++) {
    (numbers[i + 1] > numbers[i]) ? highest = numbers[i + 1]: highest = numbers[i];
}
console.log(highest);
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowest = 0;
for (let i = 0; i < numbers.length - 1; i++) {
    (numbers[i + 1] > numbers[i]) ? lowest = numbers[i]: lowest = numbers[i + 1];
}
console.log(lowest);
// 6. Find the even numbers in the array and print them to the console using console.log()
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
        console.log(numbers[i]);
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0)
        console.log(numbers[i]);
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 == 0)
        console.log(numbers[i]);
}
// 9. Log all the element of the array one by one
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 10. Find all the number in the array that is divisible by 3
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0)
        console.log(numbers[i]);
}