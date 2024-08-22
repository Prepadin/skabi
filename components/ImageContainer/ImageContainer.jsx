import React from "react";
import "./imagecontainer.css";
import Image from 'next/image'

const ImageContainer = ({ imageSource, description }) => {
    return (
        <div className="image-container">
            <Image className="image" src={imageSource} alt="alt text goes here" />
            <p className="date">{description}</p>
        </div>
    );
};

export default ImageContainer;