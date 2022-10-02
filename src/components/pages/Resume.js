import React from "react";

export default function Resume () {
     // Function will execute on click of button
     const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('jgsResume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'jgsResume.pdf';
                alink.click();
            })
        })
    }
    return(
        <div className="container-sm">
            <h1>Resume</h1>
            <button onClick={onButtonClick} className="downloadButton">
            Download My Resume
            </button>
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