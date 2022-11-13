import React from "react";

import file from "../../assest/JimmySolisResume.pdf"

export default function Resume () {
  
    return(
        <div className="container-sm">
            <h1>Resume</h1>
            <a href={file} download> <button className="downloadButton">
            Download My Resume
            </button></a>
           
            <br/>
            <br/>
            <h4>Front-end Proficiencies</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <br/>
            <h4>Back-end Proficiencies</h4>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>REST</li>
                <li>GrapgQL</li>
            </ul>
        </div>
    )
}