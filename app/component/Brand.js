



import Image from "next/image";

const Brand = () => {
  return (
    <section className="w-full sm:py-10 bg-white">
      <div className="px-4 sm:px-16">
        <div className="flex flex-wrap items-center">
          {/* Carousel Wrapper */}
          <div className="w-full">
            <div className="flex flex-wrap justify-between">
              {/* Slide 1 */}
              <div className="w-1/2 sm:w-1/6 px-2 sm:px-4 mb-4">
                <div className="bg-white p-4">
                  <Image
                    className="w-full h-auto"
                    src="/img/brand (1).png"
                    alt="Client Logo 1"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              {/* Slide 2 */}
              <div className="w-1/2 sm:w-1/6 px-2 sm:px-4 mb-4">
                <div className="bg-white p-4">
                  <Image
                    className="w-full h-auto"
                    src="/img/brand (2).png"
                    alt="Client Logo 2"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              {/* Slide 3 */}
              <div className="w-1/2 sm:w-1/6 px-2 sm:px-4 mb-4">
                <div className="bg-white p-4">
                  <Image
                    className="w-full h-auto"
                    src="/img/brand (3).png"
                    alt="Client Logo 3"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              {/* Slide 4 */}
              <div className="w-1/2 sm:w-1/6 px-2 sm:px-4 mb-4">
                <div className="bg-white p-4">
                  <Image
                    className="w-full h-auto"
                    src="/img/brand (4).png"
                    alt="Client Logo 4"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              {/* Slide 5 */}
              <div className="w-1/2 sm:w-1/6 px-2 sm:px-4 mb-4">
                <div className="bg-white p-4">
                  <Image
                    className="w-full h-auto"
                    src="/img/brand (1).png"
                    alt="Client Logo 5"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              {/* Slide 6 */}
              <div className="w-1/2 sm:w-1/6 px-2 sm:px-4 mb-4">
                <div className="bg-white p-4">
                  <Image
                    className="w-full h-auto"
                    src="/img/brand (3).png"
                    alt="Client Logo 6"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
