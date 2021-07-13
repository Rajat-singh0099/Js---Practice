// 1. Ways to print in Javascipt
// console.log("Hello World");
// alert("me");
// document.write("This is document write");

// 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log") 

// 3. Js variables
// var arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(function(element){
//     console.log(element);
// });

// let myDate = new Date();
// console.log(myDate);

// tn = document.getElementsByTagName('div');
// // console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('p');
// createdElement2.innerText = "This is a created 2nd para";
// tn[0].appendChild(createdElement2);

// createdElement3 = document.createElement('b');
// createdElement3.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement3, createdElement2);

// Selecting using query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// Events in javascript
// function clicked(){
//     console.log('The button was clicked...');
// }

// window.onload = function(){
//     console.log('The document was loaded');
// }

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked.</b>"
//     console.log("Clicked on Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked.</b>"
//     console.log("Mouse down when clicked on Container");
// })


// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container");
// })

// function summ(a, b){
    //     return a + b;
    // }
    
    // Arrow functions
//     summ = (a, b) => {
//         return a + b;
//     }

// // Set timeout and setinterval
// logkaro = () => {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired.</b>"
//     console.log("I am your log");
// }

// clr = setTimeout(logkaro, 3000);

// clr = setInterval(logkaro, 2000);

// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// Javascript localStorage
// localStorage.setItem('name', 'Rajat');
// localStorage
// localStorage.getItem('name', 'Rajat');
// localStorage.removeItem('name');
// localStorage.clear();

// Json
// obj = {name: "Rajat", length: 1, a: {this: 'tha"t'}};
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
// parsed = JSON.parse(`{"name":"Rajat","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// Template literalls - Backticks
// a = 45;
// console.log(`this is ${a}`);