import Image from "next/image";
import Link from "next/link";

const Company = () => {
  return (
<section className="bg-gray-50 px-4 sm:px-20 sm:pt-10 font-[sans-serif]" id="company">
  <div>
    <h2 className="text-[#E72929] text-4xl font-bold font-manrope leading-normal uppercase text-center">Our Company</h2>
    <div className="bg-[#F7F7F7] font-[sans-serif]">
      <div className=" py-3 sm:py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="bg-white  border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
            <div className="p-8">
            <Image className="h-20 w-20 pb-1.5" src="/img/text.jpg" alt="" width={400} height={400}/>
            <Link target="_blank" href={"https://textile.samirgroupbd.com/"}>  <h3 className="text-gray-800 text-lg font-semibold mb-3 cursor-pointer">Samir Textile (Pvt) Ltd.</h3></Link>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">Samir Textile (Pvt) Ltd.: Leading Innovator in Textile Manufacturing and Exporting</p>
            </div>
          </div>
          <div className="bg-white  border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
            <div className="p-8">
            <Image className="h-20 w-20 pb-1.5" src="/img/moto.jpg" alt="" width={400} height={400}/>
            <Link target="_blank" href={"https://motors.samirgroupbd.com/"}><h3 className="text-gray-800 cursor-pointer text-lg font-semibold mb-3" >Samir Motors Corporation</h3></Link>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">Samir Motors Corporation: Driving Excellence in Automotive Sales and Services</p>
            </div>
          </div>
          <div className="bg-white   border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
            <div className="p-8">
            <Image className="h-20 w-20 pb-1.5" src="/img/agro.png" alt="" width={400} height={400}/>
            <Link target="_blank" href={"https://agro.samirgroupbd.com/"}><h3 className="text-gray-800 text-lg font-semibold mb-3">Saimon Agro & Fisheries Farm</h3></Link>
              <p className="text-gray-500 text-sm leading-relaxed text-justify cursor-pointer">Saimon Agro & Fisheries Farm: Sustainable Farming and Aquaculture for a Healthier Future</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
          <div className="bg-white cursor-pointer border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
            <div className="p-8">
            <Image className="h-20 w-20 pb-1.5" src="/img/int.jpg" alt="" width={400} height={400}/>
              <h3 className="text-gray-800 text-lg font-semibold mb-3">Saima International</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">Saima International: Your Trusted Partner in Global Trade and Logistics</p>
            </div>
          </div>
          <div className="bg-white border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
            <div className="p-8">
            <Image className="h-20 w-20 pb-1.5" src="/img/consultancy.jpg" alt="" width={400} height={400}/>
            <Link target="_blank" href={"https://beta.samirgroupbd.com/"}><h3 className="text-gray-800 cursor-pointer  text-lg font-semibold mb-3">Saif Foreign Consultancy</h3> </Link>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">Saif Foreign Consultancy: Guiding You Towards Global Opportunities and Success</p>
            </div>
          </div>
          <div className="bg-white cursor-pointer border rounded-2xl overflow-hidden hover:border-[#E72929] hover:shadow-lg transition-all">
            <div className="p-8">
            <Image className="h-20 w-20 pb-1.5" src="/img/air.jpg" alt="" width={400} height={400}/>
              <h3 className="text-gray-800 text-lg font-semibold mb-3">Performance</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-justify">Air Way International: Your Gateway to Seamless Global Freight and Logistics Solutions</p>
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
