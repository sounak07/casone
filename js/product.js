/** @format */

function getProducts() {
  fetch(
    `https://raw.githubusercontent.com/sounak07/jsonData/master/productData.json`
  )
    .then((response) => {
      response.json().then(function (data) {
        let productData = data;

        let products = '';
        productData.map((pro) => {
          let totalPrice = pro.Qty * pro.unitPrice;
          products += `<tr id=${pro.id}>
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
                />
              </td>
              <td>
                <input
                  type="number"
                  class="productField"
                  placeholder="Unit Price"
                  value =${pro.unitPrice}
                />
              </td>
              <td>
                <input
                  type="text"
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
                <button onclick="deleteElement(${pro.id})" class="deleteButton" type="button">Delete</button>
              </td>              
            </tr>`;
        });

        var d1 = document.querySelector('.tableDetails');
        d1.insertAdjacentHTML('afterend', products);
      });
    })
    .catch((e) => {
      console.log(e);
    });
}

function deleteElement(el) {
  document.getElementById(el).remove();
}
