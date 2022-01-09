import React, {useState} from "react";
 function Header(){
    setInterval(gettime,1000)
    let newtime=new Date().toLocaleTimeString();
    const [time, setTime ] = useState(newtime);
    function gettime(){
        const newtime=new Date().toLocaleTimeString();
       
       setTime(newtime)
    }
     return(
        <header>
            <h1>KEEPER APP</h1>
           
            <p className="time"> {time} </p>
        </header>
     );
 }
 export default Header