





'use client';
import React from 'react'; // Import React
import autoPlay from 'embla-carousel-autoplay';
import "../../app/globals.css";
import { FaArrowRight } from "react-icons/fa";
import {
  Carousel as KeepCarousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from 'keep-react';
import Image from 'next/image'; // Import the Next.js Image component

// Array of image sources
const images = [
  '/img/banner (3).jpg',
  '/img/banner (2).jpg',
  '/img/banner (4).jpg',
  '/img/banner (1).jpg',
];

export const Carousel = () => {
  const autoplay = autoPlay();
  
  return (
    <KeepCarousel options={{ loop: true }} plugins={[autoplay]}>
      <CarouselSlides>
        {images.map((srcImage, index) => (
          <CarouselItem key={index}>
            <div className="relative h-60 sm:h-screen">
              <Image
                src={srcImage}
                alt={`Slide ${index + 1}`} // Use placeholder alt text for now
                layout="fill"
                objectFit="cover"
                className=""
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40" /> {/* Adjust the opacity as needed */}
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <div className='px-4 sm:px-20'>
        <CarouselControl>
          <CarouselButtons>
            <CarouselPrevButton />
            <CarouselNextButton />
          </CarouselButtons>
          <CarouselIndicators />
        </CarouselControl>
      </div>
    </KeepCarousel>
  );
};
