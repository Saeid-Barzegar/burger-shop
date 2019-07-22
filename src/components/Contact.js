import React from 'react';
import image_2 from '../assets/images/slide_2.jpg'
import Slider from "./Slider";

const Impressum = () => {

    return(
        <React.Fragment>
           <Slider image={image_2} title="Now try a burger with organic meat" />
           <span className="title">Contact Us</span>

           <div className="footer"></div>
       </React.Fragment>
   )
}

export default Impressum;