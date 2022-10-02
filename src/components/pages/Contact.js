import React,  { useState } from "react";

export default function Contact () {
    
    const [fullName, setfullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Message has been sent! Thank you ${fullName}! :)`)
        setEmail('');
        setMessage('');
        setfullName('');
    }

    return (
        <div className="container-sm">
            <h2>Message Me:</h2>
            <h5>{fullName ?`Hello ${fullName}! I'll reach out in one to two business day!`: " "}</h5>
            <div className="styleForm">
            <form className="row" onSubmit={handleSubmit}>
                <input 
                placeholder="FullName"
                required
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
                className="col-6">
                </input>

                <input 
                placeholder="Email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-6">
                </input>

                <textarea
                placeholder="Messege here..." 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="col-12"
                > 
                </textarea>

                <button className="submitbutton">Send</button>

            </form>
            </div>
        </div>
    );
}