import React, { useState } from 'react';
import './FormSection.css'
import emailjs from "@emailjs/browser"

function FormSection() {

    const [emailSent, setEmailSent] = useState(undefined);
    const sendEmail = (data) => {
        emailjs.send('service_y1erzmj', 'template_p9nv2dj', data, "Z-HaFIKL_S2qZc4Gk")
            .then(function (response) {
                setEmailSent(true)
            }, function (error) {
                setEmailSent(false)
            });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target[0].value,
            email: e.target[1].value,
            phoneNumber: e.target[2].value,
            message: e.target[3].value,
        }
        sendEmail(data)
    }

    return (
        <div className="form-section" id='form-section'>
            <div className="form-section-container">
                <div className="form-section-wrapper">
                    <div className="form-section-form" onSubmit={handelSubmit}>
                        <h2 className="form-section-form-heading">Contact Us</h2>
                        <form className="form-section-input-items">
                            <input required name='name' className='form-section-input-item1' type="text" placeholder="Your Name"></input>
                            <input name='email' required className='form-section-input-item1' type="email" placeholder="Your Email"></input>
                            <input name='phoneNumber' required className='form-section-input-item1' type="text" placeholder="Your Phone No"></input>
                            <textarea name='mesage' required className='form-section-input-item2' type="textarea" placeholder='Message'></textarea>
                            {
                                emailSent == undefined ?
                                    <button type='submit' className='form-section-input-button'>SEND REQUEST NOW</button>
                                    : emailSent ? <div style={{ color: "black", padding: "10px", fontWeight: "bold", fontSize: "25px" }}>Your message was sent successfully</div> :
                                        <div style={{ color: "white", padding: "10px", fontWeight: "bold", fontSize: "25px" }}>email failed</div>
                            }
                        </form>
                    </div>
                    <div className="form-section-info">
                        <h2 className="form-section-info-heading">Contact Us</h2>
                        <h2 className='form-section-info-title'>We take pride in our customer service</h2>
                        <p className='form-section-info-text'>Our customers have entrusted us with their unique, most challenging needs in lead and lead-based & aluminium  products and services for more than five years now. Working with our customers to understand their requirements over time has enabled us to acquire extensive experience in industries where experience matters. CCALB follows a customer-oriented approach, having customers at the heart of its strategic priorities. Seeking maximum satisfaction of our customers, we place particular emphasis on quality, consistency, our speed of response to demand and the completeness of our products support services.</p>
                        <div className='form-section-info-items'>
                            <div className='form-section-item'>
                                <img width="52" height="52" src="/iconsProject/people-group-solid.svg" class="form-section-item-img" alt="" ></img>
                                <div className='form-section-item-info'>
                                    <h3 className='form-section-item-title'>Close cooperation with customers</h3>
                                    <p className='form-section-item-text'>Clients can rely on us when it is pertaining to the quality of the products that we offer</p>
                                </div>
                            </div>
                            <div className='form-section-item'>
                                <img width="52" height="52" src="/iconsProject/envira-brands.svg" class="form-section-item-img" alt="" ></img>
                                <div className='form-section-item-info'>
                                    <h3 className='form-section-item-title'>Improved products and equipment processes</h3>
                                    <p className='form-section-item-text'>We are here to support your compliance and response needs while protecting human health and the environment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSection
