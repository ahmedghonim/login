
let curntUser =JSON.parse(localStorage.getItem("cuarntUser"));
document.getElementById("username").innerHTML=`Welcome ${curntUser}`
let logout =document.getElementById('logout')

const delet = _ => {
    localStorage.removeItem("cuarntUser")
    
}
logout.addEventListener('click',delet)