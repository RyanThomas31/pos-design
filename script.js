//Product API Call

let products;

fetch ('http://127.0.0.1:5500/products.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data;
    })
    .then(data => {
        products = data;
    })
    .then(function () {
        console.log(products);
    });


//Cart API call

let cart;

fetch ('http://127.0.0.1:5500/cart.json')
    .then(function(response) {
        return response.json();
    })
    .then(data => {
        cart = data;
    })
    .then(function () {
        console.log(cart);
    });

