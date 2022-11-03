import React from 'react';
import image from "./vidio/image.jpg";
import "./aboutus.css"

function AboutUs()
{
    return(
        <div className="AboutUsContainer">
            <h2 className="AboutUsContainerHeading">About Us</h2>
            <img src={image} alt="Girl in a jacket" width="100" height="100" className="myimage"></img>
            <div className="AboutUsContainerAboutUs">
                <span className="AboutUsContainerAboutUsSpan">Howdy,I'm Sonu Singla Computer Engineer (B.Tech)</span> I'm a software engineer from India who loves to build stuff that interacts with data and the internet. I'm a software engineer from India who loves to build stuff that interacts with data and the internet.
            </div>
        </div>
    )
}

export default AboutUs;