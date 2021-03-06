document.querySelector(".startbutton").innerHTML += StartButtonUI("Start");


//Page 2
document.querySelector(".header-p2").innerHTML += HeaderUI("WHAT IS FOOD WASTE?");

document.querySelector(".button-p2-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".button-p2-2").innerHTML += BackNextButtonUI("Next");

//page 3
document.querySelector(".headerpage3").innerHTML += HeaderUI("THE COST OF FOOD WASTE");
document.querySelector(".textbubblepage3-1").innerHTML += textBubbleLightUI("Food waste negatively contributes to resource costs.", "245px", "#F5D9B7");
document.querySelector(".textbubblepage3-2").innerHTML += textBubbleLightUI("RESOURCE COST", "204px", "#FBAD81");
document.querySelector(".button-p3-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".button-p3-2").innerHTML += BackNextButtonUI("Next");


document.querySelector(".headerpage4").innerHTML += HeaderUI("THE COST OF FOOD WASTE");



// page 9
document.querySelector(".header-p9").innerHTML += HeaderUI("WHAT CAN CLEAN TABLE DO FOR YOU?");
document.querySelector(".touchofabutton").innerHTML += textBubbleLightUI("With a touch of a button, users can help list their groceries, and track their expiration dates");


function NextPage(page){
  document.querySelector("#show").style.display = "none";
  document.querySelector("#show").id = "";
  document.querySelector(page).style.display = "flex";
  document.querySelector(page).id = "show";
}


