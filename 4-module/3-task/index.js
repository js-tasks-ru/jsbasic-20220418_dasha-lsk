function highlight(table) {
  // ваш код...
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let statusCell = row.cells[3];
    if (statusCell.hasAttribute("data-available") === true) {
      if (statusCell.getAttribute("data-available") === "true") {
        row.classList.add("available");
      } else {
        row.classList.add("unavailable");
      }
    } else {
      row.setAttribute("hidden", true);
    }

    let genderCell = row.cells[2];
    if (genderCell.textContent === "f") {
      row.classList.add("female");
    } else {
      row.classList.add("male");
    }

    let ageCell = row.cells[1];
    if (parseInt(ageCell.textContent) < 18) {
      row.style["text-decoration"] = "line-through";
    }
  }
}
