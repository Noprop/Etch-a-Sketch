function createGrid(gridSize){
    let grid = document.getElementById('grid-container');
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    for(let i = 0; i < gridSize**2; i++){
        const gridItems = document.createElement('div');
        gridItems.className = 'gridCell';
        gridItems.setAttribute('id', 'cell-' + i);
        grid.appendChild(gridItems);
    }
}

createGrid(48);