const slider = document.getElementById("slider");
const selector = document.getElementById("selector");
const selectValue = document.getElementById("selectValue");

const grid = document.querySelector('#grid');
const addTile = document.createElement('div');
    addTile.classList.add('tile');


selectValue.innerHTML = slider.value;

slider.oninput = function(){
    selectValue.innerHTML = this.value;
    selector.style.left = this.value + "%";

    // Altered Traits - Meditation book
}

let buttonLog = document.querySelector("#submit");

buttonLog.addEventListener('click', function getRange(){
    let num = document.getElementById("slider").value;
    console.log(num);
    grid.appendChild(addTile);
});



