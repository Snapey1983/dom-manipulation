// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val.document.scripts[2].getAttribute('src');

// console.log(val);


// document.getElementById()
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
//taskTitle.style.display = 'none';


// Change content 
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5')) // will only target the first h5 in the document

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue'; // can do nested elements also
document.querySelector('li:nth-child(3)').textContect = 'Hello World';
document.querySelector('li:nth-child(4)').textContect = 'Hello World';

document.querySelector('li:nth-child(odd)').style.background = '#e84610'
document.querySelector('li:nth-child(even)').style.background = '#457656'