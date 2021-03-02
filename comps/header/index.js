function HeaderUI (text = "THE COST OF FOOD WASTE"){
    return `<div style="
    background-color: #FE9179; 
    justify-content center;
    align-items:center;
    height:133px;
    width:375px;
    justify-content:center;
    align-items:center;
    ">
        <h1 style="
        font-size:30px;
        position:absolute;
        width:193px;
        height: 64px;
        left: 100px;
        top: 10px;
        color: #FFFFFF;
        text-shadow: 0px 3px 0px #70614F;
        font-family: Roboto;
        ">
        ${text}
        </h1>
    </div>` 
}

export const Header = HeaderUI();   

 

