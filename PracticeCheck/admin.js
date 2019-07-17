const products = [
    {
        name: 'sandwich', price: 99.00, Active: 'Yes', dataofLaunch: '15/03/2017', Category: 'Main course',
        freeDelivery: 'Yes', pid: 1
    },

    {
        name: 'Burger', price: 129.00, Active: 'Yes', dataofLaunch: '23/12/2017', Category: 'Main course',
        freeDelivery: 'No', pid: 2
    },

    {
        name: 'pizza', price: 149.00, Active: 'Yes', dataofLaunch: '21/08/2017', Category: 'Main course',
        freeDelivery: 'No', pid: 3
    },

    {
        name: 'French Fries', price: 57.00, Active: 'No', dataofLaunch: '02/07/2017', Category: 'Starters',
        freeDelivery: 'Yes', pid: 4
    },

    {
        name: 'Chocolate Browine', price: 32.00, Active: 'Yes', dataofLaunch: '02/11/2017', Category: 'Dessert',
        freeDelivery: 'Yes', pid: 5
    }
];

let savedproduct = localStorage.getItem('products');

if (savedproduct === null) {
    localStorage.setItem('products', JSON.stringify(products));
}
let product = JSON.parse(savedproduct);

const renderProducts = function (products) {
    let tabE1 = document.querySelector("#prod-tab");


    products.forEach(function (product) {
        let trow1 = document.createElement("tr");
        let tcol1 = document.createElement("td");
        tcol1.textContent = product.name;
        trow1.appendChild(tcol1);

        let tcol2 = document.createElement("td");
        tcol2.textContent = product.price;
        trow1.appendChild(tcol2);

        let tcol3 = document.createElement("td");
        tcol3.textContent = product.Active;
        trow1.appendChild(tcol3);


        let tcol7 = document.createElement("td");
        tcol7.textContent = product.dataofLaunch;
        trow1.appendChild(tcol7);


        let tcol5 = document.createElement("td");
        tcol5.textContent = product.Category;
        trow1.appendChild(tcol5);


        let tcol6 = document.createElement("td");
        tcol6.textContent = product.freeDelivery;
        trow1.appendChild(tcol6);

        let link = document.createElement("a");
        // link.setAttribute('pid','link');
        link.href = "EditMenu.html?id=" + product.pid + "&name=" + product.name + "&price=" + product.price + "&active=" + product.Active + "&date=" + product.dataofLaunch + "&category=" + product.Category + "&free=" + product.freeDelivery;
        link.textContent = "Edit";
        let tcol4 = document.createElement("td");
        tcol4.appendChild(link);

        trow1.appendChild(tcol4);

        tabE1.appendChild(trow1);

    })


}
renderProducts(product);

const editProduct = function (products) {
    let tabE1 = document.querySelector("#");


    products.forEach(function (product) {

    })

}
