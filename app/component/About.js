import Image from "next/image";
import { RxBorderStyle } from "react-icons/rx";
export const About=()=>{
    return(
       <div className="px-4 sm:px-20 py-5 sm:py-12">
  <div className=" lg:flex lg:flex-row items-center gap-10">
    {/* Left Column (Image and Experience Section) */}
    <div className="w-full lg:w-1/2">
  <div className="grid grid-cols-2 gap-2">
    {/* Full-height experience block */}
    <div className="relative bg-[#EDDD5E] text-white rounded wow fadeIn h-full" data-wow-delay="0.7s">
      <div className="about-experience rounded p-4 flex flex-col items-center justify-center h-full">
        <h1 className="text-7xl text-[#404A3D] font-bold mb-0">15</h1>
        <small className="text-xl text-[#404A3D] font-semibold">Years Experience</small>
      </div>
    </div>

    {/* Image blocks */}
    <div className="wow fadeIn h-full flex items-stretch" data-wow-delay="0.1s">
      <Image className="w-full object-cover rounded" src="/img/portfolio-image-1.jpg" alt="Service 1" width={400} height={400}/>
    </div>
    <div className="wow fadeIn h-full flex items-stretch" data-wow-delay="0.3s">
      <Image className="w-full object-cover rounded" src="/img/portfolio-image-6.jpg" alt="Service 2" width={400} height={400}/>
    </div>
    <div className="wow fadeIn sm:h-72 flex items-stretch" data-wow-delay="0.5s">
      <Image className="w-full object-cover rounded" src="/img/portfolio-image-3.jpg" alt="Service 3" width={400} height={400}/>
    </div>
  </div>
</div>


    {/* Right Column (Text Content) */}
    <div className="w-full lg:w-1/2 wow fadeIn" data-wow-delay="0.5s">
      <p className="text-[#5B8C51] text-lg font-semibold uppercase text-start bg-white inline-block  py-1 rounded  pt-3 sm:pt-0 sm:mb-2">About Us <RxBorderStyle  className="inline-flex text-2xl font-semibold"/></p>
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-[#404A3D] text-justify">Know About Our Fish Farm &amp; Our History</h1>
      <p className="mb-4 text-[#404A3D] text-justify">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 mb-14">
        {/* First Feature Box */}
        <div>
          <img className="w-16 h-16 mb-4" src="/img/service.png" alt="Dedicated Services" />
          <h5 className="text-lg font-semibold mb-2 text-[#404A3D]">Dedicated Services</h5>
          <span className="text-justify">Clita erat ipsum et lorem et sit, sed stet lorem sit clita</span>
        </div>
        {/* Second Feature Box */}
        <div>
          <img className="w-16 h-16 mb-4" src="/img/product.png" alt="Organic Products" />
          <h5 className="text-lg font-semibold mb-2 text-[#404A3D]">Organic Products</h5>
          <span className="text-justify">Clita erat ipsum et lorem et sit, sed stet lorem sit clita</span>
        </div>
      </div>
      <a href="#" className="bg-[#EDDD5E] rounded-full py-4 px-8 text-lg hover:text-black  text-[#404A3D]">Explore More</a>
    </div>
  </div>
</div>

 
    )
}