// create the element

const li = document.createElement('li');

// add class
li.className = 'collection-item';

// Add id
li.id ='new-item';

//Add attributes
li.setAttribute('title', 'New item');

// create text node and append

li.appendChild(document.createTextNode('Hello world'));

// create new link element
const link = document.createElement('a')
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link in to li
li.appendChild(link);

// Apend li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);