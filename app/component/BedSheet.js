

import {
    Carousel,
    CarouselItem,
    CarouselSlides,
} from 'keep-react';
import Image from 'next/image';
const imageData = [
    "/img/bed (1).jpg",
    "/img/bed (2).jpg",
    "/img/bed (3).jpg",
    "/img/bed (4).jpg",
    "/img/bed (5).jpg",
    "/img/bed (6).jpg",
    "/img/bed (7).jpg",
    "/img/bed (8).jpg",
    "/img/bed (9).jpg",
    "/img/bed (10).jpg",
    "/img/bed (11).jpg",
   
  
 
   
];

export const BedSheet = () => {
    return (
        <div className="px-4 sm:px-20">
            <h1 className="text-[#272B36] text-lg font-semibold uppercase">Bed Sheet Collection</h1>
            <Carousel options={{ slidesToScroll: 1, slidesToShow: 5 }}>
                <CarouselSlides className="flex">
                    {imageData.map((img, index) => (
                        <CarouselItem key={index} className="w-full flex-[0_0_33.33%] sm:flex-[0_0_20%]"> 
                            {/* 33.33% for 3 images on mobile, 20% for 5 images on larger screens */}
                            <div className="flex items-center justify-center rounded-xl border border-metal-100 my-8 dark:border-metal-900 dark:bg-metal-900">
                            <Image src={img} alt={`Image ${index + 1}`} className="object-cover w-full h-full rounded-xl" width={400} height={400}/>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselSlides>
            </Carousel>
        </div>
    );
};


  
  