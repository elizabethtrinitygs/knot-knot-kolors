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

  //GLOBAL
  const products = JSON.parse(localStorage.getItem('cart'));
  let carItem = [];
  const cart_n = document.getElementById('cart_n');
  const table = document.getElementById('table');
  let total = 0;
  //CONTENT TABLE HTML
  const tableContent = (i) => {
    return `<tr class="">
                <th scope="row">${i + 1}</th>
                <td><img style= "width:90px;" src="${products[i].url}"></td>
                <td>${1}</td>
                <td>${products[i].price}</td>
            </tr> `
  }