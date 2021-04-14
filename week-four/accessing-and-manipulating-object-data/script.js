const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
 //Using the inventors variable above:
console.log(inventors);

// Testing Student Code

const codeTest = [...inventors].forEach((inventor) => {
    let inventor = {
        totalYear = inventor.passed - inventor.year
    }
});

console.log(codeTest);
 //1. Create a new array containing first and last names in a single string ***
let inventorNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(inventorNames);

 //2. Create a new array that only contains inventors if their first name starts with A ***
 let inventorNamesWithA = inventors.filter(inventor => inventor.first[0] === "A")
 console.log(inventorNamesWithA);

 //3. Create a new array with sentences that follow this format: 'firstName lastName was born in yearBorn and passed in yearPassed' ***
 let inventorDetailString = inventors.map(inventor => `${inventor.first} ${inventor.last} was born in ${inventor.year} and passed in ${inventor.passed}`)
 console.log(inventorDetailString);
 //4. Find the total years lived by all inventors ***
let inventorYearsLived = inventors.reduce((totalYears, inventor) => totalYears + (inventor.passed - inventor.year),0)
console.log(inventorYearsLived);
 //5. Find all the inventors that were born between the years 1850 and 1870 ***
 let inventorsBornIn = inventors.filter(inventor => inventor.year >=1850 && inventor.year <=1870)
 console.log(inventorsBornIn);
 //5b. Rewrite the above function so that it is reusable by taking two parameters to define the range ***
 let inventorsBornInRange = (dateFrom, dateTo) => inventors.filter(inventor => inventor.year >=dateFrom && inventor.year <=dateTo)
 console.log(inventorsBornInRange(1850,1870));
 //6. Find the average age of all inventors ***
 let inventorAverageAge = (inventors.reduce((totalYears,inventor) => totalYears + (inventor.passed - inventor.year),0)/inventors.length)
console.log(inventorAverageAge);
 //7. Reorder the inventors by the year they were born ***
 let inventorsSortedByYearBorn = inventors.sort((inventor, NextInventor) => inventor.year - NextInventor.year);
 console.log(inventorsSortedByYearBorn);
//  7b. Rewrite the above function so that it takes a boolean as a parameter to determine if the sort should be 'Ascending' or 'Descending' ***
    let inventorsSortedByYearBornToggle = (ascending) =>  [...inventors].sort((inventor, NextInventor) => ascending===true?inventor.year - NextInventor.year : NextInventor.year - inventor.year);
    console.log(inventorsSortedByYearBornToggle(false));
 //8. Reorder the inventors by their first name ***
 let inventorsSortedByFirstName = [...inventors].sort((inventor, NextInventor) => {
    if (inventor.first[0] > NextInventor.first[0]) {
        return 1
    } else if (inventor.first[0] < NextInventor.first[0]){
        return -1
    } else{
        return 0;
    }
});
 console.log(inventorsSortedByFirstName);