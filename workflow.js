document.querySelector(".startbutton").innerHTML += StartButtonUI("Start");


//Page 2
document.querySelector(".header-p2").innerHTML += HeaderUI("WHAT IS FOOD WASTE?");

document.querySelector(".button-p2-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".button-p2-2").innerHTML += BackNextButtonUI("Next");

<<<<<<< HEAD
=======

//document.querySelector(".textbubble").innerHTML += TextBubbleUI("More than 30% of the landfill is taken up by compostable organics and food scraps");
//document.querySelector(".textbubble").innerHTML += TextBubbleUI();

//document.querySelector(".textbubble").innerHTML += textBubbleLightUI("More than 30% of the landfill is taken up by compostable organics and food scraps");
//document.querySelector(".textbubble").innerHTML += textBubbleLightUI();

//page 3

/*
document.querySelector(".textbubble").innerHTML += TextBubbleUI("More than 30% of the landfill is taken up by compostable organics and food scraps");
document.querySelector(".textbubble").innerHTML += TextBubbleUI();



document.querySelector(".textbubble").innerHTML += textBubbleLightUI("More than 30% of the landfill is taken up by compostable organics and food scraps");
document.querySelector(".textbubble").innerHTML += textBubbleLightUI();
*/

>>>>>>> c83bebd91d9dfd39a3f34559c801231f8e67cff4
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

<<<<<<< HEAD
document.querySelector(".headerpage4").innerHTML += HeaderUI("THE COST OF FOOD WASTE");

=======
document.querySelector(".button-p4-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".button-p4-2").innerHTML += BackNextButtonUI("Next");
>>>>>>> c83bebd91d9dfd39a3f34559c801231f8e67cff4


// page 9
document.querySelector(".header-p9").innerHTML += HeaderUI("WHAT CAN CLEAN TABLE DO FOR YOU?");
document.querySelector(".touchofabutton").innerHTML += textBubbleLightUI("With a touch of a button, users can help list their groceries, and track their expiration dates");


//page 5-1
document.querySelector("SubHeaderPage5"). innerHTML += SubHeaderUI("HOW OUR LANDFILLS COULD LOOK");
document.querySelector(".BackButton-Page5-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".NextButton-Page5-1").innerHTML += BackNextButtonUI("Next");

//page 5-2
document.querySelector(".TextBubble-Page5-2").innerHTML += textBubbleLightUI("RESOURCE COST", "204px", "#FBAD81");
document.querySelector(".BackButton-Page5-2").innerHTML += BackNextButtonUI("Back");
document.querySelector(".NextButton-Page5-2").innerHTML += BackNextButtonUI("Next");

// document.querySelector().innerHTML += TabUI("Hello");

// document.querySelector().innerHTML += TabUI();

// document.querySelector(). innerHTML += HeaderUI("WHAT IS FOOD WASTE?");
// document.querySelector(). innerHTML += HeaderUI("THE COST OF FOOD WASTE");
// document.querySelector(). innerHTML += HeaderUI("WHY DOES ALL THIS HAPPEN?");
// document.querySelector(). innerHTML += HeaderUI("HOW MUCH FOOD DO CANADIANS THROW AWAY?");
// document.querySelector(). innerHTML += HeaderUI("HOW YOU CAN REDUCE FOOD WASTE");
// document.querySelector(). innerHTML += HeaderUI("WHAT CAN CLEAN TABLE DO FOR YOU");

// document.querySelector(). innerHTML += SubHeaderUI();
// document.querySelector(). innerHTML += SubHeaderUI("SOCIAL COSTS");
// document.querySelector(). innerHTML += SubHeaderUI("HOW DID THIS HAPPEN?");

// document.querySelector(). innerHTML += SubHeaderUI();


// document.querySelector(".Header").innerHTML += HeaderUI();
// document.querySelector(".SubHeader").innerHTML += SubHeaderUI();
// document.querySelector(".StartButton").innerHTML += StartButtonUI("Start");
// document.querySelector(".Logo").innerHTML += MyLogoUI();

// document.querySelector(".Header").innerHTML += HeaderUI("WHAT IS FOOD WASTE?");

// document.querySelector(".header-p2").innerHTML += HeaderUI("WHAT IS FOOD WASTE?");

// document.querySelector(".Header").innerHTML += HeaderUI("THE COST OF FOOD WASTE");
// document.querySelector(".Header").innerHTML += HeaderUI("WHY DOES ALL THIS HAPPEN?");
// document.querySelector(".Header").innerHTML += HeaderUI("HOW MUCH FOOD DO CANADIANS THROW AWAY?");
// document.querySelector(".Header").innerHTML += HeaderUI("HOW YOU CAN REDUCE FOOD WASTE");


// document.querySelector(".SubHeader").innerHTML += SubHeaderUI();
// document.querySelector(".SubHeader").innerHTML += SubHeaderUI("SOCIAL COSTS");
// document.querySelector(".SubHeader").innerHTML += SubHeaderUI("HOW DID THIS HAPPEN?");
// document.querySelector(".SubHeader").innerHTML += SubHeaderUI("HOW OUR LANDFILLS COULD LOOK");
// document.querySelector(".SubHeader").innerHTML += SubHeaderUI();


//page 3
//document.querySelector(".HeaderPage3").innerHTML += HeaderUI("THE COST OF FOOD WASTE");
//document.querySelector(".textBubblePage3-1").innerHTML += textBubbleLightUI();

function NextPage(page){
  document.querySelector("#show").style.display = "none";
  document.querySelector("#show").id = "";
  document.querySelector(page).style.display = "flex";
  document.querySelector(page).id = "show";
}


