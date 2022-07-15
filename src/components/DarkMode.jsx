import React, { useState } from "react";

const DarkMode = () => {
    //Estado para cambiar icono sun a moon y viceversa
    const [ isdark , setIsdark] = useState(false);

    const changeMode = () => {
        setIsdark(!isdark)
        const body = document.querySelector("body")
        body.classList.toggle("dark") // Estilo definido en css para cambiar el color
    }

    
    return (
        <button className="circle-dark" onClick={ changeMode }>
        <i className={ isdark ? 'bx bxs-sun' : 'bx bxs-moon'} ></i>
      
    </button>
  );
};

export default DarkMode;
