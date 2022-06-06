

let form=document.querySelector("form");
form.addEventListener("submit",function(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let amount=document.getElementById("amount").value;

user={
    name:name,
    email:email,
    address:address,
    wallet:Number(amount),
}
let users=JSON.parse(localStorage.getItem("user"))||[];
users.push(user);
localStorage.setItem("user",JSON.stringify(users));

name.innerText=null;
email.innerText=null;
address.innerText=null;
amount.innerText=null;


});


