// Object Property's Meta Data
console.log(new Date(2022, 3, 21, 10, 15));

const obj = { hiddenProp: 0, label: 'obj0', number: 'string 0' };

Object.defineProperty(obj, 'hiddenProp', { enumerable: false });

console.log(obj);

for (let property in obj) {
  console.log(property);
}

Object.defineProperty(obj, 'number0', {
  value: 1,
  writeable: false,
});

obj.number0 = 0;

console.log(obj);


const testObj = {label :'testObjLabel'}

Object.defineProperty(testObj, 'label', {configurable : false})

testObj.label = 'testObj.Label'

console.log(testObj)
