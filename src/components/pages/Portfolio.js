import React from "react";

import gitIcon from '../../../src/githubIcon.png'

export default function Portfolio(){
    return (
        <div className="container-sm">
            <h1>Projects</h1>
            <h4>Hover over each one to see poject name and github link.</h4>

        <br/>

            <div className="row">
                <h2>Full-Stack</h2>
                 
            <div className="techB col m-4">
                    <a href="https://techbloggging.herokuapp.com/dash" target="_blank" className="aDecor">TechBloggging ⌨️</a>
                    </div>

            <div className="jgc col m-4">
                    <a href="https://jamesgeovannystore.com/" target="_blank" className="aDecor">JAMES GEOVANNY Clothing</a>
                    </div>

            <div className="jga col m-4">
                    <a href="https://jamesgeovanny.com/" target="_blank" className="aDecor">James Geovanny Art Gallery</a>
                    </div>
               
            </div>

            <div className="row">
                 <h2>Front-End</h2>

            <div className="oldP col m-4">
                    <a href="https://jimmysolis.github.io/Challenge2Portfolio" target="_blank" className="aDecor">Old Profile 📺</a>
                    </div>

            <div className="cD col m-4">
                    <a href="https://jimmysolis.github.io/quizCoded/" target="_blank" className="aDecor">Coded Quiz 💻</a> 
                    </div>

            <div className="wtw col m-4">
                    <a href="https://jimmysolis.github.io/WhatsTheWeather/" target="_blank" className="aDecor">Whats the Weather☀️/🌧</a> 
                    </div>
            </div>

            <div className="row">
                <h2>Back-End</h2>
        
            <div className="mySol col m-4">
            <div className="aDecor">
                    <a href="https://github.com/JimmySolis/MySocialAPI" target="_blank"><img src={gitIcon}></img> </a> 
                    <h1>MySocialApp</h1> 
                        <h2>Tech Used:</h2>
                        <p>
                        JavaScript & MongoDB                                
                        </p>
                    </div>     
                    </div>   
           
            <div className="bos col m-4">
                  <div className="aDecor">
                       <a href="https://github.com/JimmySolis/BackOfShop" target="_blank"> <img src={gitIcon}></img> </a>
                        <h1>Back of Shop</h1> 
                        <h2>Tech Used:</h2>
                        <p>
                        JavaScript &  MySQL                                 
                        </p>
                  </div>
                    </div>
                    
            </div>

        </div>
    )
}