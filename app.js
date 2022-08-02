// // //document.getElementById()


// // console.log(document.getElementById('showcase'));

// // //get things from the element
// // console.log(document.getElementById('showcase').id);
// // console.log(document.getElementById('showcase').className);


// // const showcase = document.getElementById('showcase');

// // // change styling
// // showcase.style.background = '#333';
// // showcase.style.color = '#fff';
// // // showcase.style.padding = '5px';
// // // //document.getElementById('showcase').style.display = 'none';

// // // // change content
// // // showcase.textContent = 'showcase List';
// // // showcase.innerText = 'My Lists';
// // // showcase.style.innerHTML = '<span style="color:red">Task List</span>';

// // // document.querySelector()
// // console.log(document.querySelector('#showcase'));
// // console.log(document.querySelector('.l-heading'));
// // console.log(document.querySelector('header'));

// // document.querySelector('li').style.color = 'red';
// // document.querySelector('ul li').style.color = 'blue';
// // document.querySelector('li:last-child').style.color = 'red';
// // document.querySelector('li:nth-child(3)').style.color = 'yellow';
// // document.querySelector('li:nth-child(4)').textContent = 'Hello-world';
// // document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// // document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';



// // // document.getElementByClassName

// // const  items = document.getElementsByClassName('collection-file');
// // // console.log(items);
// // // console.log(items[0]);
// // // items[0].style.color = 'red';
// // // items[3].textContent = 'Hello';

// // // const listItem = document.querySelector('ul').getElementsByClassName('collection-file');
// // // console.log(listItem);


// // // document.getelementByTagName

// // let lis = document.getElementsByTagName('li');
// // console.log(lis);
// // console.log([0]);
// // console.log(lis[0]);
// // lis[0].style.color = 'red';
// // lis[3].textContent = 'Hello';

// // conver Html collection into array

// // lis = Array.from(lis);

// // lis.reverse();

// // lis.forEach(function(li, index){
// // console.log(li.className)
// // li.textContent = `${index}: Hello`;
// // });

// // console.log(lis);


// // document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-file');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });


// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);
