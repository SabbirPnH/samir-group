// 'use client';
// import React from 'react'; // Import React
// import autoPlay from 'embla-carousel-autoplay';
// import "../../app/globals.css";
// import {
//   Carousel as KeepCarousel,
//   CarouselButtons,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselItem,
//   CarouselNextButton,
//   CarouselPrevButton,
//   CarouselSlides,
// } from 'keep-react';

// // Array of images for the background images
// const images = [
//   'url(/img/StockCake-Vibrant underwater fish_1727407002.jpg)',
//   'url(/img/StockCake-Vibrant underwater fish_1727407002.jpg)',
//   'url(/img/StockCake-Vibrant underwater fish_1727407002.jpg)',
//   'url(/img/StockCake-Vibrant underwater fish_1727407002.jpg)',
 
// ];

// // Array of titles, subtitles, and button texts for each slide
// const content = [
//   {
//     title: 'Welcome to Our Dairy Farm',
//     subtitle: 'The Best Organic Products',
//     buttonText: 'Explore More',
//   },
//   {
//     title: 'Fresh & Healthy Dairy',
//     subtitle: 'Quality You Can Trust',
//     buttonText: 'Discover Now',
//   },
//   {
//     title: 'From Farm to Table',
//     subtitle: 'Taste the Difference',
//     buttonText: 'Shop Now',
//   },
//   {
//     title: 'Nature’s Goodness',
//     subtitle: 'Pure and Natural',
//     buttonText: 'Learn More',
//   },
//   {
//     title: 'Join Our Community',
//     subtitle: 'Be Part of the Farm Life',
//     buttonText: 'Get Involved',
//   },
// ];

// export const Carousel = () => {
//   const autoplay = autoPlay();
  
//   return (
//     <KeepCarousel options={{ loop: true }} plugins={[autoplay]}>
//       <CarouselSlides>
//         {images.map((image, index) => (
//           <CarouselItem key={index}>
//             <div 
//               className="flex items-center justify-center sm:justify-start h-52 sm:h-96 relative px-4 sm:px-20"
//               style={{
//                 backgroundImage: image,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             >
//               <div className=" text-center sm:text-left   text-black">
//                 <h1 className="text-3xl font-bold mb-2">{content[index].title}</h1>
//                 <p className="text-lg mb-4">{content[index].subtitle}</p>
//                 <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
//                   {content[index].buttonText}
//                 </button>
//               </div>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselSlides>
//       <div className='px-4 sm:px-20'>
//         <CarouselControl>
//           <CarouselButtons>
//             <CarouselPrevButton />
//             <CarouselNextButton />
//           </CarouselButtons>
//           <CarouselIndicators />
//         </CarouselControl>
//       </div>
//     </KeepCarousel>
//   );
// };




'use client';
import React from 'react'; // Import React
import autoPlay from 'embla-carousel-autoplay';
import "../../app/globals.css";
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
  '/img/fishman.jpg',
  '/img/StockCake-Vibrant underwater fish_1727407002.jpg',
  '/img/StockCake-Vibrant underwater fish_1727407002.jpg',
  '/img/StockCake-Vibrant underwater fish_1727407002.jpg',
];

// Array of titles, subtitles, and button texts for each slide
const content = [
  {
    title: 'Welcome to Our Dairy Farm',
    subtitle: 'The Best Organic Products',
    buttonText: 'Explore More',
  },
  {
    title: 'Fresh & Healthy Dairy',
    subtitle: 'Quality You Can Trust',
    buttonText: 'Discover Now',
  },
  {
    title: 'From Farm to Table',
    subtitle: 'Taste the Difference',
    buttonText: 'Shop Now',
  },
  {
    title: 'Nature’s Goodness',
    subtitle: 'Pure and Natural',
    buttonText: 'Learn More',
  },
  {
    title: 'Join Our Community',
    subtitle: 'Be Part of the Farm Life',
    buttonText: 'Get Involved',
  },
];

export const Carousel = () => {
  const autoplay = autoPlay();
  
  return (
    <KeepCarousel options={{ loop: true }} plugins={[autoplay]}>
      <CarouselSlides>
        {images.map((srcImage, index) => (
          <CarouselItem key={index}>
            <div className="relative h-52 sm:h-96">
              <Image
                src={srcImage}
                alt={content[index].title}
                layout="fill"
                objectFit="cover"
                className=" bg-red-300"
              />
              <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-20">
                <div className="text-center sm:text-left text-black">
                  <h1 className="text-3xl font-bold mb-2">{content[index].title}</h1>
                  <p className="text-lg mb-4">{content[index].subtitle}</p>
                  <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
                    {content[index].buttonText}
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
