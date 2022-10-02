import React from "react";


export default function Portfolio(){
    return (
        <div className="container-sm">
            <h1>Projects</h1>

            <div className="row">
                
                    <div className="oldP col">
                    <a href="https://jimmysolis.github.io/Challenge2Portfolio" target="_blank" className="aDecor">Old Profile 📺</a>
                    </div>
                  
                    <div className="techB col">
                    <a href="https://techbloggging.herokuapp.com/dash" target="_blank" className="aDecor">TechBloggging ⌨️</a>
                    </div>
                   
               
            </div>

            <div className="row">
                    <div className="wtw col">
                    <a href="https://jimmysolis.github.io/WhatsTheWeather/" target="_blank" className="aDecor">Whats the Weather☀️/🌧</a> 
                    </div>

                    <div className="cD col">
                    <a href="https://jimmysolis.github.io/quizCoded/" target="_blank" className="aDecor">Coded Quiz 💻</a> 
                    </div>
            </div>

            <div className="row">
            <div className="jgc col">
                    <a href="https://jamesgeovannystore.com/" target="_blank" className="aDecor">JAMES GEOVANNY Clothing</a>
                    </div>
            <div className="jga col">
                    <a href="https://jamesgeovanny.com/" target="_blank" className="aDecor">James Geovanny Art Gallery</a>
                    </div>
               
            </div>

        </div>
    )
}