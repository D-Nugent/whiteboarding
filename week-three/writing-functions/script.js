// Write a function that takes in an array of integers and returns an object with keys minimum, maximum, average with correct values.
const returnValues = (arr) => {
    let object = {
        max: arr[0],
        min: arr[0],
        avg: 0
    }
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
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr)
console.log(returnValues(arr))
// can also use a reduce function 
const reduceValues = (arr) => {
  let object = arr.reduce((obj, item) => {
    if (item > obj.max) {
      obj.max = item
    }
    if (item < obj.min) {
      obj.min = item
    }
    obj.avg += item;
    return obj;
  }, {max: arr[0], min: arr[0], avg: 0})
  object.avg = object.avg / arr.length
  return object;
}
let newArr = [1, 6, 4, 8, 2, 9, 0, 12]
console.log(newArr)
console.log(reduceValues(newArr))
//BONUS: Rewrite your above function so that it accepts a string of space seperate numbers
//let arr = string.split(' ').map(number => Number(number));
//^add this to the first line of the function
//============ for those who need more challenging questions ======
//Write a function that takes in an array OF arrays filled with positive integers, and return the SUM of the averages of those arrays. (eg. given [[1,2,2,1], [2,2,2,2]] should return 3.5)
let master = [[1, 1, 2, 2], [2, 2, 2, 2]]
//function to get average of an array
const avg = (arr) => {
  let average = arr.reduce(function(total, item) {
    return total + item
  }, 0)
  return average / arr.length
}
//add up all averages to give a sum
let sum = 0;
master.forEach(item => {
  sum += avg(item);
})
//rather than use forEach above, can use reduce 
  //let sum = master.reduce(function(acc, item) {
  //  return acc += avg(item)
  //}, 0)
//full solution using nested reducers
let sum = master.reduce(function(acc, arr) {
  let average = arr.reduce(function(total, item) {
    return total + item
  }, 0)
  return acc += average / arr.length
}, 0)
console.log(sum)