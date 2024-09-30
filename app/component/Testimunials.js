"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';  // Import Swiper pagination styles
import "../../app/globals.css"
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';  // Ensure Autoplay is imported
import Image from 'next/image';

export default function TestimonialCarousel() {
  return (
    <div className="px-4 sm:px-20 py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center mb-10">
          <h6 className="text-[#D81324] font-bold uppercase">Testimonial </h6>
          <h1 className="text-2xl sm:text-4xl font-bold text-[#0B2154] mb-5">Our Clients Say!</h1>
        </div>
        <Swiper
          slidesPerView={1}  // Initially, 1 slide will be visible on small screens
          spaceBetween={10}
          loop={true}  // Enable continuous looping
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Set delay for autoplay (3 seconds)
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,  // On small devices, show 2 slides
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,  // On medium devices, show 3 slides
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}  // Include Pagination and Autoplay modules
          className="mySwiper"
        >
          {/* Testimonial Slide 1 */}
          <SwiperSlide>
            <div className="testimonial-item text-center mb-10 border-2 border-[#D81324]">
              <Image className=" rounded-full bg-[#f1f5f9] p-2 mx-auto mb-3" src="/img/testimonial-1.jpg" style={{ width: 80, height: 80 }} alt="Client 1" width={400} height={400} />
              <h5 className="mb-0 text-lg text-[#0B2154] font-bold">Client Name</h5>
              <small className='text-[#596277]'>Profession</small>
              <div className="bg-light text-center p-4">
                <p className="mb-0 text-[#596277] text-justify">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Testimonial Slide 2 */}
          <SwiperSlide>
            <div className="testimonial-item text-center border-2 border-[#D81324]">
              <Image className="bg-[#f1f5f9] rounded-full p-2 mx-auto mb-3 " src="/img/testimonial-2.jpg" style={{ width: 80, height: 80 }} alt="Client 2"  width={400} height={400}/>
              <h5 className="mb-0 text-lg text-[#0B2154] font-bold">Client Name</h5>
              <small className='text-[#596277]'>Profession</small>
              <div className="bg-light text-center p-4">
                <p className="mb-0 text-[#596277] text-justify">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Testimonial Slide 3 */}
          <SwiperSlide>
            <div className="testimonial-item text-center border-2 border-[#D81324]">
              <Image className="bg-[#f1f5f9] rounded-full p-2 mx-auto mb-3" src="/img/testimonial-3.jpg" style={{ width: 80, height: 80 }} alt="Client 3"  width={400} height={400}/>
              <h5 className="mb-0 text-lg text-[#0B2154] font-bold">Client Name</h5>
              <small className='text-[#596277]'>Profession</small>
              <div className="bg-light text-center p-4">
                <p className="mb-0 text-[#596277] text-justify">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Testimonial Slide 4 */}
          <SwiperSlide>
            <div className="testimonial-item text-center border-2 border-[#D81324]">
              <Image className="bg-[#f1f5f9] rounded-full p-2 mx-auto mb-3" src="/img/testimonial-4.jpg" style={{ width: 80, height: 80 }} alt="Client 4"  width={400} height={400}/>
              <h5 className="mb-0 text-lg text-[#0B2154] font-bold">Client Name</h5>
              <small className='text-[#596277]'>Profession</small>
              <div className="bg-light text-center p-4">
                <p className="mb-0 text-[#596277] text-justify">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
