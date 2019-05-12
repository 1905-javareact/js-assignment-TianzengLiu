/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//Object literal

let person1 = {name: "Tony", age: 18} 



class Person {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

}

let person = new Person("Tony", 18, 1);

console.log(person);
console.log(person1);