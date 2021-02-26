function textBubbleDarkUI(darkBubbleText1 = "Lorem Ipsum"){
    return `
        <div style="
        display:flex;
        background-color: #FE9179;
        border-radius: 20;
        width: 282px;
        height: 122px;
        justify-content: center;
        align-items: center;
        ">
        <span style="
        font-size: 20pt;
        color: #FFFFFF;
        ">
        ${darkBubbleText1}
        </span>
        </div>
    `
}

export const textBubbleDark = textBubbleDarkUI();