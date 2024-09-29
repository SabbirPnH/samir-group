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
  '/img/01.jpg',
  '/img/slider-3.jpg',
  '/img/slider-1.jpg',
];

// Array of titles, subtitles, and button texts for each slide
const content = [
  {
    title: 'Gear Up for Your Next Fishing Expedition',
    subtitle: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour.',
    buttonText: 'Explore More',
  },
  {
    title: 'The Farm of Fish products',
    subtitle: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour.',
    buttonText: 'Explore More',
  },
  {
    title: 'Best Organic Fish Products',
    subtitle: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour.',
    buttonText: 'Shop Now',
  },
  {
    title: 'Nature’s Goodness',
    subtitle: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected humour.',
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
              <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-20 z-10">
              <div className="text-center sm:text-left text-white max-w-lg"> {/* Added max-w-md for limiting width */}
  <h1 className="text-2xl lg:text-5xl font-bold mb-2 ">{content[index].title}</h1>
  <p className="text-lg mb-4 py-3 line-clamp-2 sm:line-clamp-none ">{content[index].subtitle}</p>
  <button className="bg-[#EDDD5E] rounded-full py-2.5 sm:py-4 px-8 text-lg hover:text-black  text-[#404A3D]">
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
// import Image from 'next/image'; // Import the Next.js Image component

// // Array of image sources
// const images = [
//   '/img/01.jpg',
//   '/img/slider-3.jpg',
//   '/img/slider-1.jpg',
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
//         {images.map((srcImage, index) => (
//           <CarouselItem key={index}>
//             <div className="relative h-52 sm:h-screen">
//               <Image
//                 src={srcImage}
//                 alt={content[index].title}
//                 layout="fill"
//                 objectFit="cover"
//                 className=" bg-red-300"
//               />
//               <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-4 sm:px-20">
//                 <div className="text-center sm:text-left text-black">
//                   <h1 className="text-3xl font-bold mb-2">{content[index].title}</h1>
//                   <p className="text-lg mb-4">{content[index].subtitle}</p>
//                   <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
//                     {content[index].buttonText}
//                   </button>
//                 </div>
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
