

import { FaMapMarkerAlt, FaPhoneAlt,  } from 'react-icons/fa';
import { GoProjectSymlink } from "react-icons/go";
import { GiFactory } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
const Contact=()=>{
    return(
      <div className="px-4 sm:px-20 sm:py-10 bg-gray-50" id="#contact">
         <h2 className="text-[#E72929] text-4xl font-bold font-manrope leading-normal pb-6 text-center">Contact Us</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
         <div>
        <div className="flex border-b pb-3 mb-3">
            <div className="flex-shrink-0  rounded-full p-4">
              <FaMapMarkerAlt className="text-[#E72929]" />
            </div>
            <div className="ml-3">
              <h6 className="font-bold text-[#404A3D]">Head Office</h6>
              <span className="text-[#596277]">Wakil Tower (10 th Floor) Ta-131, Gulshan Badda Link Road, Dhaka-1212, Bangladesh</span>
            </div>
          </div>
    
          <div className="flex border-b pb-3 mb-3">
            <div className="flex-shrink-0  rounded-full p-4">
              <FaMapMarkerAlt className="text-[#E72929]" />
            </div>
            <div className="ml-3">
              <h6 className="font-bold text-[#404A3D]">Branch Office</h6>
              <span className="text-[#596277]">Halima Dighir Par,Main Road, Vimpur, Chatkhil, Noakhali.</span>
            </div>
          </div>
    
          <div className="flex border-b-0 pb-3 mb-3">
            <div className="flex-shrink-0  rounded-full p-4">
              <GoProjectSymlink  className="text-[#E72929]" />
            </div>
            <div className="ml-3">
              <h6 className="font-bold text-[#404A3D]">Project Address</h6>
              <span className="text-[#596277]">West Bhuiyan Bari, Vimpur, Chatkhil, Noakhali.</span>
            </div>
          </div>
          <div className="flex border-b-0 pb-3 mb-3">
            <div className="flex-shrink-0  rounded-full p-4">
              <GiFactory   className="text-[#E72929]" />
            </div>
            <div className="ml-3">
              <h6 className="font-bold text-[#404A3D]">Factory</h6>
              <span className="text-[#596277]">Kalidas Gati Bazar, kalidas Gati, Sirajganj</span>
            </div>
          </div>
          <div className="flex border-b-0 pb-3 mb-3">
            <div className="flex-shrink-0  rounded-full p-4">
              <FaPhoneAlt   className="text-[#E72929]" />
            </div>
            <div className="ml-3">
              <h6 className="font-bold text-[#404A3D]">Phone</h6>
              <span className="text-[#596277]">Mobile: 01716-537772, 01616537772
              Tel: +88-02-222285360, +88-02-222295013</span>
            </div>
          </div>
          <div className="flex border-b-0 pb-3 mb-3">
            <div className="flex-shrink-0  rounded-full p-4">
              <HiOutlineMail    className="text-[#E72929]" />
            </div>
            <div className="ml-3">
              <h6 className="font-bold text-[#404A3D]">Email</h6>
              <span className="text-[#596277]">info.samirtextile@gmail.com</span>
              <span className="text-[#596277]">   samirmotors18@gmail.com</span>
              <br/>
              <span className="text-[#596277]"> saimonpower18@gmail.com </span>
              <span className="text-[#596277]">  saimainternational18@gmail.com</span>
            </div>
          </div>
          
    
        </div>
        <div className="text-black">  <iframe
  className="rounded-lg w-full h-[250px] sm:h-[500px]"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4959491990436!2d90.42283111540239!3d23.780869793996894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71f636dafaf%3A0xdf280c6d3c2fb65b!2sBadda%20Link%20Road%2C%20Wakil%20Tower!5e0!3m2!1sen!2sbd!4v1696586239836!5m2!1sen!2sbd"
  frameBorder="0"
  allowFullScreen={true}
  aria-hidden="false"
  tabIndex="0"
/></div>
       </div>
      </div>


    )
}
export default Contact;