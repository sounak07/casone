/** @format */

function formCreate(movie, id) {
  let output = `      
        <input type="text" class="inputStyle" value=${movie[id].firstName} placeholder="First Name" >
        <input type="text" class="inputStyle" value=${movie[id].lastName} placeholder="Last Name" />
        <input type="text" class="inputStyle" value=${movie[id].Address1} placeholder="Address Line 1" />
        <input type="text" class="inputStyle" value=${movie[id].Address2} placeholder="Address Line 2" />
        <input type="text" class="inputStyle" value=${movie[id].City} placeholder="City" />
        <input type="text" class="inputStyle" value=${movie[id].State} placeholder="State" />
        <input type="number" class="inputStyle" value=${movie[id].Zipcode} placeholder="Zipcode" />
        <input type="text" class="inputStyle" value=${movie[id].Country} placeholder="Country" />      
    `;

  return output;
}

function getAddress() {
  fetch(`https://raw.githubusercontent.com/sounak07/jsonData/master/data.json`)
    .then((response) => {
      response.json().then(function (data) {
        let movie = data;

        let bill = formCreate(movie, 0);
        let ship = formCreate(movie, 1);

        var d1 = document.querySelector('#billDetails');
        var d2 = document.querySelector('#shipDetails');
        d1.insertAdjacentHTML('afterend', bill);
        d2.insertAdjacentHTML('afterend', ship);
      });
    })
    .catch((e) => {
      console.log(e);
    });
}
