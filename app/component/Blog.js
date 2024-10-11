import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const Blog = () => {
  return (
    <div className="px-4 sm:px-16  sm:py-16">
    <div className=" grid grid-col-1 sm:flex justify-between">
      <div className="text-left">
        <h4 className="text-[#F56800] text-xl font-semibold uppercase">Directly From The Blog</h4>
        <h2 className="mb-6 text-2xl sm:text-5xl font-bold pt-2 text-[#272B36]">Latest Insights Directly from Our Blog</h2>
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
          <a href="#" className="text-[#F56800] hover:underline text-justify">Can textiles lead during the pandemic?</a>
        </h2>
        <p className="text-gray-600 mb-4">25 May, 2022</p>
        <p className="text-gray-800 text-justify">During the pandemic, textiles quickly pivoted to address the urgent need for personal protective equipment. Manufacturers shifted their focus to producing face masks, gowns, and other essential medical gear, ensuring frontline workers and the public were protected. The rapid adaptability of the textile sector proved invaluable in combating shortages.</p>
      </div>
    </div>
    {/* Blog Post 2 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src="/img/ (2).jpg" alt="Blog Post 2" className="w-full h-48 object-cover" width={400} height={400} />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <a href="#" className="text-[#F56800] hover:underline">Support for Local Economies</a>
        </h2>
        <p className="text-gray-600 mb-4 text-justify">18 May, 2022</p>
        <p className="text-gray-800 text-justify">With global supply chains disrupted, many countries turned to local textile manufacturers to meet the demand for PPE and essential goods. This not only ensured a steady supply of protective equipment but also supported local economies and jobs during a time of global uncertainty.</p>
      </div>
    </div>
    {/* Blog Post 3 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src="/img/ (1).jpg" alt="Blog Post 3" className="w-full h-48 object-cover" width={400} height={400}  />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <a href="#" className="text-[#F56800] hover:underline text-justify">Health and Well-being through Textiles</a>
        </h2>
        <p className="text-gray-600 mb-4">17 Oct, 2023</p>
        <p className="text-gray-800 text-justify">Beyond PPE, the pandemic sparked innovations in textiles designed for comfort and health. This includes fabrics with moisture-wicking properties, thermal regulation, and other benefits to enhance well-being, especially as people spent more time at home. Textiles designed for mental and physical comfort became an important aspect of home life during lockdowns.

</p>
      </div>
    </div>

  
    
  </div>
</div>


  )
};

export default Blog;
