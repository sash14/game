// function hello(){
//     alert('hello');
// }

// var container = document.getElementById('container');

// var counter = 0;

// function plus(){
//     counter++;
//     container.innerHTML = counter;
// }

// function minus(){
//     counter--;
//     container.innerHTML = counter;
// }

var target = document.querySelector("#root");
var childN = 1;

function selectItem(command) {
    var lastTarget = target;
    var buffer = target.parentElement;
    buffer = buffer.children;
    command = target.id === 'root' && command !== 'down' ? '' : command;

    switch (command) {
        case 'down':
            var bufferElement = target.querySelector(".active > *:not(span)");
            if (bufferElement) {
                target = bufferElement;
            }
            break;
        case 'up':
            target = target.parentElement;
            break;
        case 'next':
            childN = (childN + 1) < buffer.length ? childN + 1 : 1;
            target = buffer[childN];
            break;
        case 'prev':
            childN = (childN - 1) > 0 ? childN - 1 : buffer.length - 1;
            target = buffer[childN];
            break;
    }

    lastTarget.classList.remove('active');
    target.classList.add('active');
}

var number = 22;

function action(command) {
    // var lastTarget = target;
    // var buffer = target.parentElement;
    // buffer = buffer.children;

    switch (command) {
        case 'add':
            var newItem = `<div><span>${number}</span></div>`;
            number++;
            target.appendChild(newItem);
            break;
        case 'del':
            break;
    }
}
