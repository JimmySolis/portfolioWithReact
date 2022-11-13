import React,  { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact () {
    const form = useRef();

    const [fullName, setfullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4gzwqqa', 'template_1rnqm6s', form.current, 'WqwHbchkg4Y3qZ7yC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

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

            <form className="row" onSubmit={handleSubmit} ref={form}>
                <input 
                placeholder="FullName"
                required
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
                type="text" 
                name="full_name"
                className="col-12 m-2">
                </input>
                <input 
                placeholder="Email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                name="user_email"
                className="col-12 m-2">
                </input>

                <textarea
                placeholder="Messege here..." 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="col-12 m-2"
                name="message"
                > 
                </textarea>

                <button className="submitbutton col-12 m-2" type="submit" value="Send">Send</button>

            </form>
            </div>
        </div>
    );
}