import React, { useState } from 'react';
import "./ContactPage.css";

const ContactPage= () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        detail: "",
        message: "",
    });

    const [showData, setShowData] = useState(false);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setShowData(true);
    };

    return (
        <div>
            <form  className='formulario' onSubmit={handleSubmitForm} >
                <h3>Contact</h3>
                <label htmlFor="name">Name:*</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChangeInput}
                    value={formData.name}
                    required
                />
                <label htmlFor="email">Email:*</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChangeInput}
                    value={formData.email}
                    required
                />
                <label htmlFor="detail">Detail:*</label>
                <input
                    type="text"
                    name="detail"
                    id="detail"
                    onChange={handleChangeInput}
                    value={formData.detail}
                    required
                />
                <label htmlFor="message">Message:*</label>
                <textarea
                    rows="10"
                    name="message"
                    id="message"
                    onChange={handleChangeInput}
                    value={formData.message}
                    required
                />
                <div className='btnContainer'>
                    <button className="btn-confirmar" type='submit'>Send</button>
                </div>
            </form>
            
            {showData &&
                <div className='mensaje'>
                    <h4><b>Message sent</b></h4>
                </div>
            }
        </div>
    );
};

export default ContactPage;
