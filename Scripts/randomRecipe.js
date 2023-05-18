import getNavbar from "../Components/navbar.js";
import getRecepie from "../Utility/utility.js";

import { setLayout } from "../Utility/utility.js";


let container =document.getElementById("navbar-container");

container.innerHTML =getNavbar();



// console.log(data.meals);

window.onload =async()=>{
    let data = await getRecepie("https://www.themealdb.com/api/json/v1/1/random.php");
    console.log(data.meals)
    setLayout(data.meals,containerMeal);
}


let containerMeal =document.getElementById("meal");


