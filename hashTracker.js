const Fret = require('fret');

class HashChangeTracker {
  name = "Unnamed HashChangeTracker";
  value;
  track = Fret({
    onHash: ()=> {
      console.log(`\t** Hash changed for ${this.name}`);
    },
    onChange: (value)=> {
      console.log(`\t** Value changed for ${this.name}`);
      this.value = value;
    },
    onIgnore: ()=> {
      console.log(`\t** Value ignored for ${this.name}`);
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