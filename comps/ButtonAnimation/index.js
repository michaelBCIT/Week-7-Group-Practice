function MyButtonAnimationUI(text="TIP 1", src="https://www.flaticon.com/svg/vstatic/svg/135/135763.svg?token=exp=1614648432~hmac=9e642e1bafc99f9244e976aa3c4fbdf9", w="125px"){
  return `
    <div 
    class="tipsButton" 
    style='
    height: 130px;
    width: ${w};
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-family: sans-serif;

    background-color: #FBAD81;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
         box-shadow: 0 10px 6px -6px #777;
    '
    onclick="clickedTip(this)";
    >

        <div style='
        padding-top: 10px;
        align-items: center;
        justify-content: center;
        display: flex;
        '>
        ${text}</div>

      <img src= ${src} alt="bread" 
        style= '
        width: 80px;
        height: 80px;
        align-items: center;
        justify-content: center;
        display: flex;
        padding-top: 10px;
        padding-left: 20px;
        '>

        <div style=" 
        padding-top: 10px;
        align-items: center;
        justify-content: center;
        display: flex;
        "
    </div>

  `

}

function clickedTip(el){
    document.querySelector(".tipsButton").style.width = "125px";
    el.style.animation = "expandAnim 0.4s linear 0s 1 forwards";
}

//export const ButtonUI = MyButtonUI();