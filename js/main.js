console.log('Si puedes ver esto, entonces todo va de maravilla :D');

//Global
let products = [];
let cartItems = [];
let cart_n = document.getElementById('cart-n');
//product unit
let bracelet = document.getElementById('bracelet');
let notebook = document.getElementById('notebook');
let miniNotebook = document.getElementById('mini-notebook');
//Information
const bracelets = [
    { name: 'Pulsera Mod.1 roja', price: 45 },
    { name: 'Pulsera Mod.2 verde', price: 45 },
    { name: 'Pulsera Mod.3 morada', price: 45 },
    { name: 'Pulsera Mod.4 naranja', price: 45 },
    { name: 'Pulsera Mod.5 rosa', price: 45 },
    { name: 'Pulsera Mod.6 amarillo', price: 45 },
    { name: 'Pulsera Mod.7 azul', price: 45 },
    { name: 'Pulsera Mod.8 turquesa', price: 45 }
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
    let url = `img/bracelets/bracelet${con}.jpeg`;
    let btn = `btnBracelet${con}`;

    return `<div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
              <div class="card">
              <div class="card-image">
                <img src="${url}">
                <a id="${btn}" onclick="cart('${bracelet[con-1].name}', '${bracelet[con-1].price}', 
                    ${URL}', '${con}', '${btn}')" class="btn btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</li>
                </a>
              </div>
              <div class="card-content">
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <span class="card-title">${bracelet[con-1].name}</span>
              <p>Price: ${bracelet[con-1].price}</p>
               </div>
            </div>
        </div>`
};

const notebooksAll = (con) => {
    let url = `img/notebooks/notebook${con}.jpeg`;
    let btn = `btnNotebook${con}`;

    return `<div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
              <div class="card">
              <div class="card-image">
                <img src="${url}">
                <a id="${btn}" onclick="cart('${notebook[con-1].name}', '${notebook[con-1].price}', 
                    ${URL}', '${con}', '${btn}')" class="btn btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</li>
                </a>
              </div>
              <div class="card-content">
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <span class="card-title">${notebook[con-1].name}</span>
              <p>Price: ${notebook[con-1].price}</p>
               </div>
            </div>
        </div>`
};

const miniNotebooksAll = (con) => {
    let url = `img/mininotebooks/mininotebook${con}.jpeg`;
    let btn = `btnMiniNotebook${con}`;

    return `<div class="col s3 wow fadeInUp data-wow-delay="3s" data-wow-offset="300" ">
              <div class="card">
              <div class="card-image">
                <img src="${url}">
                <a id="${btn}" onclick="cart('${mininotebook[con-1].name}', '${mininotebook[con-1].price}', 
                    ${URL}', '${con}', '${btn}')" class="btn btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</li>
                </a>
              </div>
              <div class="card-content">
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <i class="material-icons" style="color:orange">star</li>
              <span class="card-title">${mininotebook[con-1].name}</span>
              <p>Price: ${mininotebook[con-1].price}</p>
               </div>
            </div>
        </div>`
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