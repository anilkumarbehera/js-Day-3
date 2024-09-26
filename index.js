// Returnable functions

// function fullName(fName, lName){
//     return "fullName: " + fName + " "+ lName;
// }

// function printData(fName, lName){
//     let res = fullName(fName, lName)
//     document.writeln(res)
// }

// printData("anil", "kumar");

//  Explanation: Insted of doing th same logic in same function  we created a function which take care about fullName and return the fullName , 
//               when it return it will come to a variable i.e res and where we are printing the res.


//String concatenation(joining 2 or more string)

// 1. operator overloading(joing 2 more string using + operator)
// function fullName(fName, lName){
//     return "fullName: " + fName + " "+ lName;
// }

// function printData(fName, lName){
//     let res = fullName(fName, lName)
//     document.writeln(res)
// }

// printData("anil", "kumar");

// 2. Interpolation(string rep in backtick`` and variable added by using ${value})

// function fullName(fName, lName){
//     return `fullName: ${fName} ${lName}`;
// }

// function printData(fName, lName){
//     let res = fullName(fName, lName)
//     document.writeln(res)
// }

// printData("anil", "kumar");

// 3. by using concat method(concat is a string method to join 2 /more string)
// function fullName(fName, lName){
//     let x = "fullName: "
//     return x.concat(fName, " ", lName);
// }

// function printData(fName, lName){
//     let res = fullName(fName, lName)
//     document.writeln(res);
// }

// printData("anil", "kumar");

//imp.  Anonymous/ Variable defined function
// Here always use define const as declare a variable 

// printData("Anil", "kumar"); // undefined/null
// function fullName(fName, lName){
//     let x = "fullName: "
//     return x.concat(fName, " ", lName);
// }

// var/let/const printData = function(fName, lName){
//     let res = fullName(fName, lName)
//     document.writeln(res)
// }

//printData("Anil", "kumar"); ans: anil kumar
// imp Note: variable defined function(var,let, const ) will not support hoisting

// Arrow function(short hand syntax of anonymous function)
// function fullName(fName, lName){
//         let x = "fullName: "
//         return x.concat(fName, " ", lName);
//     }
    
// const printData = (fName, lName) =>{
//         let res = fullName(fName, lName)
//         document.writeln(res)
//     }
    
   // printData("Anil", "kumar");

// variation in Arrow function(Short hand syntax of arrow functions)
// Here no need to use {} and return
const fullName = (fName, lName) => `fullName: ${fName} ${lName}`

const printData = (fName, lName) =>{
    let res = fullName(fName, lName)
    document.writeln(res);
}
printData("Anil", "kumar");

// Self invoking function(SIF) When a function calling itself

(function(){
    alert (1);
})();

// IIF - A function invokes immediately when the function definition created
