/** @format */

function saveProduct(e) {
  const pId = document.getElementsByName('productId');
  const pName = document.getElementsByName('productName');
  const qty = document.getElementsByName('productQty');
  const unit = document.getElementsByName('unitPrice');
  const totalPrice = document.getElementsByName('totalPrice');
  const notes = document.getElementsByName('notes');

  lengthOfTable = pId.length;

  let allProductsData = [];

  for (var i = 0; i < lengthOfTable; i++) {
    let eachProductData = {};

    if (pId[i].value == '') {
      alert('Id cannot be empty');
      pId[i].style.border = '3px solid #e84031';
      return false;
    } else if (pId[i].value.length < 2) {
      alert('Id length must be greater then 1');
      pId[i].style.border = '3px solid #e84031';
      return false;
    }

    pId[i].style.border = '3px solid #00b4cc';
    eachProductData[`id`] = pId[i].value;

    if (pName[i].value == '') {
      alert('Name cannot be empty');
      pName[i].style.border = '3px solid #e84031';
      return false;
    } else if (pName[i].value.length <= 3) {
      alert('Name length must be greater then 3');
      pName[i].style.border = '3px solid #e84031';
      return false;
    }

    pName[i].style.border = '3px solid #00b4cc';
    eachProductData[`name`] = pName[i].value;

    if (qty[i].value == '') {
      alert('Qty cannot be empty');
      qty[i].style.border = '3px solid #e84031';
      return false;
    } else if (qty[i].value == 0) {
      alert('Qty cannot be zero');
      qty[i].style.border = '3px solid #e84031';
      return false;
    }

    qty[i].style.border = '3px solid #00b4cc';
    eachProductData[`qty`] = qty[i].value;

    if (unit[i].value == '') {
      alert('Unit Price cannot be empty');
      unit[i].style.border = '3px solid #e84031';
      return false;
    } else if (unit[i].value == 0) {
      alert('Unit Price cannot be zero');
      unit[i].style.border = '3px solid #e84031';
      return false;
    }

    unit[i].style.border = '3px solid #00b4cc';
    eachProductData[`unitPrice`] = unit[i].value;
    eachProductData[`TotalPrice`] = totalPrice[i].value;
    eachProductData[`Notes`] = notes[i].value;

    allProductsData.push(eachProductData);
  }

  console.log(allProductsData);
}
