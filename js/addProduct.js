/** @format */

function createInput(type, className, placeholder, value, dis) {
  let inputTag = document.createElement('input');
  inputTag.type = type;
  inputTag.className = className;
  inputTag.placeholder = placeholder;
  inputTag.value = value;
  inputTag.disabled = dis;

  return inputTag;
}

function addProduct() {
  let newId = localStorage.getItem('id') + 1;

  let tableRef = document.getElementById('myTable');

  let newRow = tableRef.insertRow();

  newRow.id = newId;

  let newCell = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
  let newCell3 = newRow.insertCell(3);
  let newCell4 = newRow.insertCell(4);
  let newCell5 = newRow.insertCell(5);
  let newCell6 = newRow.insertCell(6);

  const idInput = createInput('text', 'productField', 'Product ID', '', false);
  const nameInput = createInput(
    'text',
    'productField',
    'Product Name',
    '',
    false
  );
  let qtyInput = createInput(
    'number',
    'productField',
    'Product Qty',
    '',
    false
  );
  let unitPriceInput = createInput(
    'number',
    'productField',
    'Unit Price',
    '',
    false
  );
  const totalPriceInput = createInput(
    'number',
    'productField',
    'Total Price',
    '',
    true
  );
  const notes = createInput('text', 'productField', 'Notes', '', false);

  const button = document.createElement('button');
  button.className = 'deleteButton';
  button.type = 'button';
  button.textContent = 'Delete';

  button.addEventListener('click', function (e) {
    deleteElement(newId);
  });

  qtyInput.addEventListener('change', function (e) {
    updatePrice(newId);
  });

  unitPriceInput.addEventListener('change', function (e) {
    updatePrice(newId);
  });

  newCell.appendChild(idInput);
  newCell1.appendChild(nameInput);
  newCell2.appendChild(qtyInput);
  newCell3.appendChild(unitPriceInput);
  newCell4.appendChild(totalPriceInput);
  newCell5.appendChild(notes);
  newCell6.appendChild(button);
}