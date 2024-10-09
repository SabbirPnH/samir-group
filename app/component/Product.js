

import {
    Carousel,
    CarouselItem,
    CarouselSlides,
} from 'keep-react';

const imageData = [
    "/img/Shayari (1).jpg",
    "/img/Shayari (2).jpg",
    "/img/Shayari (6).jpg",
    "/img/Shayari (3).jpg",
    "/img/Shayari (5).jpg",
    "/img/Shayari (8).jpg",
    "/img/Shayari (7).jpg",
    "/img/Shayari (4).jpg",
    "/img/22.jpg",
    
];

export const ShayariCollection = () => {
    return (
        <div className="px-4 sm:px-20">
              <h1 className="text-[#F56800] text-xl font-semibold uppercase sm:text-center pb-4 sm:pb-0">our products</h1>
            <h1 className="text-[#272B36] text-lg font-semibold uppercase">Shayari Collection</h1>
            <Carousel options={{ slidesToScroll: 1, slidesToShow: 5 }}>
                <CarouselSlides className="flex">
                    {imageData.map((img, index) => (
                        <CarouselItem key={index} className="w-full flex-[0_0_33.33%] sm:flex-[0_0_20%]"> 
                            {/* 33.33% for 3 images on mobile, 20% for 5 images on larger screens */}
                            <div className="flex items-center justify-center rounded-xl border border-metal-100 my-8 dark:border-metal-900 dark:bg-metal-900">
                                <img src={img} alt={`Image ${index + 1}`} className="object-cover w-full h-full rounded-xl" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselSlides>
            </Carousel>
        </div>
    );
};


  
  