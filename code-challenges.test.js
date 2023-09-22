// ASSESSMENT 3: Coding Practical Questions with Jest

const { array } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// describe("fibMaker", () => {
//   it("returns array containing Fibonacci sequence with the length of the array determined by input number", () => {
//     expect(fibMaker(6)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibMaker(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })

// Pseudo code:
// function name: fibMaker
// input: number over 2
// output: array of Fibonacci sequence equal in length to the number entered
// process: for loop, .slice() built-in method

// const fibArr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

// const fibMaker = (number) => {
//   for (i = 0; i < fibArr.length; i++)
//   return fibArr.slice(0, number)
//   }



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// describe("studyMin", () => {
//   it("returns an array of the object values sorted from least to greatest", () => {
//     expect(studyMin(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(studyMin(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: studyMin
// input: object
// output: array
// process: object.values() method, .sort method, compare function
// const compFun = (a,b) => {
//   return a-b
// }
// const studyMin = (object) => {
// let mins = Object.values(object)
// return mins.sort(compFun)
// }


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("accumulate", () => {
  it("takes in an array and returns a new array of the accumulating sum", () => {
    expect(accumulate(6=accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulate(accountTransactions2)).toEqual([250, -89, 100, -96])
    expect(accumulate(accountTransactions3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: accumulate
// input: array
// output: array of accumulating sum
// process: .reduce() method

// I got stuck on this problem because after doing some research, I am pretty sure I am supposed to use the .reduce() method, but I'm having trouble understanding the concept of the callback function, and how to use the built-in values. I don't understand if the callback function is a seperate function that I write and then plug into the parentheses after the reduce method, or is it something that is just built in and can be used by just putting values in the parantheses? 

const accumulate = (array) => {
  array.reduce()
  // I think this is where I would use the callback function but I don't understand the syntax.
}

