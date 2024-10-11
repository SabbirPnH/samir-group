

import {
    Carousel,
    CarouselItem,
    CarouselSlides,
} from 'keep-react';
import { FaAnglesRight } from "react-icons/fa6";
import { FaSquareCheck } from "react-icons/fa6";
import Image from 'next/image';
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
              <div className="flex gap-5 items-center pt-8">
              <FaAnglesRight className="text-[#F56800] "/>
              <p className="font-bold text-md sm:text-2xl text-[#272B36]">Under Processing outlets are given below:</p>
              </div>
              <div className="pb-7">
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">Mouchak</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">Uttara</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">Mirpur 10</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">New Market</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">Dhanmondi</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">Badda Shobasto tower</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">Bashundara City</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">Jamuna Future park</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">Wari</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">Mirpur Shi Ali Plaza.</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">CHATKHIL,NOAKHALI</p>
                </div>
                <div className="flex gap-4 items-center">
                <FaSquareCheck className="text-[#F56800] "/>
                <p className="font-bold text-sm text-[#272B36]">MAIJDI,NOAKHALI.</p>
                </div>
              </div>
            <h1 className="text-[#272B36] text-lg font-semibold uppercase">Shayari Collection</h1>
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


  
  