import Image from "next/image";
import Link from "next/link";
import { FaStaylinked } from "react-icons/fa6";
const About = () => {
 return (
<section className=" py-5 sm:py-10 relative" id="about">
  <div className="w-full  px-4 sm:px-20">
    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
        <div className=" sm:pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
          <Image className=" rounded-xl object-cover h-80" src="/img/StockCake-Successful business handshake_1728970886.jpg" alt="about Us image"  width={400} height={400}/>
        </div>
        <Image className="sm:ml-0 ml-auto rounded-xl object-cover h-80 " src="/img/StockCake-Analyzing Data Trends_1728970526.jpg" alt="about Us image" width={400} height={400}/>
      </div>
      <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-center items-start gap-4 flex">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
            <h2 className="text-[#E72929] text-4xl font-bold font-manrope uppercase leading-normal lg:text-start text-center">
            About Us</h2>
            <p className="text-gray-500 text-base font-normal leading-relaxed  text-justify">
            Dear Visitors Welcome to the website of samir group of companies and thanks for your interest. It is with believed that I started samir group BD in 2004, this side will give you an excellent insight about our company and its capability. Only a click away you will find a lot of useful information about the different products and services we provide. The mission of samir group is it succeeds customer’s expectations by providing outstanding customer care through innovations created by talented, satisfied employees while positively contributing to all over the country.</p>
            <h3 className=" text-sm sm:text-2xl font-semibold sm:font-bold text-[#E72929]">At present we operate in the following fields:</h3>
          </div>
         <div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <FaStaylinked  className='text-[#E72929]'/>
       <Link target="_blank" href={"https://textile.samirgroupbd.com/"}>   <p className='font-semibold text-black'>Samir Textile (Pvt) Ltd.</p></Link>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <FaStaylinked  className='text-[#E72929]'/>
          <Link target="_blank" href={"https://motors.samirgroupbd.com/"}><p className='font-semibold text-black'>Samir Motors Corporation</p></Link>
          </div>
         
          <div className='flex items-center gap-2 cursor-pointer'>
          <FaStaylinked  className='text-[#E72929]'/>
         <Link target="_blank" href={"https://agro.samirgroupbd.com/"}> <p className='font-semibold text-black'>Saimon Agro & Fisheries Farm</p></Link>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <FaStaylinked  className='text-[#E72929]'/>
          <p className='font-semibold text-black'>Saima International</p>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <FaStaylinked  className='text-[#E72929]'/>
          <Link target="_blank" href={"https://beta.samirgroupbd.com/"}><p className='font-semibold text-black'>Saif Foreign Consultancy</p></Link>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <FaStaylinked  className='text-[#E72929]'/>
          <p className='font-semibold text-black'>Air Way International</p>
          </div>
         </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

                                        
  );
};

export default About;
