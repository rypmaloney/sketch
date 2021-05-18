const container = document.querySelector('#grid-container');
let rows = document.getElementsByClassName('rows');
let boxes = document.getElementsByClassName('cells');



let cellSelection = 64;
createGrid(cellSelection)

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


document.getElementById('btn64').onclick = function () {
    removeAllChildNodes(container);
    createGrid(64);
};

document.getElementById('btn144').onclick = function () {
    removeAllChildNodes(container);
    createGrid(144);
};

document.getElementById('btn2500').onclick = function () {
    removeAllChildNodes(container);
    createGrid(2500);
};


let colorArray = ['red', 'yellow', 'blue', 'purple', 'green', 'pink', 'magenta'];


//What happens when you mouseover
function boxEffect(e) {

    //Change background to random color from colorArray
    /* 
    let num = Math.floor(Math.random() * 6);
    e.target.style.backgroundColor = colorArray[num];
    */

    //Change class to hover, remove after 1000ms
    e.target.classList.add('hovered');
    setTimeout(function () {
        e.target.classList.remove('hovered');
    }, 1000)

}

//create the final grid of cells
function createGrid(cellSelection) {
    let numberOfRows = Math.sqrt(cellSelection);
    let cellsPerRow = cellSelection / numberOfRows;

    createRows(numberOfRows);
    createCells(cellsPerRow);

}

//creates rows for individual grid cells to sit in
function createRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.classList.add('rows');
        container.appendChild(row);
    }
}

//creates individual grid cells
function createCells(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let cell = document.createElement('div');
            //add event listener to each cell
            cell.addEventListener('mouseover', function (e) {
                boxEffect(e)
            });
            rows[j].appendChild(cell);

            if (cellNum === 8) {
                cell.classList.add('cells64');
            } else if (cellNum === 12) {
                cell.classList.add('cells144');
            } else if (cellNum === 50) {
                cell.classList.add('cells2500');
            }
        }

    }
}
