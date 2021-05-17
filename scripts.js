const container = document.querySelector('#grid-container');
let rows = document.getElementsByClassName('rows');
let boxes = document.getElementsByClassName('cells');

for (var i = 0; i < boxes.length; i += 1) {
    boxes[i].addEventListener('click', function (e) {
        e.target.style.background = "red";
        console.log(e);
    });
}

createGrid(128);

//cell change on mouseover - remove after 300 milliseconds
function boxEffect(e) {
    e.target.classList.add('hovered');
    setTimeout(function () {
        e.target.classList.remove('hovered');
    }, 500)

}

//create the final grid of cells
function createGrid(cells) {
    let numberOfRows = Math.sqrt(cells);
    let cellsPerRow = cells / numberOfRows;

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

            rows[j].appendChild(cell).className = 'cells';
        }

    }
}
