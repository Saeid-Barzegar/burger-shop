import React from 'react';
import image_3 from "../assets/images/slide_3.jpg";
import Slider from "./Slider";

const Standorte = () => {

    return(
        <React.Fragment>
           <Slider image={image_3} title="Now try a burger with organic meat" />
           <span className="title">About Us</span>

           <div className="footer"></div>
       </React.Fragment>
       
   )
};

export default Standorte;