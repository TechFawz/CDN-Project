import React ,{useEffect, useRef, useState}from 'react';
import "./home.css"
import vidio from "./vidio/movie.mp4";
import image from "./vidio/image.jpg"
import { faPlay  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import axios from "axios";



function Home() {

    const [VideoData,SetVidioData] = useState([]); 
    useEffect(()=>{
        axios.get('http://localhost:8080/videos').then( res => {
            if(res.status==200)
            {
                SetVidioData(Object.values(res.data));
            }
            

        });
    },[])

    let url = new useLocation();
    console.log(url.type);

    return (
        <div className='HomeContainer'>

            {VideoData.map((data)=>{return(<VidioFormate image={data.image_url} Name={data.name} id={data._id}/>)})}
            

        </div>
    )
}

function VidioFormate(data) {

    const Img = useRef();
    const vidio = useRef();
    const[video,SetVideo] = useState();
   

    const playVidio = ()=>{
        Img.current.style.display="none";
        vidio.current.style.display="block";
        vidio.current.play();
    }

    useEffect(()=>{
        console.log(data.Name)
        axios.post('http://localhost:8080/',{params:{fileName:data.Name}}).then( res => {
            if(res.status==200)
            {
                console.log(res.data);
                SetVideo(res.data)
            }
            
        });
    },[])




    return (

        

        <div>
            <h2 style={{color:"rgba(254, 219, 57, 0.4)",padding:"10px"}}>{data.Name}</h2>


            <div className="MetaDataColoum" ref={Img} >
               <img src={data.image} style={{width:"350px", height:"240px"}}/>
               <FontAwesomeIcon icon={faPlay}  className="PlayButton" onClick={()=>{playVidio();}}/>
            </div>
            
            <video width="350" height="240" className="Vidios" ref={vidio} controls >
                <source src={video} type="video/mp4" />
            </video>


        </div>
    )
}

export default Home;