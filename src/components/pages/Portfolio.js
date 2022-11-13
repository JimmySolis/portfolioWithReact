import React from "react";

import gitIcon from '../../../src/githubIcon.png'

export default function Portfolio(){
    return (
        <div className="container-sm m-2">
            <h1>Projects</h1>
            <h4>Hover over each poject for coding details and links</h4>
            <h5><img src={gitIcon}></img> = GitHub Repo</h5>
            <h4>🌎 = Website</h4>
        <br/>

            <div className="row">
                <h2>Full-Stack</h2>

                <div className="lis col m-3">
            <div className="aDecor m-4">
                    <a href="https://github.com/JimmySolis/listed" target="_blank"><img src={gitIcon}></img> </a>
                    <a href="https://listed.herokuapp.com/" target="_blank" className="sizeEmoji"><h2>🌎</h2></a>
                    <h3>Listed ✅</h3> 
                        <h4>Tech Used:</h4>
                        <p>
                        React, JavaScript & MongoDB                                
                        </p>
                    </div>     
                    </div>   

                <div className="techB col m-3">
            <div className="aDecor m-4">
                    <a href="https://github.com/JimmySolis/TechBlogging" target="_blank"><img src={gitIcon}></img> </a>
                    <a href="https://techbloggging.herokuapp.com/signUp" target="_blank" className="sizeEmoji"><h2>🌎</h2></a>
                    <h3>TechBloggging ⌨️</h3> 
                        <h4>Tech Used:</h4>
                        <p>
                        JavaScript & MongoDB                                
                        </p>
                    </div>     
                    </div>   
           
                    <div className="jgc col m-3">
            <div className="aDecor m-4">
                    <a href="https://jamesgeovannystore.com/" className="sizeEmoji" target="_blank"><h2>🌎 </h2></a>
                    <h3>James Geovanny Clothing</h3> 
                        <h4>Tech Used:</h4>
                        <p>
                        HTML, CSS & JavaScript                               
                        </p>
                    </div>     
                    </div>   

               
                    <div className="jga col m-3">
            <div className="aDecor m-4">
                    <a href="https://jamesgeovanny.com/" className="sizeEmoji" target="_blank"><h2>🌎</h2></a>
                    <h3>James Geovanny Art Gallery</h3> 
                        <h4>Tech Used:</h4>
                        <p>
                        HTML & CSS                              
                        </p>
                    </div>     
                    </div>   

            </div>

            <div className="row">
                 <h2>Front-End</h2>

                 <div className="delPD col m-3">
            <div className="aDecor m-4">
                    <a href="https://github.com/JimmySolis/DelegentHostinger" target="_blank"><img src={gitIcon}></img> </a>
                    <a href="https://delegantpoodlesanddoodles.com/"  className="sizeEmoji" target="_blank"><h2>🌎 </h2></a>
                    <h3>Delegant Poodels and Doodles</h3> 
                        <h4>Tech Used:</h4>
                        <p>
                        HTML, CSS & JavaScript                              
                        </p>
                    </div>     
                    </div>   

                    <div className="oldP col m-3">
            <div className="aDecor m-4">
                    <a href="https://github.com/JimmySolis/Challenge2Portfolio" target="_blank"><img src={gitIcon}></img> </a>
                    <a href="https://jimmysolis.github.io/Challenge2Portfolio"  className="sizeEmoji" target="_blank"><h2>🌎 </h2></a>
                    <h3>OldPortfolio  📺</h3> 
                        <h4>Tech Used:</h4>
                        <p>
                        HTML, CSS & JavaScript                              
                        </p>
                    </div>     
                    </div> 

                    <div className="cD col m-3">
            <div className="aDecor m-4">
                    <a href="https://github.com/JimmySolis/quizCoded" target="_blank"><img src={gitIcon}></img> </a>
                    <a href="https://jimmysolis.github.io/quizCoded/" className="sizeEmoji" target="_blank"><h2>🌎 </h2></a>
                    <h3>Coded Quiz 💻</h3> 
                        <h4>Tech Used:</h4>
                        <p>
                        HTML, CSS & JavaScript                              
                        </p>
                    </div>     
                    </div>   

            <div className="wtw col m-3">
            <div className="aDecor m-4">
                    <a href="https://github.com/JimmySolis/WhatsTheWeather" target="_blank"><img src={gitIcon}></img> </a>
                    <a href="https://jimmysolis.github.io/WhatsTheWeather/"  className="sizeEmoji" target="_blank"><h2>🌎 </h2></a>
                    <h3>Whats the Weather☀️/🌧</h3> 
                        <h4>Tech Used:</h4>
                        <p>
                        HTML, CSS & JavaScript                              
                        </p>
                    </div>     
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