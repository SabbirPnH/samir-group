

import {
    Carousel,
    CarouselItem,
    CarouselSlides,
} from 'keep-react';

const imageData = [
    "/img/panjabi (1).jpg",
    "/img/panjabi (2).jpg",
    "/img/panjabi (3).jpg",
    "/img/panjabi (4).jpg",
    "/img/panjabi (5).jpg",
    "/img/panjabi (6).jpg",
    "/img/panjabi (7).jpg",
    "/img/panjabi (8).jpg",
 
    
    
];

export const PanjabiCollection = () => {
    return (
        <div className="px-4 sm:px-20 pb-8">
            <h1 className="text-[#272B36] text-lg font-semibold uppercase">panjabi Collection</h1>
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


  
  