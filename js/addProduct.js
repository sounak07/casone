/** @format */

function createInput(type, className, placeholder, value, dis, nam) {
  let inputTag = document.createElement('input');
  inputTag.type = type;
  inputTag.name = nam;
  inputTag.className = className;
  inputTag.placeholder = placeholder;
  inputTag.value = value;
  inputTag.disabled = dis;

  return inputTag;
}

function addProduct() {
  let newId = parseInt(localStorage.getItem('id')) + 1;

  localStorage.setItem('id', newId);

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

  const idInput = createInput(
    'text',
    'productField',
    'Product ID',
    '',
    false,
    'productId'
  );
  const nameInput = createInput(
    'text',
    'productField',
    'Product Name',
    '',
    false,
    'productName'
  );
  let qtyInput = createInput(
    'number',
    'productField',
    'Product Qty',
    '',
    false,
    'productQty'
  );
  let unitPriceInput = createInput(
    'number',
    'productField',
    'Unit Price',
    '',
    false,
    'unitPrice'
  );
  const totalPriceInput = createInput(
    'number',
    'productField',
    'Total Price',
    '',
    true,
    'totalPrice'
  );
  const notes = createInput(
    'text',
    'productField',
    'Notes',
    '',
    false,
    'notes'
  );

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
