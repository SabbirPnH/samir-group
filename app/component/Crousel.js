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
  '/img/slider-mainbg-001.jpg',
  '/img/slider-mainbg-003.jpg',
  '/img/slider-mainbg-004.jpg',
];

// Array of titles, subtitles, and button texts for each slide
const content = [
  {
    title: 'World Class Textile  Engineering Solutions!',                                          
    subtitle: 'welcome to texttile',
    buttonText: 'Explore More',
  },
  {
    title: 'The Ultimate Textile Collection for the Classy ',                                          
    subtitle: 'welcome to texttile',
    buttonText: 'Explore More',
  },
  {
    title: ' We Produce   Luxury and Comfort  ',                                                                                   
    subtitle: 'welcome to texttile',
    buttonText: 'Learn More',
  },


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
                alt={content[index].title}
                layout="fill"
                objectFit="cover"
                className=""
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40" /> {/* Adjust the opacity as needed */}
              <div className="absolute inset-0 flex items-center justify-center  px-4 sm:px-20 z-10">
              <div className="text-center  text-white max-w-5xl"> {/* Added max-w-md for limiting width */}
              <p className="text-xl text-[#F56800] font-semibold uppercase tracking-widest mb-4 py-3  ">{content[index].subtitle}</p>
  <h1 className="text-2xl lg:text-6xl font-bold mb-2 ">{content[index].title}</h1>
  <button className="bg-[#F56800]  py-2.5 sm:py-4 mt-0 sm:mt-4  px-8 text-sm hover:bg-[#272B36]  text-white uppercase font-semibold">
    {content[index].buttonText} <FaArrowRight className='inline-flex ml-3' />
  </button>
</div>

              </div>
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





