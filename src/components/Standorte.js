import React from 'react';
import image_2 from "../assets/images/slide_2.jpg";
import Slider from "./Slider";

const Standorte = () => {

    return(
        <React.Fragment>
           <Slider image={image_2} title="Jetzt Burger mit Bio Fleisch probieren" />
           <span className="title">Standorte</span>

           <div className="footer"></div>
       </React.Fragment>
       
   )
};

export default Standorte;