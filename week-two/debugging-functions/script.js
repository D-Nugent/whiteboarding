// Removing Duplicate Values

// solution:
// - split sentence by spaces, not an empty string
// - change exit condition to be i < words.length, not greater than
// - split words by empty string not a space
// - change first letter assignment for words to be = not +=
// - join by empty string not a space
// - return words joined by a space, not empty string
function convertToActualTitleCase(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('');
      words[i][0] = words[i][0].toUpperCase();
      words[i] = words[i].join('')
    }
    return words.join(' ');
  }
  console.log(convertToActualTitleCase('the quick brown fox'))

// Capitalizing the First Letter of Each Word

// solution:
// - change assignment of newArray to be an array, not an object
// - check for indexOf array[i] (current value) not index (i)
// - check for indexOf to be strictly equals to -1
// - push the current value to the newArray, not the index
// - return the newArray, not the original array
let removeActualDuplicates = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (newArray.indexOf(array[i]) === -1) {
        newArray.push(array[i])
      }
    }
    return newArray;
  }
  console.log(removeActualDuplicates([1, 1, 1, 2, 3, 4, 4, 4]))

// Return an Array with Even Numbers from Another Array

// solution:
// - change exit condition of for loop to remove the length - 1
// - remove semicolon after i++
// - change if condition to not be an assignment (= => ===)
// - change if condition to check the current value (numbers[i]) not numbers the array
// - remove semicolon after the if condition (this one is tricky - if you don't remove you will always have the if condition block execute)
// - evenNumbers should push numbers[i] (current value) rather than index (i)
// - return statement should be moved outside of the for loop - otherwise for loop will only run once
function displayEvenNumbersWell() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  console.log(displayEvenNumbersWell())

//BONUS: Re-write the above so that it can accept an upTo parameter.

// solution:
const returnValues = (arr) => {
    let object = {
        max: arr[0],
        min: arr[0],
        avg: 0
    }
    // or use a for loop here
    arr.forEach(item => {
        if (item > object.max) {
            object.max = item
        }
        if (item < object.min) {
            object.min = item
        }
        object.avg += item
    })
    object.avg = object.avg / arr.length
    return object
  }