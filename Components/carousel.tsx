import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';
import Image from "next/image";
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
                <Image src={image} alt={`Slide ${index}`} />
            </div>
        )}
        </Carousel>
    )
}

export default CarouselComponent