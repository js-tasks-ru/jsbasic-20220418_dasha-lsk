function makeDiagonalRed(table) {
  // ваш код...
  for (let i = 0; i < table.rows.length; i++) {
    let raw = table.rows[i];
    for (let j = 0; j < raw.cells.length; j++) {
      if (i === j) {
        let cell = raw.cells[j];
        cell.style.backgroundColor = "red";
      }
    }
  }
}
