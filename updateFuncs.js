function trivialUpdate(input) {
    if(typeof input === "string") return input += "abc";
    if(typeof input === "number") return input + 123456;
    if(Array.isArray(input)) return input.reverse();
    if(input instanceof Map) return new Map([...input].reverse());
    else if(typeof input === "object") return {...input, [Object.keys(input)[0]]: "abc"};
    else return input;
}

module.exports = {
    trivialUpdate
};