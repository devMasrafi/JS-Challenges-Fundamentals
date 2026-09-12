const obj = {
  name: "Masrafi",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet(); // call 1 "Masrafi"

const standaloneGreet = obj.greet;
standaloneGreet(); // call 2 undefined

const person = {
  name: "Alex",
  sayName: function () {
    console.log(this.name);
  },
};

setTimeout(person.sayName, 100); //undefined
