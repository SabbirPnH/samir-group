// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";

// const About = () => {
//   return (
//     <div className="px-4 sm:px-20 py-5 sm:py-12 sm:mb-32 lg:" 
// >
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//          {/* Right Side (Text and List) */}
//          <div>
//           <h6 className="text-[#F56800] text-xl font-semibold uppercase"> About Us </h6>
//           <h1 className="mb-6 text-2xl sm:text-5xl font-bold pt-2  text-[#272B36]">
//           Samir Textile Pvt. Ltd.
//           </h1>
//           <p className="mb-6 text-[#596277] text-md text-justify tracking-tight">
//           Samir textile pvt. Ltd. company provide fashion design and necessary accessories.We understand customer needs thats why we provide unique products. Beside we produce male, female, and babies items. Our product manufacture from own factory. Samir textile produce 3pcs, shari, lungi, bed sheet, T-Shirt, kids item, Panjabi. We are supplier wholesaler and retailer. We are committed to produce good product.
//           </p>
//           {/* List Items */}
//           <div className="space-y-6 mb-6">
//             {/* Item 1 */}
//             <div className="flex items-center ">
//               <div className=" flex-shrink-0 flex items-center justify-center w-12 h-12">
//                 <span className="font-bold text-lg sm:text-2xl text-[#F56800]">01</span>
//               </div>
//               <div className="pl-4">
//                 <h6 className="font-bold text-lg sm:text-2xl text-[#272B36]">Digital Shop Available</h6>
//               </div>
            
//             </div>
//             <hr/>
//             {/* Item 2 */}
//             <div className="flex items-center ">
//               <div className=" flex-shrink-0 flex items-center justify-center w-12 h-12">
//                 <span className="font-bold text-lg sm:text-2xl text-[#F56800]">02</span>
//               </div>
//               <div className="pl-4">
//                 <h6 className="font-bold text-lg sm:text-2xl text-[#272B36]">Great Client Support</h6>
//               </div>
            
//             </div>
           
            
//           </div>
//           <div className="flex sm:justify-start justify-center">
//             <a href="#" className="bg-[#F56800]  py-2.5 sm:py-4 mt-0 sm:mt-4  px-8 text-sm hover:bg-[#272B36]  text-white uppercase font-semibold">
//               Read More
//               <FaArrowRight className=' inline-flex ml-3' />

//             </a>
//           </div>
//           <Image className="absolute w-96 hidden lg:block h-52 object-cover" src="/img/3.png" alt='img' width={400} height={400} />
//         </div>
        
//         {/* Left Side (Image) */}
//         <div className="relative pt-4" style={{ minHeight: 400 }}>
//           <Image className="absolute w-full h-full sm:h-auto object-cover" src="/img/1.jpg" alt='img' width={400} height={400} />
//         </div>
       
//       </div>
//     </div>


//   )
// }
// export default About




import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="px-4 sm:px-20 py-5 sm:py-12 ">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Right Side (Text and List) */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h6 className="text-[#F56800] text-xl font-semibold uppercase">About Us</h6>
            <h1 className="mb-6 text-2xl sm:text-5xl font-bold pt-2 text-[#272B36]">
              Samir Textile Pvt. Ltd.
            </h1>
            <p className="mb-6 text-[#596277] text-md text-justify tracking-tight">
              Samir textile pvt. Ltd. company provide fashion design and necessary accessories. We understand customer needs, that's why we provide unique products. Beside we produce male, female, and babies items. Our product is manufactured in our own factory. Samir textile produces 3pcs, shari, lungi, bed sheet, T-shirt, kids items, Panjabi. We are a wholesaler and retailer. We are committed to producing high-quality products.
            </p>
          </div>

          {/* List Items */}
          <div className="space-y-6 mb-6">
            {/* Item 1 */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
                <span className="font-bold text-lg sm:text-2xl text-[#F56800]">01</span>
              </div>
              <div className="pl-4">
                <h6 className="font-bold text-lg sm:text-2xl text-[#272B36]">Digital Shop Available</h6>
              </div>
            </div>
            <hr />

            {/* Item 2 */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
                <span className="font-bold text-lg sm:text-2xl text-[#F56800]">02</span>
              </div>
              <div className="pl-4">
                <h6 className="font-bold text-lg sm:text-2xl text-[#272B36]">Great Client Support</h6>
              </div>
            </div>
          </div>

          <div className="flex sm:justify-start justify-center">
            <a href="#" className="bg-[#F56800] py-2.5 sm:py-4 px-8 text-sm hover:bg-[#272B36] text-white uppercase font-semibold">
              Read More
              <FaArrowRight className="inline-flex ml-3" />
            </a>
          </div>
        </div>

        {/* Left Side (Image) */}
        <div className="flex-1 relative">
          <Image className="absolute w-full h-full object-cover" src="/img/1.jpg" alt="img" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default About;
