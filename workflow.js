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


//page4
document.querySelector(".subheaderp4"). innerHTML += SubHeaderUI("SOCIAL COST");
document.querySelector(".textBubblePage4-1").innerHTML += textBubbleLightUI("Food waste negatively contributes to resource costs.", "245px", "#F5D9B7");
document.querySelector(".textBubblePage4-2").innerHTML += textBubbleLightUI("RESOURCE COST", "204px", "#FBAD81");

document.querySelector(".headerpage4").innerHTML += HeaderUI("THE COST OF FOOD WASTE");


// page 9



//page 5-1
document.querySelector("subheaderpage5"). innerHTML += SubHeaderUI("HOW OUR LANDFILLS COULD LOOK");
document.querySelector(".BackButton-Page5-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".NextButton-Page5-1").innerHTML += BackNextButtonUI("Next");

//page 5-2
document.querySelector(".TextBubble-Page5-2").innerHTML += textBubbleLightUI("RESOURCE COST", "204px", "#FBAD81");
document.querySelector(".BackButton-Page5-2").innerHTML += BackNextButtonUI("Back");
document.querySelector(".NextButton-Page5-2").innerHTML += BackNextButtonUI("Next");

function NextPage(page){
  document.querySelector("#show").style.display = "none";
  document.querySelector("#show").id = "";
  document.querySelector(page).style.display = "flex";
  document.querySelector(page).id = "show";
}


