import React,{useState} from 'react';
import image from "./vidio/image.jpg";
import "./contactus.css"
import { faEnvelope , faPhone  } from "@fortawesome/free-solid-svg-icons"
import {faGooglePlus,faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUs() {

    const [value,SetValue] = useState("");

    let mail ="singlasonu.net@gmail.com";
    let number="9660415904";
    let linkedinId = "https://www.linkedin.com/in/sonu-singla-b33969213/";
    let google="https://www.personalxproject.tech/";



    return (
        <div className="ContactUsContainer">
            <h2 className=" ContactUsContainerHeading">Contact Us</h2>
            <div className="ContactUsContainerContactUs">
                    <FontAwesomeIcon icon={faPhone} className="icon" onClick={()=>{window.location = `tel:${number}`; SetValue(number)}} />
                    <FontAwesomeIcon icon={faEnvelope} className="icon" onClick={()=>{window.location = `mailto:${mail}`; SetValue(mail)}} />
                    <FontAwesomeIcon icon={faGooglePlus} className="icon" onClick={() => {window.location = google; SetValue(google)}}  />
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" onClick={() => {window.location = linkedinId; SetValue(linkedinId)}}  />
            </div>
            <h4 style={{color:"white"}}>{value}</h4>
        </div>
    )
}

export default ContactUs;