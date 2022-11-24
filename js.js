// const items = (() => {
// const fieldValue = localStorage.getItem('cart');
// return fieldValue === null
// ? []
// :JSON.parse(fieldValue);

// })();
// items.push({
//     "productID": enterID.value,
//     "Name": enterName.value,
//     "Quantity": enterQuantity.value,
// });

// localStorage.setItem('cart', JSON.stringify(items));

// console.log(JSON.parse(localStorage.getItem('cart')));


let insert = document.getElementById('Insert').value;
const Delete = document.getElementById('Delete').value;



window.onload = function () { 
    document.getElementById("insectdata").onsubmit = store
    document.getElementById("Delete").onclick = clearStorage
   
    document.getElementById("GetData").onclick = retrieveRecords
}

function store(event) {
    let productID = document.getElementById('productCode').value;
    let productName = document.getElementById('productName').value;
    let productQ = document.getElementById('productQ').value;
    console.log('labas');

    const preke = {
        productID: productID,
        productName: productName,
        productQ: productQ,
    }
    event.preventDefault()
    window.localStorage.setItem(productID, JSON.stringify(preke));
}
function clearStorage() { //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}
function retrieveRecords() { //retrieves items in the localStorage
    let GetData = document.getElementById('getproductCode').value; //gets key from user
    console.log(GetData);
    console.log("retrive records");
    let records = window.localStorage.getItem(GetData); //searches for the key in localStorage
    console.log(records);
    let paragraph = document.createElement("p");
    let infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    let element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}
