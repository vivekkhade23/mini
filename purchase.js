let users=JSON.parse(localStorage.getItem("user"));
let amount=users[0].wallet;
let balance=document.getElementById("balance");
balance.innerText=null;
balance.append(amount)


let purchase=JSON.parse(localStorage.getItem("purchase"));

let container=document.getElementById("purchased_vouchers");
container.innerText=null;

let sum=0;

purchase.forEach(function(el){
    let div= document.createElement("div");
    div.setAttribute("class","voucher");

    let name=document.createElement("h2");
    let img=document.createElement("img");
    let price=document.createElement("h2");


    name.innerText=el.name;
    img.src=el.image;
    price.innerText=el.price;

    sum=sum+el.price;

    div.append(img,name,price);
    container.append(div)

})

let wall=document.getElementById("wallet_balance")
wall.innerText=null;
wall.append(sum)

