const HashChangeTracker = require("./hashTracker.js").HashChangeTracker;
const createLargeArray = require("./setupFuncs.js").createLargeArray;
const createLargeMap = require("./setupFuncs.js").createLargeMap;
const arrNum = 100000;

//Get JSON from file
const fs = require("fs");
const testFile = fs.readFileSync("testHash.json", "utf8");
const testJSON = JSON.parse(testFile);

//Set up large values
let numArray = createLargeArray(arrNum, "int");
let strArray = createLargeArray(arrNum, "string");
let numMap = createLargeMap(arrNum, "int");
let strMap = createLargeMap(arrNum, "string");

//Set up some test data
let trackers = [];

trackers.push(new HashChangeTracker("string", "This is just a regular string. It may be a little long-ish, but it's not too bad."));
console.log(trackers[0].track)
trackers.push(new HashChangeTracker("number", 1234567));
trackers.push(new HashChangeTracker("json string (~10MB)", testFile));
trackers.push(new HashChangeTracker("json obj (~10MB)", testJSON));
trackers.push(new HashChangeTracker(`ARRAY of INTS (x${arrNum})`, numArray));
trackers.push(new HashChangeTracker(`ARRAY of 300-CHAR STRINGS (x${arrNum})`, strArray));
trackers.push(new HashChangeTracker(`MAP of INTS (x${arrNum})`, numMap));
trackers.push(new HashChangeTracker(`MAP of 300-CHAR STRINGS (x${arrNum})`, strMap));