async function getRecepie(url){

    try{
        let data = await fetch(url);
        let jsonData = await data.json();
        return jsonData;

    }
    catch(e){
        console.log("error occured")
    }


}


function setLayout(data,parentNode){

    parentNode.textContent ="";

    data.forEach((
        {
            strInstructions,
            strMealThumb,
            strMeal
        }



    ) => {

        if(data !=null){

            let div =document.createElement("div");
            div.setAttribute("class","meal-container");
    
    
            let imgContainer =document.createElement("div");
            
    
            let img =document.createElement("img");
            img.src =strMealThumb;
    
            imgContainer.append(img);
    
            let contentContainer =document.createElement("div");
    
            let title =document.createElement("h1");
            title.textContent =strMeal;
    
           let des =document.createElement("h3");
            let truncatedP =strInstructions.substring(0,450) ;
            des.textContent =truncatedP;
    
            contentContainer.append(title,des);
    
            div.append(imgContainer, contentContainer);
            parentNode.append(div);

        }
        else{

            let error =document.createElement("h1");
            error.textContent ="No recepie found!";
            parentNode.append(div);
        }

      
        
    });




}


export default getRecepie;
export {setLayout} ;

