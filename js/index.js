/** @format */

function formCreate(incomingData, id) {
  let output = `      
        <input type="text" class="inputStyle" value=${incomingData[id].firstName} placeholder="First Name" >
        <input type="text" class="inputStyle" value=${incomingData[id].lastName} placeholder="Last Name" />
        <input type="text" class="inputStyle" value=${incomingData[id].Address1} placeholder="Address Line 1" />
        <input type="text" class="inputStyle" value=${incomingData[id].Address2} placeholder="Address Line 2" />
        <input type="text" class="inputStyle" value=${incomingData[id].City} placeholder="City" />
        <input type="text" class="inputStyle" value=${incomingData[id].State} placeholder="State" />
        <input type="number" class="inputStyle" value=${incomingData[id].Zipcode} placeholder="Zipcode" />
        <input type="text" class="inputStyle" value=${incomingData[id].Country} placeholder="Country" />      
    `;

  return output;
}

function getAddress() {
  fetch(`https://raw.githubusercontent.com/sounak07/jsonData/master/data.json`)
    .then((response) => {
      response.json().then(function (data) {
        let shopping = data;

        let bill = formCreate(shopping, 0);
        let ship = formCreate(shopping, 1);

        var d1 = document.querySelector('#billDetails');
        var d2 = document.querySelector('#shipDetails');
        d1.insertAdjacentHTML('afterend', bill);
        d2.insertAdjacentHTML('afterend', ship);

        let orderDate = shopping[2].OrderData;
        let deliveryDate = shopping[3].ExpectedDelivery;

        let dates = `
        <i class="fa fa-calendar" aria-hidden="true"></i>
        <input type="text" class="dateField" value=${orderDate} placeholder="Order Date" />

        <i class="fa fa-calendar" aria-hidden="true"></i>
        <input type="text" class="dateField" value="${deliveryDate}" placeholder="Delivery Date" />

        `;

        var d3 = document.querySelector('.datedetails');
        d3.insertAdjacentHTML('afterend', dates);
      });
    })
    .catch((e) => {
      console.log(e);
    });
}
