/** @format */

function getProducts() {
  fetch(
    `https://raw.githubusercontent.com/sounak07/jsonData/master/productData.json`
  )
    .then((response) => {
      response.json().then(function (data) {
        let productData = data;

        let products = '';
        let i = 0;
        productData.map((pro) => {
          i = i + 1;
          let totalPrice = pro.Qty * pro.unitPrice;
          products += `<tr id=${i}>
              <td>
                <input
                  type="text"
                  class="productField"
                  placeholder="Product ID"
                  value =${pro.id}
                />
              </td>
              <td>
                <input
                  type="text"
                  class="productField"
                  placeholder="Product Name"
                  value =${pro.Name}
                />
              </td>
              <td>
                <input
                  type="number"
                  class="productField"
                  placeholder="Qty"
                  value =${pro.Qty}
                  onchange="return updatePrice(${i});" 
                />
              </td>
              <td>
                <input
                  type="number"
                  class="productField"
                  placeholder="Unit Price"
                  value =${pro.unitPrice}
                  onchange="return updatePrice( ${i});" 
                />
              </td>
              <td>
                <input
                  type="number"
                  class="productField"
                  placeholder="Total Price"
                  value =${totalPrice}                  
                  disabled
                />
              </td>
              <td>
                <input
                  type="text"
                  class="productField"
                  placeholder="Notes"
                  value =${pro.notes}
                />
              </td>    
              <td>
                <button onclick="deleteElement(${i})" class="deleteButton" type="button">Delete</button>
              </td>              
            </tr>`;
        });

        localStorage.setItem('id', i);

        var d1 = document.querySelector('.tableDetails');
        d1.insertAdjacentHTML('afterend', products);
      });
    })
    .catch((e) => {
      console.log(e);
    });
}

function deleteElement(id) {
  console.log('hi');
  document.getElementById(id).remove();
}

function setValue(newValue, id) {
  let t = document.getElementById(id);
  let unit = t.cells[4].children[0];

  unit.value = newValue;
}

function updatePrice(id) {
  let t = document.getElementById(id);
  var unit = t.cells[2].children[0].value;
  var price = t.cells[3].children[0].value;

  setValue(unit * price, id);
}
