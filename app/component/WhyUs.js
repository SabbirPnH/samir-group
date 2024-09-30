import Image from "next/image";
import { LuFish } from "react-icons/lu";
import { RxBorderStyle } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io"
const WhyUs = () => {
  return (
    <div className="px-4 sm:px-20 py-5 sm:py-20">
      <div className="flex flex-wrap -mx-5">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 px-5 wow fadeInUp" data-wow-delay="0.1s">
          <p className="text-[#5B8C51] text-lg font-semibold uppercase text-start bg-white inline-block py-1 rounded pt-3 sm:pt-0 sm:mb-2">
            Why Us!{" "}
            <RxBorderStyle className="inline-flex text-2xl font-semibold" />
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-[#404A3D] text-justify sm:text-left">
            Few Reasons Why People Choosing Us!
          </h1>
          <p className="mb-4 text-[#404A3D] text-justify">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p className="flex items-center mb-2">
          <IoMdCheckmark  className="mr-3 text-2xl text-[#5B8C51]"/>
            Justo magna erat amet
          </p>
          <p className="flex items-center mb-2">
          <IoMdCheckmark  className="mr-3 text-2xl text-[#5B8C51]"/>
            Aliqu diam amet diam et eos
          </p>
          <p className="flex items-center mb-10">
          <IoMdCheckmark  className="mr-3 text-2xl text-[#5B8C51]"/>
            Clita erat ipsum et lorem et sit
          </p>
          <a
            href="#"
            className="bg-[#EDDD5E] rounded-full py-4 px-8  text-lg hover:text-black text-[#404A3D]"
          >
            Explore More
          </a>
        </div>

        {/* Right Side Cards */}
        <div className="w-full lg:w-1/2 px-5 mt-10 sm:mt-0">
          <div className="rounded overflow-hidden">
            <div className="grid grid-cols-2 gap-0">
              {/* Card 1 */}
              <div className="flex flex-col bg-[#5B8C51] items-center justify-center wow fadeIn min-h-[200px] sm:min-h-[250px]" data-wow-delay="0.1s">
                <div className="text-center sm:py-5 px-4">
                  <div className="flex justify-center">
                    <Image
                      className="img-fluid  mb-4 object-contain"
                      src="/img/experience.png"
                      alt="Experience"
                      width={70}
                      height={70}
                    />
                  </div>
                  <h1 className="text-white text-5xl py-2" data-toggle="counter-up">
                    15
                  </h1>
                  <span className="fs-5 font-semibold text-[#EDDD5E]">Years Experience</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col bg-[#EDDD5E] items-center wow fadeIn min-h-[200px] sm:min-h-[250px]" data-wow-delay="0.3s">
                <div className="text-center py-5 px-4">
                  <div className="flex justify-center">
                    <Image
                      className="img-flu object-contain"
                      src="/img/award.png"
                      alt="Award"
                      width={70}
                      height={70}
                    />
                  </div>
                  <h1 className="text-[#404A3D] text-4xl py-2" data-toggle="counter-up">
                    183
                  </h1>
                  <span className="fs-5 font-semibold text-[#5b8c51]">Award Winning</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col bg-[#EDDD5E] items-center wow fadeIn min-h-[200px] sm:min-h-[250px]" data-wow-delay="0.5s">
                <div className="text-center py-5 px-4">
                  <div className="flex justify-center">
                    <LuFish className="text-[80px] text-[#5b8c51]" />
                  </div>
                  <h1 className="text-[#404A3D] text-4xl py-2" data-toggle="counter-up">
                    2619
                  </h1>
                  <span className="fs-5 font-semibold text-[#5b8c51]">Total Animals</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col bg-[#5B8C51] items-center wow fadeIn min-h-[200px] sm:min-h-[250px]" data-wow-delay="0.7s">
                <div className="text-center py-5 px-4">
                  <div className="flex justify-center">
                    <Image
                      className="img-flu object-contain"
                      src="/img/client.png"
                      alt="Client"
                      width={70}
                      height={70}
                    />
                  </div>
                  <h1 className="text-white text-4xl py-2" data-toggle="counter-up">
                    51940
                  </h1>
                  <span className="fs-5 font-semibold text-[#EDDD5E]">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
