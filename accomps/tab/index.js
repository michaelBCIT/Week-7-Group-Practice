function MyTabUI(text="Text"){
    return`
    
    <div style='
    height: 124px;
    width: 363px;
    background-color: #FBAD81;
    border-radius: 10px;

    color: white;
    font-family: sans-serif;
    font-weight: bold;

    background-color: #FBAD81;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
         box-shadow: 0 10px 6px -6px #777;
    

    '>
   
    

    <div style='
      margin-top: 20px;
      padding-top: 10px;
      align-items: center;
      justify-content: center;
      display: flex;
    '>
    ${text}</div>

    <div style='
        margin-top: -15px;
  '>
 TIP 1 </div>

    
    <img src="https://www.flaticon.com/svg/vstatic/svg/135/135763.svg?token=exp=1614648432~hmac=9e642e1bafc99f9244e976aa3c4fbdf9" alt="bread" 
    style= '
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-top: 10px;
    padding-left: 20px;
    '>

    </div>
    `
}

export const TabUI = MyTabUI();