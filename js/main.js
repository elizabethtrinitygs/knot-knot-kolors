//Global
let products = [];
let cartItems = [];
let cart_n = document.getElementById('cart-n');
//product unit
let bracelet = document.getElementById('bracelet');
let notebook = document.getElementById('notebook');
let miniNotebook = document.getElementById('mini-notebook');
//Information
let bracelets = [
    { name: 'Pulsera Mod.1 roja', price: 45 },
    { name: 'Pulsera Mod.2 verde', price: 45 },
    { name: 'Pulsera Mod.3 morada', price: 45 },
    { name: 'Pulsera Mod.4 naranja', price: 45 },
    { name: 'Pulsera Mod.5 rosa', price: 45 },
    { name: 'Pulsera Mod.6 amarillo', price: 45 },
    { name: 'Pulsera Mod.7 azul', price: 45 },
    { name: 'Pulsera Mod.8 turquesa', price: 45 }
];

let notebooks = [
    { name: 'Libreta Mod.1 Abstract blue', price: 100 },
    { name: 'Libreta Mod.2 Abstract orange', price: 100 },
    { name: 'Libreta Mod.3 Abstract purple', price: 100 },
    { name: 'Libreta Mod.4 Abstract green', price: 100 }
];

let miniNotebook = [
    { name: 'Mini libretita Mod.1 espacio', price: 50 },
    { name: 'Mini libretita Mod.2 floral', price: 50 },
    { name: 'Mini libretita Mod.3 metalica', price: 50 },
    { name: 'Mini libretita Mod.4 naturaleza', price: 50 }
    
];


//CAROUSEL
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
        duration: 100
    });
    instances.next(1);
});