import React from "react";

const githubIcon = 'img/githubIcon.png';
const linkInIcon = 'img/linkIN.png';

function Footer (){ 
    return(
        <footer>
        <div className="centerDiv" >
        <a href="https://github.com/JimmySolis" target="_blank"><img src= {githubIcon}></img></a>   
        <a href="https://www.linkedin.com/in/jimmysoliscoding/" target="_blank"><img src= {linkInIcon} className="imgSize"></img></a>   
         </div>
       
        </footer>
    )
}

export default Footer;