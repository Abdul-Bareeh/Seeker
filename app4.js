// Replace Element

// create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-tittle';
//New text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-tittle');

// parent
const cardAction = document.querySelector('.card-action');

//Replace
cardAction.replaceChild(newHeading, oldHeading); 

// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove
lis[0].remove();

// Remove list item
list.removeChild(lis[3]);

//classes and attriute

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val; 
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('bayo');
link.classList.remove('bayo');
val = link;

// Attribute
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('tittle', 'Google');
val = link.hasAttribute('tittle');
val = link;
link.removeAttribute('tittle');
console.log(val);