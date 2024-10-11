
import {
    Carousel,
    CarouselItem,
    CarouselSlides,
} from 'keep-react';
import Image from 'next/image';
const imageData = [
    "/img/lungi (1).jpg",
    "/img/lungi (2).jpg",
    "/img/lungi (3).jpg",
    "/img/lungi (4).jpg",
    "/img/lungi (5).jpg",
    "/img/lungi (6).jpg",
    "/img/lungi (7).jpg",
    "/img/lungi (2).jpg",
    "/img/lungi (4).jpg",
    "/img/lungi (1).jpg",
   
     
];

export const LungiCollection = () => {
    return (
        <div className="px-4 sm:px-20">
            <h1 className="text-[#272B36] text-lg font-semibold uppercase">lungi Collection</h1>
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


  
  