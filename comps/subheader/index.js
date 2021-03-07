<<<<<<< HEAD
function SubHeaderUI (h="64px", w="361px", size="24pt", text="ENVIRONMENTAL COSTS"){
    return `<div style="
    display: flex;
=======
function SubHeaderUI (h="64px", w="361px", text="ENVIRONMENTAL COSTS"){
    return `<div style="
>>>>>>> e46a662f329c78dee5a1a585882f8c7f71b1c710
    background: #FBAD81;
    border-radius: 50px;
    justify-content: center;
    align-items:center;
    height:${h};
    width:${w};
    padding: 3px;
    ">
        <h1 style="
        font-family: sans-serif;
        font-weight: bold;
        font-size: ${size};
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 23pt;
        text-align: center;
        color: #FFFFFF;
        margin: 0;
        ">
        ${text}
        </h1>
    </div>`;
}
//export const SubHeader = SubHeaderUI();   