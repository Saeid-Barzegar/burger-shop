import React from 'react';

const Slider = ({image, title}) => (
    <div className="header">
        <img alt="slide" src={image} className="headerImage"/>
        <span className="headerTitle">{title}</span>
    </div>
);

export default Slider;