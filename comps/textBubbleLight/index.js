function textBubbleLightUI(bubbleText = "lorem ipsum", width = "250px"){
    return `
        <div style="
        display: flex;
        background-color: #F5D9B7;
        width: ${width};
        height: auto;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        ">
            <span style="
            font-size: 20pt;
            font-family: sans-serif;
            color: #766654;
            padding: 0.75rem;
            ">
            ${bubbleText}
            </span>
        </div>
    `
}

export const textBubbleLight = textBubbleLightUI();