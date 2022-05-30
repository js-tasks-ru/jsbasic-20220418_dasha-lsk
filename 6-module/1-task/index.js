/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  table = document.createElement("table"); //<table><table/>
  header = document.createElement("thead"); //<theader></>
  headerRow = document.createElement("tr");
  headerCols = [
    this.createTdWithText("Имя"),
    this.createTdWithText("Возраст"),
    this.createTdWithText("Зарплата"),
    this.createTdWithText("Город"),
    this.createTdWithText(""),
  ];
  tbody = document.createElement("tbody");

  constructor(rows) {
    this.headerCols.forEach((headerCol) => {
      this.headerRow.appendChild(headerCol);
    });
    this.header.appendChild(this.headerRow);
    this.table.appendChild(this.header);
    rows.forEach((row) => {
      let bodyRow = document.createElement("tr"); //<tr></tr>
      let closeBtn = document.createElement("button");
      closeBtn.innerHTML = "X";
      let bodyCols = [
        this.createTdWithText(row.name),
        this.createTdWithText(row.age),
        this.createTdWithText(row.salary),
        this.createTdWithText(row.city),
        this.createTdWithHtmlElement(closeBtn),
      ];
      bodyCols.forEach((col) => {
        bodyRow.appendChild(col);
      });
      closeBtn.onclick = () => {
        bodyRow.remove();
      };
      this.tbody.appendChild(bodyRow);
    });
    // row = {
    //   name: 'Вася',
    //   age: 25,
    //   salary: 1000,
    //   city: 'Самара'
    // },
    this.table.appendChild(this.tbody);
  }

  get elem() {
    return this.table;
  }

  createTdWithText(text) {
    let td = document.createElement("td");
    let textNode = document.createTextNode(text);
    td.appendChild(textNode);
    return td;
  }

  createTdWithHtmlElement(htmlElement) {
    let td = document.createElement("td");
    td.appendChild(htmlElement);
    return td;
  }
}
