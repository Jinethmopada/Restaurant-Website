import React, { useState } from "react";
import Profile from "./Profile";

const About = () => {
    const [viewProfile, setViewProfile] = useState(true);
    return(
        <>
        <div>
        <h1>About Us Page</h1>
        <p>This Page is know about the Details of Restaurant</p>
        {viewProfile ? 
        <button onClick={()=>{
            setViewProfile(false);
        }}>Close Profile</button> : 
        <button onClick={()=>{
            setViewProfile(true);
        }}>View Profile</button>
        }
        {viewProfile === true ? <Profile name={"Jineth"} role={"React Developer"}/> : null}
        </div>
        </>
    )
}

export default About