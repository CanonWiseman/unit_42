import React from "react";
import { Link } from "react-router-dom";


//simple 404 component for unknown urls
const NotFound = () =>{
    return(
    <div>
        <p style={{color: "black", fontSize: "48px", fontWeight: "700", textAlign: "center"}}>Page Currently doesnt exist :(</p>
        <p style={{color: "black", fontSize: "28px", fontWeight: "700", textAlign: "center"}}>Please navigate back to home!</p>
        <div style={{textAlign:"center"}}>
            <Link style={{fontSize: "28px"}} to="/">Home</Link>
        </div>
        
    </div>
    )
    
}

export default NotFound;