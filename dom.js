// // DOM Document Object Model 

// //Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));

// Loop through
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// Manipulating the DOM
const ul = document.querySelector('.items');
// ul.remove();
ul.firstElementChild.textContent = 'Hello!!'