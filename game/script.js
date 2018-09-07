var click = true;
function handler(n) {
    var currentItem = document.querySelector(`[data-n='${n}']`);
    if (!currentItem.innerHTML) {
        currentItem.innerHTML = `<span>${click ? "+" : "0"}</span>`;
        click = !click;
    }
    console.log(currentItem);
}

for (var i = 0; i < 9; i++) {
    document.querySelector('#game-wrapper').innerHTML += `<div onclick='handler(${9 - i})' data-n='${9 - i}'></div>`;
}