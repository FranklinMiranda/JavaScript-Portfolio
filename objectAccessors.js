// Object Accessors
console.log(new Date(2022, 3, 19, 22, 28));

const person = {
  nameF: 'franklin',
  nameL: 'miranda',
  get fullName() {
    return this.nameF + ' ' + this.nameL;
  },
};

console.log(person.fullName);

Object.defineProperty(person, 'fullNameUpper', {
  get: function () {
    return this.fullName.toUpperCase();
  },
});

console.log(person.fullNameUpper);

Object.defineProperty(person, 'nameSetter', {
  set: function (value) {
    return (this.nameL = value);
  },
});

person.nameSetter = 'miran';
console.log(person.nameL)