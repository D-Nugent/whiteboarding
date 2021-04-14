// Question One
// Write a function that takes an array of strings and returns an array of numbers which represents the length of each string.

// Example: [‘bunny’,’beer’,’dancing’,’teal’] would return [5,4,7,4]
// Example Solution:

const exampleArrayOfStrings = ['bunny','beer','dancing','teal']

const getStringLength = (arrayOfStrings) => arrayOfStrings.map(word => word.length)

console.log(getStringLength(exampleArrayOfStrings));

// Question Two
// Part A:
// Based on the array of objects below, write a function that returns an array of objects that includes only the '"name"', 'favouriteColour', '"favouriteSport"' keys. 
const dataExample = [
    {
    "name": 'Charles',
    "favouriteColour": 'Blue',
    "favouriteSport": 'Basketball',
    "favouriteMovie": 'Sleepless In Seattle',
    "zombieApocalypseWeaponOfChoice": 'Machete',
    "secretSkills": 'Master of Cupcake Baking',
    "id": '4a',
    },
    {
    "name": 'Jensen',
    "favouriteColour": 'Red',
    "favouriteSport": 'Ultimate Frisbee',
    "favouriteMovie": 'Legally Blonde',
    "zombieApocalypseWeaponOfChoice": 'Fists of Rage',
    "secretSkills": 'Can somehow do a quadruple backflip',
    "id": '3j',
    },
    {
    "name": 'Peter',
    "favouriteColour": 'Green',
    "favouriteSport": 'Dodgeball',
    "favouriteMovie": 'Its a wonderful life',
    "zombieApocalypseWeaponOfChoice": 'Crossbow',
    "secretSkills": 'Master of Seduction',
    "id": '2f',
    },
    {
    "name": 'Tim',
    "favouriteColour": 'Purple',
    "favouriteSport": 'Tennis',
    "favouriteMovie": 'Crocodile Dundee',
    "zombieApocalypseWeaponOfChoice": 'His Mind',
    "secretSkills": 'Can recite all of shakespeares plays from memory',
    "id": '9s',
    },
]

const lessData = (arrayOfObjects) => arrayOfObjects.map(person => {
    return {
        name: person.name,
        favouriteColour: person.favouriteColour,
        favouriteSport: person.favouriteSport
    }
    })
console.log(lessData(dataExample));

const lessDataTest = (arrayOfObjects) => arrayOfObjects.map(person => (({ name, favouriteColour, favouriteSport }) => ({ name, favouriteColour, favouriteSport}))(person));

console.log(lessDataTest(dataExample));

// Part B:
// Using the same data as above, re-write your function so that it can take an optional argument for an ‘id’ that, if present, it will return the same response as Part A but only return the objects that have an id that matches this argument.

const lessDataOptional = (arrayOfObjects, idFilter) => arrayOfObjects.filter(person => person.id===idFilter).map(person => {
    return {
        name: person.name,
        favouriteColour: person.favouriteColour,
        favouriteSport: person.favouriteSport
    }
    })
console.log(lessDataOptional(dataExample,'9s'));

// Question Three
// Write a function that takes two strings as arguments and returns a boolean if the strings are Anagrams of one another.

// Example: (‘heart’, ‘earth’) would return true whereas (‘heart’,’earthly’) would return false

