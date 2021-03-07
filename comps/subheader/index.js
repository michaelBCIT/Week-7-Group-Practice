function SubHeaderUI (h="64px", w="361px", text="ENVIRONMENTAL COSTS"){
    return `<div style=
    background: #FBAD81;
    border-radius: 50px;
    justify-content: center;
    align-items:center;
    height:${h};
    width:${w};
    justify-content:center;
    align-items:center;
    ">
        <h1 style="
        position: absolute;
        width:257px;
        height:48px;
        top:10px;
        left:60px;
        font-family: sans-serif;
        font-weight: bold;
        font-size: 24px;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
        ">
        ${text}
        </h1>
    </div>`;
}
//export const SubHeader = SubHeaderUI();   