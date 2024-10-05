import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const Blog = () => {
  return (
    <div className="px-4 sm:px-16  sm:py-16">
    <div className=" grid grid-col-1 sm:flex justify-between">
      <div className="text-left">
        <h4 className="text-[#F56800] text-xl font-semibold uppercase">Directly From The Blog</h4>
        <h2 className="mb-6 text-2xl sm:text-5xl font-bold pt-2 text-[#272B36]">We believe in counting numbers</h2>
      </div>
      <a href="#" className="  py-2.5 sm:py-4 mt-0 sm:mt-4   text-sm  text-[#F56800] uppercase font-semibold">
              View More
              <FaArrowRight className=' inline-flex ml-3' />

            </a>
    </div>
  <h1 className="text-3xl font-bold  text-center">Latest Blog Posts</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Blog Post 1 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src="/img/ (1).png" alt="Blog Post 1" className="w-full h-48 object-cover" width={400} height={400} />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <a href="#" className="text-[#F56800] hover:underline">Can textiles lead during the pandemic?</a>
        </h2>
        <p className="text-gray-600 mb-4">25 May, 2022</p>
        <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...</p>
      </div>
    </div>
    {/* Blog Post 2 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src="/img/ (2).jpg" alt="Blog Post 2" className="w-full h-48 object-cover" width={400} height={400} />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <a href="#" className="text-[#F56800] hover:underline">The Story of a Silk Lends Cotton like Comfort Rayon</a>
        </h2>
        <p className="text-gray-600 mb-4">18 May, 2022</p>
        <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...</p>
      </div>
    </div>
    {/* Blog Post 3 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src="/img/ (1).jpg" alt="Blog Post 3" className="w-full h-48 object-cover" width={400} height={400}  />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <a href="#" className="text-[#F56800] hover:underline">Contactless Payments Time Come</a>
        </h2>
        <p className="text-gray-600 mb-4">10 May, 2022</p>
        <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor...</p>
      </div>
    </div>

  
    
  </div>
</div>


  )
};

export default Blog;
