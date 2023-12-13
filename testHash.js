// const HashChangeTracker = require("./hashTracker.js").HashChangeTracker;
const createLargeArray = require("./setupFuncs.js").createLargeArray;
const createLargeMap = require("./setupFuncs.js").createLargeMap;
const trivialUpdate = require("./updateFuncs.js").trivialUpdate;
const arrNum = 10_000;

//Get JSON from file
const fs = require("fs");
const testFile = fs.readFileSync("testHash.json", "utf8");
let t = performance.now();
const testJSON = JSON.parse(testFile);
console.log(`~10MB JSON parse time: ${(performance.now() - t).toFixed(3)} ms`);
t = performance.now();
const v = JSON.stringify(testJSON);
console.log(`~10MB JSON stringify time: ${(performance.now() - t).toFixed(3)} ms`);

//Set up large values
let numArray = createLargeArray(arrNum, "int");
let strArray = createLargeArray(arrNum, "string");
let numMap = createLargeMap(arrNum, "int");
let strMap = createLargeMap(arrNum, "string");

const equal = require("fast-deep-equal/es6");

t=performance.now();
console.log("EQ? numArray: " + equal(numArray, numArray));
console.log(performance.now() - t, "ms");

t=performance.now();
console.log("EQ? numMap: " + equal(numMap, numMap));
console.log(performance.now() - t, "ms");

t=performance.now();
console.log("EQ? strArray: " + equal(strArray, strArray));
console.log(performance.now() - t, "ms");

t=performance.now();
console.log("EQ? strMap: " + equal(strMap, strMap));
console.log(performance.now() - t, "ms");

t=performance.now();
console.log("EQ? numArray: " + equal(trivialUpdate(numArray), numArray));
console.log(performance.now() - t, "ms");

t=performance.now();
console.log("EQ? numMap: " + equal(trivialUpdate(numMap), numMap));
console.log(performance.now() - t, "ms");

t=performance.now();
console.log("EQ? strArray: " + equal(trivialUpdate(strArray), strArray));
console.log(performance.now() - t, "ms");

t=performance.now();
console.log("EQ? strMap: " + equal(trivialUpdate(strMap), strMap));
console.log(performance.now() - t, "ms");

//Set up some test data
// let trackers = [];

// trackers.push(new HashChangeTracker("string", "This is just a regular string. It may be a little long-ish, but it's not too bad."));
// trackers.push(new HashChangeTracker("number", 1234567));
// trackers.push(new HashChangeTracker("json string (~10MB)", testFile));
// trackers.push(new HashChangeTracker("json obj (~10MB)", testJSON));
// trackers.push(new HashChangeTracker(`ARRAY of INTS (x${arrNum})`, numArray));
// trackers.push(new HashChangeTracker(`ARRAY of 300-CHAR STRINGS (x${arrNum})`, strArray));
// trackers.push(new HashChangeTracker(`MAP of INTS (x${arrNum})`, numMap));
// trackers.push(new HashChangeTracker(`MAP of 300-CHAR STRINGS (x${arrNum})`, strMap));

// async function updates() {
//     //Initial hash
//     console.log("\nChecking initial value sizes:");
//     for(let tracker of trackers) {
//         const start = performance.now();
//         await tracker.track.check(tracker.value);
//         const time = performance.now() - start;
//         console.log(`\t${tracker.name}: ${time.toFixed(3)} ms; Size: ${
//             (typeof 
//                 tracker.value === "number" ? 
//                 tracker.value : 
//                 tracker.value.hasOwnProperty("length") ?
//                 tracker.value?.length :
//                 tracker.value.hasOwnProperty("size") ? 
//                 tracker.value?.size :
//                 JSON.stringify(tracker.value).length
//             )}`);
//     }

//     //No changes
//     for(let i of [1,2,3]) {
//         console.log(`\nNo updates: TEST ${i}`);
//         for(let tracker of trackers) {
//             console.log("\nNAME:" + tracker.name);
//             const new_value = structuredClone(tracker.value);
//             const start = performance.now();
//             await tracker.track.check(new_value, tracker.value);
//             const time = performance.now() - start;
//             console.log(`\t${tracker.name}: ${time.toFixed(3)} ms`);
//         }
//     }

//     //Trivial changes
//     for(let i of [1,2,3]) {
//         console.log(`\nPerformance of trivial update: TEST ${i}`);
//         for(let tracker of trackers) {
//             const new_value = trivialUpdate(tracker.value);
//             const start = performance.now();
//             await tracker.track.check(new_value, tracker.value);
//             const time = performance.now() - start;
//             console.log(`\t${tracker.name}: ${time.toFixed(3)} ms`);
//         }
//     }
// }

// updates();