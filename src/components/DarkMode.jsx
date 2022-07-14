import React, { useState } from "react";

const DarkMode = () => {

    const [ isdark , setIsdark] = useState(false);

    const changeMode = () => {
        setIsdark(!isdark)
        const body = document.querySelector("body")
        body.classList.toggle("dark")
    }

    console.log(isdark);
    
    return (
        <button className="circle-dark" onClick={ changeMode }>
        <i className={ isdark ? 'bx bxs-sun' : 'bx bxs-moon'} ></i>
      
    </button>
  );
};

export default DarkMode;
