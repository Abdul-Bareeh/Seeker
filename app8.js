// // Event Bubling

// document.querySelector('.card-tittle').addEventListener('click', function(){
//     console.log('card tittle');
// });
// //
// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });


// EVENT DELEGATION
// const deleteItem = document.querySelector('click', delete-item);

// deleteItem.addEventListener('click', deleteItem);
// document.body.addEventListener('click', deleteItem);
// function deleteItem(){
//     if(e.target.parentElement.className === 'delete.item secondary-content'){
//     console.log(e.target);
//     }
//}


if(e.target.parentElement.classList.contains('delete.item secondary-content')){
    console.log(e.target);
    }