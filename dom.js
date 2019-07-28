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
ul.firstElementChild.textContent = 'Hello!!';
ul.children[1].innerText = 'Brian';
ul.lastElementChild.innerHTML = '<h1>Hello again!!</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// Events
btn.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>ß'
})

const myForm = document.querySelector('')
// Start at 1:31:57