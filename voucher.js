



let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"

async function getdata(){
    let res= await fetch(url);
    let data=await res.json();
    append(data[0].vouchers);
}
getdata();

function append(data){
    let container=document.getElementById("voucher_list");
    container.innerText=null;
    data.forEach(function(el){
       let div= document.createElement("div");
    div.setAttribute("class","voucher");

    let name=document.createElement("h2");
    let img=document.createElement("img");
    let price=document.createElement("h2");

    img.setAttribute("class","img")

    name.innerText=el.name;
    img.src=el.image;
    price.innerText=el.price;


    let btn=document.createElement("button")
btn.setAttribute("id","buy_voucher")
    btn.innerText="buy_voucher";

btn.addEventListener("click",function(){

    var users=JSON.parse(localStorage.getItem("user"))||[];


    if( users[0].wallet>=Number(price.innerText)){
     
    let x=users[0].wallet-[Number(price.innerText)];
    var user={
        name:users[0].name,
        email:users[0].email,
        address:users[0].address,
        wallet:x
    }
       
    users=[];
    users.push(user)
    
    localStorage.setItem("user",JSON.stringify(users));
   let amount=x;
        let balance=document.getElementById("wallet_balance");
        balance.innerText=null;
        balance.append(amount)


console.log(users[0].wallet);
    let purchase=JSON.parse(localStorage.getItem("purchase"))||[];
    // purchase=[];
    purchase.push(el);
    localStorage.setItem("purchase",JSON.stringify(purchase));
    alert("Hurray! purchase successful");
}
    else{
        alert("Sorry! insufficient balance")
    }


})



  

    div.append(img,name,price,btn);
container.append(div)


    })
}
let users=JSON.parse(localStorage.getItem("user"));
let amount=users[0].wallet;
let balance=document.getElementById("wallet_balance");
balance.innerText=null;
balance.append(amount)