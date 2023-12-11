const Fret = require('fret');
console.log(Fret)

class HashChangeTracker {
  name = "Unnamed HashChangeTracker";
  value;
  track = Fret({
    onHash: ()=> {
      console.log(`Hash changed for ${this.name}`);
    },
    onChange: (value)=> {
      console.log(`Value changed for ${this.name} - new value: ${value}`);
      this.value = value;
    },
    onIgnore: (value)=> {
      console.log(`Value ignored for ${this.name} - current value: ${value}`);
    }
  });

  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  update(value) {
    this.track.check(value).then((result)=> this.value = result);
  }
}

module.exports = {
  HashChangeTracker
}