import Image from "next/image";

const ScrollBanner=()=>{
    return(
<div className="relative mt-5 py-5 sm:py-20">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url('/img/bg_promo2.jpg')` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>

  {/* Content */}
  <div className="relative px-4 sm:px-20 py-5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* First Section */}
      <div className="wow fadeIn" data-wow-delay="0.3s">
        <div className="grid sm:grid-cols-4 gap-4 items-center">
          <div className=" sm:col-span-1">
            <Image className="w-full h-56 rounded" src="/img/6insta.png" alt="Banner 1" width={400} height={400} />
          </div>
          <div className=" sm:col-span-3">
            <h2 className="text-white text-2xl lg:text-4xl font-bold mb-3">
              We Sell Best Fish Products
            </h2>
            <p className="text-white mb-4 py-2 text-justify">
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <a
              className="bg-[#EDDD5E]  hover:text-black text-[#404A3D] text-lg rounded-full py-2 px-4"
              href="#"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="wow fadeIn" data-wow-delay="0.5s">
        <div className="grid sm:grid-cols-4 gap-4 items-center">
          <div className=" sm:col-span-1">
            <Image className="w-full h-56 rounded" src="/img/insta7.png" alt="Banner 2" width={400} height={400} />
          </div>
          <div className=" sm:col-span-3">
            <h2 className="text-white text-2xl lg:text-4xl font-bold mb-3">
              We Deliver Fresh Fish Worldwide
            </h2>
            <p className="text-white mb-4 py-2 text-justify">
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <a
              className="bg-[#EDDD5E] hover:text-black text-[#404A3D] text-lg rounded-full py-2 px-4"
              href="#"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}
export default ScrollBanner;