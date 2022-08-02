let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-file:first-child');


val = listItem
val = list,

// get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;


//get children element nodes

 val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';
//children of children
val = list.children[3].children[0]. id = 'test-link';
val = list.children[3].children[0];

//First child
val = list.firstChild;
val = list.firstElementChild;
//Lat child
val = list.lastChild;
val = list.lastElementChild;

// count Child elements
val =list.childElementCount;

// get parent Nodes
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// get prev sibling

val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(val);

