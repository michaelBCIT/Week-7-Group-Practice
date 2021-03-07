function textBubbleLightUI(bubbleText = "", width = "250px", bubbleColor = "#F5D9B7", font="18px", fontcolor="#766654"){
    return `
        <div style="
        display: flex;
        background-color: ${bubbleColor};
        width: ${width};
        height: auto;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        ">
            <span style="
            font-size: ${font};
            font-family: sans-serif;
            font-weight: bold;

            color: ${fontcolor};
            padding: 0.75rem;
            text-align: center;
            ">
            ${bubbleText}
            </span>
        </div>
    `
}

// rando comment
// export const textBubbleLight = textBubbleLightUI();