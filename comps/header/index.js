function HeaderUI (text = "THE COST OF FOOD WASTE"){
    return `<div style="
    background-color: #FE9179; 
    height:133px;
    width:375px;

    display: flex;
    justify-content:center;
    align-items:center;
    ">
        <h1 style="
        font-size:30px;
        width:193px;

        color: #FFFFFF;
        text-shadow: 0px 3px 0px #70614F;
        font-family: sans-serif;

        display: flex;
        justify-content:center;
        align-items:center;

        ">
        ${text}
        </h1>
    </div>` 
}

export const Header = HeaderUI();   

 

