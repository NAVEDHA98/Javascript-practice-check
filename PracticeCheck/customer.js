let savedproduct=localStorage.getItem('products');
let products=JSON.parse(savedproduct);
const custproducts = function (products) {
    let tabE1 = document.querySelector("#cust_tab");
    products.forEach(function (product) {
        let trow1 = document.createElement("tr");
        let tcol1 = document.createElement("td");
        tcol1.textContent = product.name;
        trow1.appendChild(tcol1);

        let tcol2 = document.createElement("td");
        tcol2.textContent = product.freeDelivery;
        trow1.appendChild(tcol2);

        let tcol3 = document.createElement("td");
        tcol3.textContent = product.price;
        trow1.appendChild(tcol3);

        let tcol4 = document.createElement("td");
        tcol4.textContent = product.Category;
        trow1.appendChild(tcol4);

         let but = document.createElement("a");
        // // link.setAttribute('pid', 'link');
        // link.href="";
        // link.textContent = "Add to Cart";
        // link.class="add";
        // let but=document.createElement("button");
        but.href="#";
        but.textContent="Add to cart"
        but.id="add"+product.pid;
        let tcol5 = document.createElement("td");
        tcol5.appendChild(but);
        trow1.appendChild(tcol5);

        tabE1.appendChild(trow1);
     
    }
    )
}
custproducts(products);
