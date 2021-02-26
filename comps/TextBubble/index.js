function TextBubbleUI(text="text") {
    return `<div style="
    background-color:#F5D9B7;
    height: 129px;
    width: 309px;
    border-radius: 10px;
    color: #766654;
    display:flex;
    align-items:center;
    justify-content: center;
    font-family: sans-serif;
    font-weight: bold;
    ">${text}
    </div>`
}

    export const TextBubble = TextBubbleUI();