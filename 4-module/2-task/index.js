function makeDiagonalRed(table) {
    // Get all rows in the table
    let rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        
        // Get current cell in a row
        let cell = row.cells[i];

        // Set red color to a cell
        cell.style.backgroundColor = 'red';
    }
}