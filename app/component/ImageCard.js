

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const ImageCard = () => {

  const imageData = [
    {
      src: "1 (1).jpg",
      hoverIcon: "thread.png", 
      title: "Fabric Design",
      description: "Could you clarify what you're looking for regarding fabric design",
    },
    {
      src: "1 (3).jpg",
      hoverIcon: "clothes.png", 
      title: "Sustain Design",
      description: "Sustainable design refers to the creation of products",
    },
    {
      src: "3 (1).jpg",
      hoverIcon: "fabric-.png", 
      title: "Culture Design",
      description: "Cultural design refers to the practice of integrating and reflecting the values, traditions",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-20 py-12">
      {imageData.map((item, index) => (
        <div key={index} className="relative group">
          {/* Image */}
          <Image
            src={`/img/${item.src}`} 
            alt={`image-${index}`} 
            className="w-full h-96 object-cover"
            width={400}
            height={400}
          />

          {/* Hover Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-white text-start pl-10 px-2">
              {/* Dynamic Hover Icon */}
              <Image 
                src={`/img/${item.hoverIcon}`}  
                alt={`hover-icon-${index}`}
                className="object-contain pb-5 "
                width={60}
                height={60}
              />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3> 
              <p className="text-md py-4">{item.description}</p> 
              <a href="#" className="  py-2.5 sm:py-4 mt-0 sm:mt-4  text-lg   text-[#F56800]  font-bold">
              Read More
              <FaArrowRight className=' inline-flex ml-3' />

            </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
