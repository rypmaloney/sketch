const container = document.querySelector('#grid-container');
const clear = document.querySelector('#clear');

let slider = document.getElementById('sliderRange');
let currentSlider = document.getElementById('currentSlider');

clear.addEventListener('click', clearGrid)



//Makes initial grid
let cellsNum = 100;
makeGrid(100)


//SLIDER: updates slider number, removes previous grid, add news grid with slider.value
currentSlider.innerHTML = slider.value;
slider.oninput = function () {
    currentSlider.innerHTML = slider.value;
    removeAllChildNodes(container)
    makeGrid(slider.value)

}






// ******** FUNCTIONS ********* //

function makeGrid(cellsNum) {
    //Changes the CSS variable for the number of columns and rows
    let columnsRows = Math.round(Math.sqrt(cellsNum));
    document.querySelector(':root').style.setProperty('--column-row', columnsRows);
    //creates the individual cell divs - runs function with event listener
    for (i = 0; i < cellsNum; i++) {
        let cell = document.createElement('div');
        cell.classList.add('item');
        container.appendChild(cell);
        //add event listener to each cell
        cell.addEventListener('mouseover', function (e) {
            boxEffect(e)
        });

    }



}

//What happens when you event
function boxEffect(e) {
    let colorOne = document.getElementById('colorOne').value;
    document.querySelector(':root').style.setProperty('--color-one', colorOne);
    //Change class to hover
    e.target.classList.add('buttonOneColor');
}



//REMOVE PREVIOUS GRID
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// CLEAR CLASSES - button color one

function clearGrid() {
    let active = document.querySelectorAll('.buttonOneColor');
    active.forEach(function (element) {
        element.classList.remove("buttonOneColor");
    });

}


