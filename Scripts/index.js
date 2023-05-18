import getNavbar from "../Components/navbar.js";

import getRecepie from "../Utility/utility.js";
import { setLayout } from "../Utility/utility.js";



let container =document.getElementById("navbar-container");

container.innerHTML =getNavbar();

let btnContainer =document.querySelector(".btn-container");
let userContainer =document.querySelector("#userConatiner");

let isLogin =JSON.parse(localStorage.getItem("currUser"));



console.log("login",isLogin);

if(isLogin && isLogin.isLogin){
    btnContainer.style.display ="none";
   const user= document.getElementById("userName") ;
   user.textContent ="Welcome ," +JSON.parse(localStorage.getItem("currUser")).name;
   user.style.color ="white"

   let logoutBtn =document.getElementById("logout");
   logoutBtn.addEventListener("click",()=>{
        localStorage.setItem("currUser",JSON.stringify({}))
        location.href ="index.html";
   })


}
else{
    btnContainer.style.display ="";
    userContainer.style.display ="none";
}





let searchBtn =document.getElementById("search-btn");



searchBtn.addEventListener("click",()=>{

    let val =document.getElementById("search-txt").value;

    // console.log(val);

    let apiUrl =`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`

    fetchRecepie(apiUrl);

});


let mealContainer =document.getElementById("meal")

async function fetchRecepie(url){

    let data = await getRecepie(url);
    console.log(data.meals)
    setLayout(data.meals,mealContainer);

}