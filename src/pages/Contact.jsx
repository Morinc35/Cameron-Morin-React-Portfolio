import { validateEmail } from "../utils/validate"
import { useState } from "react";

export default function Contact() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            default:
                setMessage(value);
        }
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
    
        alert(`Thank you for your submission ${name}!`);
    
        setName('');
        setEmail('');
        setMessage('');
    };
    
    return(
<div className="container has-text-centered">
<h2 className="title is-2">Contact Me</h2>
<form className="form" onSubmit={handleFormSubmit}>
    <div className="field">
        <label className="label">Name</label>
        <div className="control">
            <input
                className="input"
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
            />
        </div>
    </div>
    <div className="field">
        <label className="label">Email</label>
        <div className="control">
            <input
                className="input"
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
            />
        </div>
    </div>
    <div className="field">
        <label className="label">Message</label>
        <div className="control">
            <textarea
                className="textarea"
                id="messageBody"
                value={message}
                name="message"
                onChange={handleInputChange}
                placeholder="Message"
            ></textarea>
        </div>
    </div>
    <div className="field">
        <div className="control">
            <button className="button is-primary" type="submit">Submit</button>
        </div>
    </div>
</form>
{errorMessage && (
    <div className="notification is-danger">
        <p className="error-text">{errorMessage}</p>
    </div>
)}
</div>

)}