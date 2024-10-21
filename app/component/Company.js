import Image from "next/image";
import Link from "next/link";

const Company = () => {
  return (
<section className="bg-gray-50 px-4 sm:px-20 sm:pt-10 font-[sans-serif]" id="company">
  <div>
    <h2 className="text-[#E72929] text-4xl font-bold font-manrope leading-normal uppercase text-center">Consultancy</h2>
    <div className="bg-[#F7F7F7] font-[sans-serif]">
      <div className=" py-3 sm:py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="relative bg-white border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
  {/* Background Image with Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{ backgroundImage: "url('/img/5e44e26a598c278f565bfe0f_Consultancy.jpg')" }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Content on top of the background */}
  <div className="relative p-8">
    <Image
      className="h-16 w-16 pb-1.5"
      src="/img/conversation.png"
      alt="Samir Textile"
      width={400}
      height={400}
    />
    <Link target="_blank" href={"https://beta.samirgroupbd.com/"}>
      <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer">
      SM Foreign Consultancy 
      </h3>
    </Link>
    <p className="text-gray-200 text-sm leading-relaxed text-justify">
    SM Foreign Consultancy Guiding You Towards Global Opportunities and Success
    </p>
  </div>
      </div>
      <div className="relative bg-white border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
  {/* Background Image with Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{ backgroundImage: "url('/img/7h4f_c4ir_140730.jpg')" }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Content on top of the background */}
  <div className="relative p-8">
    <Image
      className="h-16 w-16 pb-1.5"
      src="/img/travelling.png"
      alt="Samir Textile"
      width={400}
      height={400}
    />
    <Link target="_blank" href={"#"}>
      <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer">
      Air Way International 
      </h3>
    </Link>
    <p className="text-gray-200 text-sm leading-relaxed text-justify">
    Air Way International: Your Gateway to Seamless Global Freight and Logistics Solutions
    </p>
  </div>
      </div>
        <div className="relative bg-white border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
  {/* Background Image with Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{ backgroundImage: "url('/img/1700732513661.jpg')" }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Content on top of the background */}
  <div className="relative p-8">
    <Image
      className="h-16 w-16 pb-1.5"
      src="/img/clothes.png"
      alt="Samir Textile"
      width={400}
      height={400}
    />
    <Link target="_blank" href={"https://textile.samirgroupbd.com/"}>
      <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer">
        Samir Textile (Pvt) Ltd.
      </h3>
    </Link>
    <p className="text-gray-200 text-sm leading-relaxed text-justify">
      Samir Textile (Pvt) Ltd.: Leading Innovator in Textile Manufacturing and Exporting
    </p>
  </div>
      </div>


        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        <div className="relative bg-white border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
  {/* Background Image with Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{ backgroundImage: "url('/img/bi36meqa62rhbghgdrkh.jpg')" }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Content on top of the background */}
  <div className="relative p-8">
    <Image
      className="h-16 w-16 pb-1.5"
      src="/img/car.png"
      alt="Samir motors"
      width={400}
      height={400}
    />
    <Link target="_blank" href={"https://motors.samirgroupbd.com/"}>
      <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer">
      Samir Motors Corporation
      </h3>
    </Link>
    <p className="text-gray-200 text-sm leading-relaxed text-justify">
    Samir Motors Corporation: Driving Excellence in Automotive Sales and Services
    </p>
  </div>
      </div>
      <div className="relative bg-white border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
  {/* Background Image with Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{ backgroundImage: "url('/img/plant-growing-from-soil.jpg')" }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Content on top of the background */}
  <div className="relative p-8">
    <Image
      className="h-16 w-16 pb-1.5"
      src="/img/smart-farm.png"
      alt="Samir motors"
      width={400}
      height={400}
    />
    <Link target="_blank" href={"https://agro.samirgroupbd.com/"}>
      <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer">
      Saimon Agros & Fisheries 
      </h3>
    </Link>
    <p className="text-gray-200 text-sm leading-relaxed text-justify">
    Saimon Agro & Fisheries Sustainable Farming and Aquaculture for a Healthier Future
    </p>
  </div>
      </div>
      <div className="relative bg-white border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
  {/* Background Image with Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70"
    style={{ backgroundImage: "url('/img/Screenshot+2023-01-13+at+11.37.28.png')" }}
  ></div>
  <div className="absolute inset-0 bg-black opacity-70"></div>

  {/* Content on top of the background */}
  <div className="relative p-8">
    <Image
      className="h-16 w-16 pb-1.5"
      src="/img/businessman.png"
      alt="Samir motors"
      width={400}
      height={400}
    />
    <Link target="_blank" href={"#"}>
      <h3 className="text-white text-lg font-semibold mb-3 cursor-pointer">
      Saima International 
      </h3>
    </Link>
    <p className="text-gray-200 text-sm leading-relaxed text-justify">
    Saima International is a global enterprise specializing in various sectors 
    </p>
  </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</section>


                                        
  );
};

export default Company;
