var url_String = window.location.href;
var input = new URL(url_String);

let id = input.searchParams.get("id");
let name = input.searchParams.get("name");
let price = input.searchParams.get("price");
let active = input.searchParams.get("active");
let date = input.searchParams.get("date");
let category = input.searchParams.get("category");
let delivery = input.searchParams.get("free");

let nametxt = document.querySelector("#name");
let pricetxt = document.querySelector("#price");
let datetxt = document.querySelector("#date");
let yesact = document.querySelector("#yesact");
let noact = document.querySelector("#noact");
nametxt.setAttribute('value', name);
pricetxt.setAttribute('value', price);
datetxt.setAttribute('value', date);
if (active === 'Yes') {
    document.getElementById("yesact").checked = true;
}
else {
    noact.setAttribute('checked', true);
}
let deli=document.getElementById("delivery");
if (delivery === 'Yes') {
    deli.checked = true;
}
let cate = document.getElementById("category");
let index = 0;
for (var i = 0; i < cate.options.length; i++) {

    if (cate.options[i].value === category) {
        break;
    }
    index++;
}
cate.selectedIndex = index;

document.querySelector("#submit").addEventListener('click',function()
{
    
    let name=nametxt.value;
    let price=pricetxt.value;
    let date=datetxt.value;
    var active;
    if(yesact.checked)
    {
        active=yesact.value;
    }
    if(noact.checked)
    {
        active=noact.value;
    }
    let category=cate.options[cate.selectedIndex].value;
   var delivery;
    if(deli.checked)
    {
        delivery='Yes';
    }
    else
    {
        delivery='No';
    }
    let savedproduct=localStorage.getItem('products');
let products=JSON.parse(savedproduct);
let product=products.find(function(product)
{
    return product.pid===parseInt(id);
})
console.log(name);
product.name=name;
product.price=price;
product.Active=active;
product.dataofLaunch=date;
product.Category=category;
product. freeDelivery=delivery;
localStorage.removeItem('products');
localStorage.setItem('products',JSON.stringify(products));
window.location="file:///D:/HTML, CSS AND JAVASCRIPT/PracticeCheck/AdminPage.html";
})
