function randomString() {
  const bank = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789";
  let random = '';
  for(let i = 0; i < 300; i++){
      random += bank[Math.random() * bank.length];
  }
  return random;
}

function randomInt() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function createLargeArray(size, type) {
  let t = performance.now();
  let arr = [];
  for(let i = 0; i < size; i++) {
    let value = type === "string" ? randomString() : randomInt();
    arr.push(value);
  }
  console.log(`Array of ${size} ${type}s created in ${performance.now() - t}ms`);
  return arr;
}

function createLargeMap(size, type) {
  let t = performance.now();
  let map = new Map();
  for(let i = 0; i < size; i++) {
    let value = type === "string" ? randomString() : randomInt();
    map.set(i, value);
  }
  console.log(`Map of ${size} ${type}s created in ${performance.now() - t}ms`);
  return map;
}

module.exports = {
  createLargeArray,
  createLargeMap
}