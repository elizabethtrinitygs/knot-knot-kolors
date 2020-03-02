console.log('Si puedes ver esto, entonces todo va de maravilla :D');

//Global
let products = [];
let cartItems = [];
let cart_n = document.getElementById('cart-n');
//product unit DIVS
let bracelet = document.getElementById('bracelet');
let notebook = document.getElementById('notebook');
let miniNotebook = document.getElementById('mini-notebook');
//Information
const bracelets = [
    { name: 'Mod.1 roja', price: 45 },
    { name: 'Mod.2 verde', price: 45 },
    { name: 'Mod.3 morada', price: 45 },
    { name: 'Mod.4 naranja', price: 45 },
    { name: 'Mod.5 rosa', price: 45 },
    { name: 'Mod.6 amarillo', price: 45 },
    { name: 'Mod.7 azul', price: 45 },
    { name: 'Mod.8 turquesa', price: 45 }
];

const notebooks = [
    { name: 'Libreta Mod.1 Abstract blue', price: 100 },
    { name: 'Libreta Mod.2 Abstract orange', price: 100 },
    { name: 'Libreta Mod.3 Abstract purple', price: 100 },
    { name: 'Libreta Mod.4 Abstract green', price: 100 }
];

const miniNotebooks = [
    { name: 'Mini libretita Mod.1 espacio', price: 50 },
    { name: 'Mini libretita Mod.2 floral', price: 50 },
    { name: 'Mini libretita Mod.3 metalica', price: 50 },
    { name: 'Mini libretita Mod.4 naturaleza', price: 50 }
];
//HTML
const braceletsAll = (con) => {
    let URL = `img/bracelets/bracelet-${con}.jpg`;
    let btn = `btnBracelet${con}`;

        return `<div class="column">
        <div class="col s12 m4 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
          <div class="card">
            <div class="card-image">
              <img src="${URL}">
              <span class="card-title black-text">${bracelets[con-1].name}</span>
              <a id="${btn}" onclick="cart('${bracelets[con-1].name}','${bracelets[con-1]
                 .price}','${URL}','${con}','${btn}')"
              class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <span class="card-title">${bracelets[con-1].name}</span>
            <p>Price: ${bracelets[con-1].price}</p>
            </div>
          </div>
        </div>
      </div> `
};

const notebooksAll = (con) => {
    let URL = `img/notebooks/notebook${con}.jpg`;
    let btn = `btnNotebook${con}`;

    return `<div class="column">
        <div class="col s12 m4 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
          <div class="card">
            <div class="card-image">
              <img src="${URL}">
              <span class="card-title black-text">${notebooks[con-1].name}</span>
              <a id="${btn}" onclick="cart('${notebooks[con-1].name}','${notebooks[con-1]
                 .price}','${URL}','${con}','${btn}')"
              class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <span class="card-title">${notebooks[con-1].name}</span>
            <p>Price: ${notebooks[con-1].price}</p>
            </div>
          </div>
        </div>
      </div> `
};

var miniNotebooksAll = (con) => {
    let URL = `img/mininotebooks/mininotebook-${con}.jpg`;
    let btn = `btnMiniNotebook${con}`;

    return `<div class="column">
        <div class="col s12 m4 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
          <div class="card">
            <div class="card-image">
              <img src="${URL}">
              <span class="card-title black-text">${miniNotebooks[con-1].name}</span>
              <a id="${btn}" onclick="cart('${miniNotebooks[con-1].name}','${miniNotebooks[con-1]
                 .price}','${URL}','${con}','${btn}')"
              class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <i class="material-icons amber-text text-darken-2">star</i>
            <span class="card-title">${miniNotebooks[con-1].name}</span>
            <p>Price: ${miniNotebooks[con-1].price}</p>
            </div>
          </div>
        </div>
      </div> `
};

//ANIMATION
const animation= () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000
    });
    Toast.fire({
        type: 'success',
        title: 'Added to shopping cart'
    });
};

//CART FUNCTIONS
const cart = (name, price, url, con, btncart) => {
    let item = {
        name: name,
        price: price,
        url: url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage === null) {
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    } 
    else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart", JSON.stringify(products));
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML = ` [${products.length}]`;
    document.getElementById(btncart).style.display= 'none';
    animation();
}

//CAROUSEL MATERIALIZE CSS
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
        duration: 100
    });
});

//RENDER
const render = () => {
    new WOW().init();
    for ( let index = 1; index <= 8; index++) {
        bracelet.innerHTML += `${braceletsAll(index)}`;
        notebook.innerHTML += `${notebooksAll(index)}`;
    }
};