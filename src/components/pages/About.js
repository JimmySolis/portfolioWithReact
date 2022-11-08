import React from "react";

const headshot = "img/headshot1.PNG";

const style = {
    imgStyle: {
       hieght: "125px",
       width: "125px",
       borderRadius: "65px",
       float: "right"
    }
}

export default function About() {
    return (
        <div className="container-sm">
            <h1>About Me</h1>
                <img src={headshot} style={style.imgStyle}></img>
                <p>Hello World!
                Full-stack web developer utilizing an art background to push the standards of UI.
                Obtained a MERN focused certificate from Georgia Institute of Technology that covered JavaScript, Databases, React.js and responsive web design.
                A goal oriented and creative problem solver centered on mobile-first design and development. 
                I am working to achieve a bigger understanding of the cutting edge technologies present today. 
                Having learned a plethora of different tools, I wish to invent and work on websites that will solve vital problems people face.  
                I also wish to continue to expand on digital art and digital art environments. 
                I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                 </p>
         </div>
    );
}