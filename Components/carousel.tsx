import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';
interface CarouselComponentProps {
    images: string[];
}

const CarouselComponent: React.FC <CarouselComponentProps> = ({images}) => {
    return (
        <Carousel 
        showThumbs = {false} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay
        showIndicators={true}

>
            {images.map((image, index) =>
            <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
            </div>
        )}
        </Carousel>
    )
}

export default CarouselComponent