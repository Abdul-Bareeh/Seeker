// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('Hello World');

//     //e.preventDefault();
// });

 document.querySelector('.clear-tasks').addEventListener('click', onClick);

    function onClick(e){
    //    console.log('Clicked');

    let val;

    val = e;

// Event target element
val = e.target;
val = e.target.id;
val = e.target.className;
val = e.target.classList;
e.target.innerText='classList';

// event type
val = e.type;

// Timestamp
val = e.timeStamp;

// get the coordinate  relative to the window
val = e.clientY;
val = e.clientX;

// cords event relative to the element
val = e.offsetY;
val = e.offsetX;
    console.log(val);
}
