const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");

formEl.addEventListener('submit', addNewClient);

function addNewClient(e) {
  e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const age = document.getElementById("age").value;
  
    tbodyEl.innerHTML += `
        <tr>
            <td>${firstName + " " + lastName}</td>
            <td>${phoneNumber}</td>
            <td>${age}</td>
        </tr>
 `;
  
  const clientsData = JSON.parse(localStorage.getItem("clients"));
    if (clientsData == null) {
      var newClients = [];
    } else {
      newClients = JSON.parse(localStorage.getItem("clients"));
    }
  
  const addNewClient = newClients.push({
    firstName: this.firstName.value,
    lastName: this.lastName.value,
    phoneNumber: this.phoneNumber.value,
    age: this.age.value
  })
  
  localStorage.setItem("clients", JSON.stringify(newClients));

}