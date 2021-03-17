console.log("---Let's Learn JavaScript---")

// ---Variables & Scope---
console.log('// ---Variables & Scope---');

// 1. How do you assign a variable?
console.log('// 1. How do you assign a variable?');

// Ans
let mightChange = [1, 2, 3];
const shouldNotChange = {name: 'Mark', age: 26};
var imGloballyScoped = `There is ${mightChange[0]} person named ${shouldNotChange.name}`;

console.log(mightChange);
console.log(shouldNotChange);
console.log(imGloballyScoped);

// 1b. What are the different data types in JavaScript?
console.log('// 1b. What are the different data types in JavaScript?');

//Ans
let string = 'Hi there!';
let number = 26;
let boolean = true;
// let undefined;
let nullType = null; //Not equivalent to '' or 0;
let object = {
  name: 'Darth Vaders',
  howCool: 'Very Cool',
}
let array = ['Darth Vaders', 'Very cool', 6]
let functionType = function(){
  return 'This is a function'
} //Technically also just an object but noteworthy

console.log(string, number, boolean, nullType, object, array, functionType);

// 1c. Try creating an object which contains a string, number, boolean and array
console.log('// 1c. Try creating an object which contains a string, number, boolean and array');

//Ans
let darthVaders = {
  howCool: 'Very Cool',
  numberOfPeople: 6,
  goingToDoGreatInCourse: true,
  people: ['David', 'Peter', 'Charles', 'Tim', 'Noble', 'Jensen'],
}
console.log(darthVaders);
// 1d. Try creating an array which contains two objects
console.log('// 1d. Try creating an array which contains two objects');

//Ans
let darthVaderPeople =
[
  {
    name: 'David',
    position: 'TA',
    tired: true,
  },
  {
    name: 'Jensen',
    position: 'Cool Student',
    tired: false
  }
]
console.log(darthVaderPeople);
// 2. What is the difference between let and var?
console.log('// 2. What is the difference between let and var?');

// Ans
// TLDR: Scope and redeclaration

function adjustScope() {
    let a = 'Hello';
    var b = 'World';

    console.log(a, b);

    {
        let c = "Goodbye";
        var d = "Global";
        console.log(c, d);
    };

    //2a
    // console.log('This will fail due to Scope:');
    // console.log(`${a}, ${b}, ${c}, ${d}`);
    
    //2c
    // let c = 'Goodbye';
    // let d = 'Global';
    // console.log(`${a}, ${b}, ${c}, ${d}`);

    //2d
    // // 'This will fail as you cant redeclare with let:
    // let c = 'Greatbye';
    // let d = 'International';
    // console.log(`${a}, ${b}, ${c}, ${d}`);
    
    //2e
    // If the variables were declared with var you can redeclare with var:
    // var c = 'Greatbye';
    // var d = 'International';
    // console.log(`${a}, ${b}, ${c}, ${d}`);
}

adjustScope();

// ---Control Flow (Conditionals)---
console.log('// ---Control Flow (Conditionals)---');

// 1. What are some examples of control flow
console.log('// 1. What are some examples of control flow');

// Ans: if (elseif, else), switch, while

// 2. Write a statement using the below object which includes an if, elseif and else statement which console.log's if a pet is a cat, bird or t-rex
console.log(`// 2. Write a statement using the below object which includes an if, elseif and else statement which console.log's if a pet is a cat, bird or t-rex`);

let pet = 'furry'

if (pet === 'furry') {
    console.log(`It's a cat`);
} else if (pet === 'wings') {
    console.log(`It's a bird`);
} else {
    console.log(`It's a T-rex`);
}

//2b. Try experimenting with how you might redo the above if you have the following object:
console.log('//2b. Try experimenting with how you might redo the above if you have the following object:');
let petTwo = {heightInFeet:12, teeth:'sharp', tail:true,wings:false}

if (petTwo.heightInFeet > 7) {
  console.log(`It's a T-Rex`);
} else if (petTwo.wings === true) {
  console.log(`It's a bird`);
} else {
  console.log(`It's a T-rex`);
}

// 3. Change this to a switch statement
console.log('// 3. Change this to a switch statement');

// switch (pet.mainAttribute) {
//     case 'furry':
//         console.log(`It's a cat`);
//         break;
//     case 'wings':
//         console.log(`It's a bird`);
//         break;
//     default:
//         console.log(`It's a T-Rex`);
//         break;
// }

// 4. What is a While Loop? Try writing a loop.
console.log('// 4. What is a While Loop? Try writing a loop.');

// Ans: a statement which runs as long as a condition evaluates to true 
let i = 0;
while (i<4) {
    console.log(`I ran ${i+1} times`);
    i++;
}

console.log('// ---Control Flow (Loops)---');

// 1. What values do you expect to come out of the following statement:
console.log('// 1. What values do you expect to come out of the following statement:');
let birthYear = [2006, 1967, 2012, 1985, 1975]

for(let i = 0; i < birthYear.length; i++) {
  let age = 2021 - birthYear[i]
  console.log(age);
  if (age > 17) {
    console.log("You're an adult")
  } else {
    console.log("You're still growing")
  }
}

// Ans:
// 1) 15 - You're still growing
// 2) 54 - You're an adult
// 3) 9 - You're still growing
// 4) 36 - You're an adult
// 5) 45 - You're an adult

// 2. How would you write this as a forEach loop?
console.log('// 2. How would you write this as a forEach loop?');

birthYear.forEach(year => {
    let age = 2021 - year;
    console.log(age);
    if (age > 17) {
      console.log("You're an adult")
    } else {
      console.log("You're still growing")
    }
});

// 3. Combining Conditional and Loop Statements: 
console.log('// 3. Combining Conditional and Loop Statements:'); 
// Write a for loop that goes through the numbers 1-12 and depending on the following, prints something to the console. 
// For numbers 1 through 6, print '...loading' to the console
// For numbers 7 through 10, print '...almost there!' to the console
// For number 11, print '...wait for it...' to the console
// For number 12, print 'DONE' to the console

// Ans: 
for (let i = 1; i < 13; i++) {
    if (i < 7) {
      console.log('...loading');
    }
    else if (i > 6 && i < 11) {
      console.log('...almost there!')
    }
    else if (i === 11) {
      console.log('...wait for it...')
    }
    else {
      console.log('DONE')
    }
  }
