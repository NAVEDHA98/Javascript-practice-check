var a = [1, 2, 5];
let cartsaved = localStorage.getItem('cart');
if (cartsaved === null) {
    localStorage.setItem("cart", JSON.stringify(a));
}

savedproduct = localStorage.getItem('products');
products = JSON.parse(savedproduct);

products.forEach(function (product) {
    document.getElementById("add" + product.pid).addEventListener("click", function () {

        let cartsave = localStorage.getItem('cart');
        let cart = JSON.parse(cartsave);
        console.log(cart);
        console.log(product.pid);
        let flag = cart.indexOf(parseInt(product.pid));
        console.log(flag)
        if (flag < 0) {
            cart.push(product.pid);
            document.getElementById("alertcart").innerHTML = "Item added to Cart successfully";
            localStorage.removeItem('cart');
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        else {
            document.getElementById("alertcart").innerHTML = "Item already exist in cart";
        }

    });
})
