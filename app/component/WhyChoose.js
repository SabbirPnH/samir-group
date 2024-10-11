import Image from 'next/image';
import React from 'react';
import { FaHeart, FaThumbsUp, FaBrain, FaLifeRing } from 'react-icons/fa'; // Import icons

const IconBox = ({ icon: IconComponent, title, description }) => (
  <div className="flex items-start space-x-4  ">
    <div className="text-3xl text-[#F56800]">
      <IconComponent /> {/* Use the imported icon component here */}
    </div>
    <div>
      <h5 className="text-lg text-[#272B36] font-bold mb-2 ">{title}</h5>
      <p className="text-[#596277] text-md text-justify tracking-tight">{description}</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-12 ">
      <div className=" px-4 sm:px-20">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div >
            <h6 className="text-[#F56800] text-xl font-semibold uppercase mb-2">Why choose us</h6>
           
            <p className="mb-8 text-[#596277] text-md text-justify tracking-tight">
            At Samir Textil, we pride ourselves on delivering exceptional quality, innovative solutions, and unmatched customer service. Here’s why you should choose us.
            </p>

            {/* Icon Boxes */}
            <div className="space-y-6">
              <IconBox
                icon={FaHeart}
                title="Expertise and Experience"
                description="With years of experience in Samir textil, our team of skilled professionals brings in-depth knowledge and expertise to every project."
              />
              <IconBox
                icon={FaThumbsUp}
                title="Commitment to Quality"
                description="We are dedicated to maintaining the highest standards in everything we do."
              />
              <IconBox
                icon={FaBrain}
                title="Customer-Centric Approach"
                description="Your satisfaction is our top priority. We take the time to understand your goals and challenges."
              />
             
            </div>
          </div>

          {/* Right column (image) */}
          <div className="w-full h-full">
            <Image
              src="/img/StockCake-Textile Factory Scene_1728011217.jpg"
              alt="Assorted-color yarn lot"
              className=" w-full h-56 sm:h-96"
              width={400} height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
