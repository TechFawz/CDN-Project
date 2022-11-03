import React ,{useRef}from 'react';
import "./home.css"
import vidio from "./vidio/movie.mp4";
import image from "./vidio/image.jpg"
import { faPlay  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";


function Home() {

    let url = new useLocation();
    console.log(url.type);

    return (
        <div className='HomeContainer'>

            <VidioFormate myvidio={vidio} Name="TechFawzLogo Video" ServerName="From Fist Server"/>
            <VidioFormate myvidio={vidio} Name="TechFawzLogo Video" ServerName="From second Server"/>

        </div>
    )
}

function VidioFormate(data) {

    const Img = useRef();
    const vidio = useRef();

    const playVidio = ()=>{
        console.log(vidio.current);
        Img.current.style.display="none";
        vidio.current.style.display="block";
        vidio.current.play();
    }


    return (
        <div>
            <h2 style={{color:"rgba(254, 219, 57, 0.4)",padding:"10px"}}>{data.Name}</h2>


            <div className="MetaDataColoum" ref={Img} >
               <img src={image} style={{width:"350px", height:"240px"}}/>
               <FontAwesomeIcon icon={faPlay}  className="PlayButton" onClick={()=>{playVidio();}}/>
            </div>
            
            <video width="350" height="240" className="Vidios" ref={vidio} controls >
                <source src={data.myvidio} type="video/mp4" />
            </video>

            <h4  style={{color:"rgba(255, 255, 255, 0.7)",padding:"10px"}}>From - server</h4>

        </div>
    )
}

export default Home;