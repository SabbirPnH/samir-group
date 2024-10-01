
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="relative px-4 sm:px-20 text-white pt-5 mt-5" style={{
            backgroundImage: "url('/img/footer (1).jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="absolute inset-0 bg-black opacity-90"></div>
            <div className='relative'>
                <div className=" container mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Address Section */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-4">Address</h4>
                            <p className="mb-2"><FaMapMarkerAlt className="inline-block mr-2" />123 Dhaka Bangladesh</p>
                            <p className="mb-2"><FaPhoneAlt className="inline-block mr-2" />+012 345 67890</p>
                            <p className="mb-2"><FaEnvelope className="inline-block mr-2" />info@example.com</p>
                            <div className="flex pt-2">
                                <a className="mr-2 border border-white p-2 rounded-full hover:text-[#404A3D] hover:bg-[#EDDD5E]" href=""><FaTwitter /></a>
                                <a className="mr-2 border border-white p-2 rounded-full hover:text-[#404A3D] hover:bg-[#EDDD5E]" href=""><FaFacebookF /></a>
                                <a className="mr-2 border border-white p-2 rounded-full hover:text-[#404A3D] hover:bg-[#EDDD5E]" href=""><FaYoutube /></a>
                                <a className='border border-white p-2 rounded-full hover:text-[#404A3D] hover:bg-[#EDDD5E]' href=""><FaLinkedinIn /></a>
                            </div>
                        </div>

                        {/* Opening Hours Section */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-4">Opening Hours</h4>
                            <h6 className="font-semibold">Monday - Friday:</h6>
                            <p className="mb-4">09.00 AM - 09.00 PM</p>
                            <h6 className="font-semibold">Saturday - Sunday:</h6>
                            <p className="mb-0">09.00 AM - 12.00 PM</p>
                        </div>

                        {/* Services Section */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-4">Quick Links</h4>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"/"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest">Home</Link>
                            </li>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"/about"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest">About</Link>
                            </li>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"/service"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest">Service</Link>
                            </li>
                            <li className="transition-all duration-300 flex items-center left-0 relative group mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="inline mr-2 h-5 w-5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                                <Link href={"/contact"} className="text-white w-full transition-all duration-300 group-hover:tracking-widest">Contact</Link>
                            </li>
                            




                        </div>

                        {/* Newsletter Section */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-4">Newsletter</h4>
                            <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="relative mx-auto " style={{ maxWidth: '400px' }}>
                                <input className="form-input rounded-md border-0 w-full py-4 pl-4 pr-10 text-[#596277] outline-none placeholder:text-[#596277]" type="text" placeholder="Your email" />
                                <button type="button" className="absolute top-0 rounded-md right-0 mr-2 bg-[#EDDD5E] text-black mt-2  py-2 px-4 uppercase">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="container mx-auto">
                    <div className="border-t border-gray-700 py-4">
                        <div className="sm:flex justify-between items-center">
                            <div className="text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-b border-gray-400 hover:border-white" href="#">Your Site Name</a>, All Right Reserved. Designed By <a className="border-b border-gray-400 hover:border-white" href="https://htmlcodex.com">PnH Corporation</a>
                            </div>
                            <div className="text-center text-md-end">
                                <div className="footer-menu">
                                    <a className=" mr-4" href="">Home</a>
                                    <a className=" mr-4" href="">Cookies</a>
                                    <a className=" mr-4" href="">Help</a>
                                    <a className="" href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
