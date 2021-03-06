//document.querySelector(".button-p2-1").innerHTML += BackNextButtonUI("Back");
//document.querySelector(".button-p2-2").innerHTML += BackNextButtonUI("Next");
document.querySelector(".startbutton").innerHTML += StartButtonUI("Next");


//Page 2
document.querySelector(".button-p2-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".button-p2-2").innerHTML += BackNextButtonUI("Next");

document.querySelector(".textbubble").innerHTML += TextBubbleUI("More than 30% of the landfill is taken up by compostable organics and food scraps");
document.querySelector(".textbubble").innerHTML += TextBubbleUI();

document.querySelector(".textbubble").innerHTML += textBubbleLightUI("More than 30% of the landfill is taken up by compostable organics and food scraps");
document.querySelector(".textbubble").innerHTML += textBubbleLightUI();


// document.querySelector().innerHTML += ButtonUI();
// document.querySelector().innerHTML += ButtonUI("TIP 2", "https://www.flaticon.com/svg/vstatic/svg/1689/1689198.svg?token=exp=1614649480~hmac=9212608a5b8b4f9ba93fa524e3fdcdbe");
// document.querySelector().innerHTML += ButtonUI("TIP 3", "https://www.flaticon.com/svg/vstatic/svg/3964/3964265.svg?token=exp=1614649514~hmac=44cbf58eba807f7a58bc9f780d5555ba");

// document.querySelector(".mybutton").innerHTML += ButtonUI();
// document.querySelector(".mybutton").innerHTML += ButtonUI("TIP 2", "https://www.flaticon.com/svg/vstatic/svg/1689/1689198.svg?token=exp=1614649480~hmac=9212608a5b8b4f9ba93fa524e3fdcdbe");
// document.querySelector(".mybutton").innerHTML += ButtonUI("TIP 3", "https://www.flaticon.com/svg/vstatic/svg/3964/3964265.svg?token=exp=1614649514~hmac=44cbf58eba807f7a58bc9f780d5555ba");

//page 3
document.querySelector(".HeaderPage3").innerHTML += HeaderUI("THE COST OF FOOD WASTE");
document.querySelector(".textBubblePage3-1").innerHTML += textBubbleLightUI("Food waste negatively contributes to resource costs.", "245px", "#F5D9B7");
document.querySelector(".textBubblePage3-2").innerHTML += textBubbleLightUI("RESOURCE COST", "204px", "#FBAD81");


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
// document.querySelector(). innerHTML += SubHeaderUI("HOW OUR LANDFILLS COULD LOOK");
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

// michael was here 3