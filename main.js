let name = 'John';
let age = 30;
// Template strings instead of concatenation

console.log( `My name is ${name} and I am am ${age}`);

let s = 'Hello World';

// get length
// properties dont have parenthesis
console.log(s.length);
//methods need parenthesis because it is a function related to the object 
console.log(s.toUpperCase());
//split takes it and splits it
console.log(s.split(''));

let t = 'technology, computers, it, code'
console.log(t.split(', '));

// Arrays - variables that hold multiuple values
//This is a constructor it will create an array
const number = new Array(1,2,3,4,5);
console.log(number);

const fruits = ['apples', 'oranges', 'pears'];
//push to the end of an array
fruits.push('mangos');
//push to the front of an array
fruits.unshift('banana')
//access an index of an array
console.log(fruits[1]);

console.log(fruits);

//Objects
const todos = [
    {
      id: 1,
      text: 'Take out trash', 
      isCompleted: true
    },
    {
      id: 2,
      text: 'Meeting', 
      isCompleted: true
    },
    {
      id: 3,
      text: 'Dentist', 
      isCompleted: false
    },
];
//To grab meeting
console.log(todos[1].text);

console.log(todos);
//convert to JSON object
const todoJSON = JSON.stringify(todos)
console.log(todoJSON);

//LOOPS
//For Loop
//3 parameters first is the assignment of the iterator, condition that nees to be met, increment
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//WHILE
let i = 0;
while(i<10){
    console.log(i);
    i++
}
//Looping thrugh the array of todos
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

//FOR OF LOOP
for(let todo of todos){
  console.log(todo.text);
}

//High order array method
//forEach,loops through
// map, allow us to create new array from an array
// filter, create a new array based on a condition
//forEach
todos.forEach(function(todo){
  console.log(todo.text);
});

// MAP
const todoText = todos.map(function (){
  return todos.id;
})
console.log(todoText);

//FILTER tacking on map as well. 
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
  }).map(function(todo){
      return todo.text;
  })
  console.log(todoCompleted);

//Conditionals
//if else statements and ternary
let x = 10;
//Let color equal x is greater than 10 then its red or else its blue
const color = x > 10 ? 'red' : 'blue';
//Switch statement
switch(color) {
  case 'red': 
    console.log('color is red');
    break;
  case 'blue': 
    console.log('color is blue');
    break;
  default: 
    console.log('color is NOT red or BLUE');
    break;
}

//Constructor Function
function Person (firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function (){
      return this.dob.getFullYear();
    }
}

//Instantiate object
const person1 = new Person('Brian', 'Santos', '9/6/1981')
const person2 = new Person('Mary', 'Poppins', '3/6/1990')

console.log(person1);
//to get a date
console.log(person2.dob);


