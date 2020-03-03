// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCkHUFX2KMjkbTXf1KXFlZaDgiffEyj3TQ",
    authDomain: "knot-knot-kolors.firebaseapp.com",
    databaseURL: "https://knot-knot-kolors.firebaseio.com",
    projectId: "knot-knot-kolors",
    storageBucket: "knot-knot-kolors.appspot.com",
    messagingSenderId: "322674775984",
    appId: "1:322674775984:web:ca83afc31f6f865b4e6875"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Get a reference to the database service


  //GLOBAL
  const products = JSON.parse(localStorage.getItem('cart'));
  let cartItem = [];
  const cart_n = document.getElementById('cart_n');
  const table = document.getElementById('table');
  let total = 0;
  //CONTENT TABLE HTML
  const tableContent = (i) => {
    return `<tr class="">
                <th scope="row">${i + 1}</th>
                <td><img src="${products[i].url}"></td>
                <td>${products[i].name}</td>
                <td>${1}</td>
                <td>${products[i].price}</td>
            </tr> `;
  }
  
  
  //FORM CART
document.getElementById('formCart').addEventListener('submit', (e)=> {
    e.preventDefault();

    userName = document.getElementById('userName');
    userEmail = document.getElementById('userEmail');
    userSelect = document.getElementById('userSelect');

    let d = new Date();
    let t = d.getTime();
    let order = t-300;

    // let database= firebase.database();
    firebase.database().ref('orders').push({
        id: t+1,
        order: order,
        userName: userName.value,
        payment: userSelect.value,
        date: d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear(),
        hour: d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
        year: d.getFullYear(),
        products: JSON.parse(localStorage.getItem("cart")),
        total: total
    });
    

    swal.fire({
        position: 'center',
        type: 'success',
        title: 'Purchase made successfully!',
        text: `Your purchase order is: ${order}`,
        showConfirmButton: true,
        timer: 50000
    });
    clean(); 
 });
//CLEAN FUNCTION
const clean = () => {
    localStorage.clear();
    for (let index = 0; index < products.length; index++) {
        table.innerHTML += tableContent(index);
        total = total + parseInt(products[index].price);
    }
    total= 0;

    table.innerHTML = `
        <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>`;
    document.getElementById('btnBuy').style.display = "none";
    document.getElementById('btnClean').style.display = "none";
}

//RENDER
const render = () => {
    for (let index = 0; index < products.length; index++) {
        table.innerHTML += tableContent(index);
        total = total + parseInt(products[index].price);
    }
    table.innerHTML += `
        <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Total $${total}.00</th>
        </tr>
        <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">
            <button id="btnClean" onclick="clean()" class="btn yellow darken-4">
            Clean Shopping Cart</button>
            </th>
            <th scope="col">
            <button id="btnBuy" href="#modal1" class="modal-trigger waves-effect waves-light btn">
            Buy</button>
            </th>
        </tr>`;
}

//MODAL MATERIALIZE
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });