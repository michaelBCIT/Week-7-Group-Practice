document.querySelector(".startbutton").innerHTML += StartButtonUI("Start");


//Page 2
document.querySelector(".header-p2").innerHTML += HeaderUI("WHAT IS FOOD WASTE?");

document.querySelector(".button-p2-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".button-p2-2").innerHTML += BackNextButtonUI("Next");


//page 3
document.querySelector(".headerpage3").innerHTML += HeaderUI("THE COST OF FOOD WASTE");
document.querySelector(".textbubblepage3-1").innerHTML += textBubbleLightUI("Food waste negatively contributes to resource costs.", "245px", "#F5D9B7");
document.querySelector(".subheaderpage3-1").innerHTML += SubHeaderUI("40px", "204px", "16pt", "RESOURCE COST");
document.querySelector(".textbubblepage3-2").innerHTML += textBubbleLightUI("Large amounts of money are used to farm resources and crops. If thrown into the waste, all the money that went into those crops are wasted too.", "291px", "#F5D9B7");
document.querySelector(".subheaderpage3-2").innerHTML += SubHeaderUI("63px", "361px", "24px", "ENVIRONMENTAL COSTS");
document.querySelector(".button-p3-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".button-p3-2").innerHTML += BackNextButtonUI("Next");

//page 3-2

//page4
document.querySelector(".subheaderp4").innerHTML += SubHeaderUI("SOCIAL COST");
document.querySelector(".textBubblePage4-1").innerHTML += textBubbleLightUI("When many people within a culture or society throw food out before it can be used and eaten, it can inadvertently lead to issues in regards to the health of the population and in-turn create more pressure on a country's healthcare system", "245px", "#F5D9B7");
document.querySelector(".textBubblePage4-2").innerHTML += textBubbleLightUI("More than 30% of the landfill is taken up by compostable organics and food scraps");
document.querySelector(".button-p4-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".button-p4-2").innerHTML += BackNextButtonUI("Next");

// document.querySelector(".headerpage4").innerHTML += HeaderUI("THE COST OF FOOD WASTE");


// page 9


//page 5-1

document.querySelector(".subheaderpage5").innerHTML += SubHeaderUI("69px", "341px", "20px", "HOW OUR LANDFILLS COULD LOOK", "#FFFFFF", "#FE9179");

document.querySelector(".BackButton-Page5-1").innerHTML += BackNextButtonUI("Back");
document.querySelector(".NextButton-Page5-1").innerHTML += BackNextButtonUI("Next");

//page 5-2
document.querySelector(".TextBubblePage5-2").innerHTML += textBubbleLightUI("In the landfill, food scraps get buried underneath tonnes of garbage", width = "310px", bubbleColor = "#F5D9B7", font="20px", fontcolor="#766654");
document.querySelector(".SubHeaderPage5-2").innerHTML += SubHeaderUI("69px", "346px", "20px", "HOW DID THIS HAPPEN?", "#FFFFFF", "#FE9179");
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
//document.querySelector(".TextBubble-Page3-1").innerHTML += textBubbleLightUI("RESOURCE COST", "204px", "#FBAD81");

function NextPage(page){
  document.querySelector("#show").style.display = "none";
  document.querySelector("#show").id = "";
  document.querySelector(page).style.display = "flex";
  document.querySelector(page).id = "show";
}

function BackPage(page){
  document.querySelector("#show").style.display = "none";
  document.querySelector("#show").id = "";
  document.querySelector(page).style.display = "flex";
  document.querySelector(page).id = "show";
}

