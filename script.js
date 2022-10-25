// // ";" LINE TERMINATION!! GOOD PRACTICE!! keep these in , it is a line divider for end of line. GOOD PRACTICE
// //promise  introduced in es6 , nested callback would create network hell
// //Callback example for success/error handling
// // function funcNAme(successCallback, errorCallback) {
// //     //basic truthy falsy value
// //     let num = 1+1;
// //     if (num ===2) {
// //         //hard coded number, it will never reach fail
// //         successCallback('Success');
// //     } else {
// //         errorCallback("failed");
// //     }
// // }

// //do not have to define callbacks else where
// //funcName take 2 args, success callback and error callback, both will console.log the str
// // "," will separate the success from the fail
// // funcName(
// //     (str) => console.log(str),
// //     (str) => console.log(str)
// // );

// /// REPLACE THIS WITH A PROMISE
// //promises force asyncranisity 

// function funcNAme() {
//     //basic truthy falsy value
//     let num = 1 + 1;
//     //resolve and reject are like callback functions
//     //return a dept that will be fulfilled
//     // resolve and reject are NAMING CONVENTIONS
//     return new Promise((resolve, reject) => {
//         if (num === 2) {
//             //hard coded number, it will never reach fail
//             resolve('Success');
//         } else {
//             reject("Failed");
//         }
//     })
// }

// //no longer need arguments because there are no parameters
// // console.log(funcName());

// //uncaught in promise, is because not handling asynchronously

// funcName()
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));



// //     //func - find function statement and tag
// // function name(params) {
// //     response
// // }

