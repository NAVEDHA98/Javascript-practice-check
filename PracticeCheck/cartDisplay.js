let savedproduct=localStorage.getItem('products');
let products=JSON.parse(savedproduct);
let cartsaved=localStorage.getItem('cart');
let cart=JSON.parse(cartsaved);

console.log(cart);

const custproducts = function (products) {
    var total=0;
    let tabE1 = document.querySelector("#cust_tab");
    cart.forEach(function(cart){  
    products.forEach(function (product) {
        if(product.pid===cart)
        {
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

        // let link = document.createElement("a");
        // // link.setAttribute('pid', 'link');
        // link.href = "#";
        // link.textContent = "Delete";
        // link.id='add';
        let but = document.createElement("a");
        but.href="#";
        but.textContent="Delete"
        but.id="delete"+product.pid;
        let tcol5 = document.createElement("td");
        tcol5.appendChild(but);
        trow1.appendChild(tcol5);

        tabE1.appendChild(trow1);
        console.log(parseFloat(product.price)); 
        total+=parseFloat(product.price);

        }
    }
    )
})
console.log(total);
}
custproducts(products);

products.forEach(function(product)
{
   document.getElementById("delete"+product.pid).addEventListener("click",function()
   {
       
   let cartsave=localStorage.getItem('cart');
   let cart=JSON.parse(cartsave);
   console.log(cart);
   console.log(product.pid);
   let flag=cart.indexOf(parseInt(product.pid));
   console.log(flag)
   var filter=cart.filter(function(value,index,cart)
   {
    return value!=product.pid;
   });
   console.log(filter);
   localStorage.removeItem('cart');
   localStorage.setItem('cart',JSON.stringify(filter));
   window.location="file:///D:/11-07-2019/15-07-2019/practice check/cart.html";
   });
})
