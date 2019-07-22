import React from 'react';
import image_3 from '../assets/images/slide_3.jpg'
import Slider from "./Slider";

const Impressum = () => {

    return(
        <React.Fragment>
           <Slider image={image_3} title="Jetzt Burger mit Bio Fleisch probieren" />
           <span className="title">Impressum</span>

           <div className="footer"></div>
       </React.Fragment>
   )
}

export default Impressum;