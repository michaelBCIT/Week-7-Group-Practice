function textBubbleLightUI(bubbleText = "lorem ipsum", width = "250px", bubbleColor = "#F5D9B7", font="18px", fontcolor="#766654", height="auto"){
    return `
        <div style="
        display: flex;
        background-color: ${bubbleColor};
        width: ${width};
        height: ${height};
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