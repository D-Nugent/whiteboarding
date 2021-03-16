console.log("---Let's Learn JavaScript---")

// ---Variables & Scope---

// 1. How do you assign a variable?

// Ans
let mightChange = [1, 2, 3];
const shouldNotChange = {name: 'Mark', age: 26};
var imNotBestPractice = `There is ${mightChange[0]} person named ${shouldNotChange.name}`;

console.log(mightChange);
console.log(shouldNotChange);
console.log(imNotBestPractice);

// 2. What is the difference between let and var?

// Ans
// TLDR: Scope and redeclaration

function adjustScope() {
    let a = 'Hello';
    var b = 'World';

    console.log(a, b);

    function iWannaBeGlobal(){
        let c = "Goodbye";
        var d = "Global";
        console.log(c, d);
    };

    iWannaBeGlobal();

    // console.log('This will fail due to Scope:');
    // console.log(`${a}, ${b}, ${c}, ${d}`);
    
    // let c = 'Goodbye';
    // let d = 'Global';
    // console.log(`${a}, ${b}, ${c}, ${d}`);

    // // 'This will fail as you cant redeclare with let:
    // let c = 'Greatbye';
    // let d = 'International';
    // console.log(`${a}, ${b}, ${c}, ${d}`);
    
    // If the variables were declared with var you can redeclare with var:
    // var c = 'Greatbye';
    // var d = 'International';
    // console.log(`${a}, ${b}, ${c}, ${d}`);
}

adjustScope();

// ---Control Flow (Conditionals)---

// 1. What are some examples of control flow

// Ans: if (elseif, else), switch, while

// 2. Write a statement which includes an if, elseif and else statement which console.log's if a pet is a cat, bird or t-rex
let petCat = {mainAttribute: 'furry'}
let petBird = {mainAttribute: 'wings'}
let petTrex = {mainAttribute: '12 feet tall'}
let petTrexFull = {heightInFeet:12, teeth:'sharp', tail:true,wings:false}

let pet = {mainAttribute: 'furry'}

if (pet.mainAttribute === 'furry') {
    console.log(`It's a cat`);
} else if (pet.mainAttribute === 'wings') {
    console.log(`It's a bird`);
} else {
    console.log(`It's a T-rex`);
}
// 3. Change this to a switch statement

switch (pet.mainAttribute) {
    case 'furry':
        console.log(`It's a cat`);
        break;
    case 'wings':
        console.log(`It's a bird`);
        break;
    default:
        console.log(`It's a T-Rex`);
        break;
}

// 4. What is a While Loop?

// Ans: a statement which runs as long as a condition evaluates to true 
let i = 0;
while (i<4) {
    console.log(`I ran ${i+1} times`);
    i++;
}

// ---Control Flow (Loops)---

// 1. What values do you expect to come out of the following statement:
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
  


  // If there is a student who is finding content too easy and needs a challenge:

  // Bonus: Create a function that console logs a pyramid:
function triangle(size){
	for(let i = 1; i <= size; i++){ 
		let array = [];
		for(let j = size - i; j >=  0; j--){
			array.push(` `);
        }

        for(let k = 0; k < (i * 2 - 1); k++){
		array.push(`#`);
        }
		console.log(array.join(``));
	}
}

triangle(5);