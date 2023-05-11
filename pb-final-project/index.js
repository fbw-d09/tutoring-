console.clear();

class Hussi {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  infos() {
    console.log(`My name is ${this.name}, I'm ${this.age} years old, and I work as a ${this.job}.`);
  }
}

class Miad extends Hussi {
  constructor(name, age, job, hoppy, achiev) {
    super(name, age, job);
    this.hoppy = hoppy;
    this.achiev = achiev;
  }

  getHoppy() {
    console.log('Dance');
  }
}

const person = new Hussi('Hussi', 40, 'web developer');
const person1 = new Miad('Miad', 12, 'web developer', 'dancing', 'achievement1');

person.infos();
person1.infos();
