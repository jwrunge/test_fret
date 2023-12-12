const Fret = require('fret');

class HashChangeTracker {
  name = "Unnamed HashChangeTracker";
  value;
  track = Fret();

  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  update(value) {
    this.track.check(value, this.value).then((result)=> this.value = result);
  }
}

module.exports = {
  HashChangeTracker
}