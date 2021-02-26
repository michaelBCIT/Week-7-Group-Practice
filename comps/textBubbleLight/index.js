function textBubbleLightUI(bubbleText = "lorem ipsum", bubbleText1 = "lorem ipsum2"){
    return `
        <div style="
        display: flex;
        background-color: #F5D9B7;
        width: 245px;
        height: 92px;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        ">
            <span style="
            font-size: 20pt;
            color: #766654;
            ">
            ${bubbleText}
            </span>
        </div>
        
        <br>

        <div style="
        display: flex;
        background-color: #F5D9B7;
        width: 245px;
        height: 92px;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        ">
            <span style="
            font-size: 20pt;
            color: #766654;
            ">
            ${bubbleText1}
            </span>
        </div>
    `
}

export const textBubbleLight = textBubbleLightUI();