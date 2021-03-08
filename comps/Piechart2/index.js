function Pie(){
    return`
        <div onclick='Pie.HandleClick(this)'>
            <h1 style='
                opacity: 1;
                transition: opacity 1s;
            '>Make a Pie Chart</h1>
            <div id='pie'
            style='
                width: 0px;
                height: 0px;
                transition: width 0.5s, 0.5s;
                border-radius: 50%;
                background: conic-gradient(#ADD 20%, #089 0);
                margin-bottom: 10px;
            '>

            </div>
        </div>
    
    `
}

Pie.HandleClick = (el) =>{
    el.querySelector("h1").style.opacity= 0;
    setTimeout(()=>{
        el.querySelector("#pie").style.width = "100px";
        el.querySelector("#pie").style.height = "100px";

        var percent = 1;
        setInterval(()=>{
            if(percent <= 63){
            el.querySelector("#pie").style.background = `conic-gradient(#ADD ${percent}%, #089 0)`;
            }
            percent += 1;
        },30)
    }, 1000)

}