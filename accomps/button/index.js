function MyButtonUI(text="TIP 1", src="https://www.flaticon.com/svg/vstatic/svg/3082/3082009.svg?token=exp=1614312338~hmac=ec09866f0665de30ff7090d7ba9f1367"){
  return `
    <div style='
    height: 130px;
    width: 125px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-family: sans-serif;

    background-color: #FBAD81;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
         box-shadow: 0 10px 6px -6px #777;
    
    '>

    <div style='
      padding-top: 10px;
      align-items: center;
      justify-content: center;
      display: flex;
    '>
    ${text}</div>

      <img src= ${src} alt="bread" 
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
  
    <br>

    <div style='
    height: 130px;
    width: 125px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-family: sans-serif;

    background-color: #FBAD81;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
         box-shadow: 0 10px 6px -6px #777;
    
    '>

    <div style='
      padding-top: 10px;
      align-items: center;
      justify-content: center;
      display: flex;
    '>
    ${text}</div>

      <img src="https://www.flaticon.com/svg/vstatic/svg/3082/3082009.svg?token=exp=1614312338~hmac=ec09866f0665de30ff7090d7ba9f1367" alt="bread" 
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

    <br>

    <div style='
    height: 130px;
    width: 125px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-family: sans-serif;

    background-color: #FBAD81;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
         box-shadow: 0 10px 6px -6px #777;
    
    '>

    <div style='
      padding-top: 10px;
      align-items: center;
      justify-content: center;
      display: flex;
    '>
    ${text}</div>

      <img src="https://www.flaticon.com/svg/vstatic/svg/3082/3082009.svg?token=exp=1614312338~hmac=ec09866f0665de30ff7090d7ba9f1367" alt="bread" 
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

export const ButtonUI = MyButtonUI();