let wrapper = document.querySelector('.table_wrapper');
let btn = document.querySelector('button');
let tableRows = document.querySelector('#row');
let tableCells = document.querySelector('#column');


function createTable() {
    let table = document.createElement('table');
    for (let i = 0; i < tableRows.value; i++) {
        let createRow = table.insertRow();
        for (let j = 0; j < tableCells.value; j++) {
            let createColumn = createRow.insertCell();
            createColumn.innerText = `row ${i + 1}, cell ${j + 1}`;

        }
        wrapper.append(table);
    }
}

btn.addEventListener('click', createTable);
