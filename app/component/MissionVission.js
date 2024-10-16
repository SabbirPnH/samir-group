import Image from "next/image";
const MissionVission=()=>{
    return(
       <section className=" pt-3 sm:pt-14 px-4 sm:px-20 " id="mission">
         <h2 className="text-[#E72929] pb-7 text-4xl font-bold font-manrope leading-normal  text-center">
         MISSION & VISION</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2">
        <Image src="/img/4057740.jpg" className="w-full object-cover" alt="mission-img" width={400} height={400}/>
            <div>
            <div className="w-full flex-col justify-center items-start gap-6 flex">
            <div className="w-full justify-start items-center gap-8 grid grid-cols-1">
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Mission</h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed text-justify">The mission of samir group is it succeeds customer’s expectations by providing outstanding customer care through innovations created by talented, satisfied employees while positively contributing to all over the country.</p>
              </div>
              <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">VISION
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed text-justify">The mission of samir group is it succeeds customer’s expectations by providing outstanding customer care through innovations created by talented, satisfied employees while positively contributing to all over the country.</p>
              </div>
            </div>
           
          </div>
            </div>
        </div>
</section>
                                   
    )
}
export default MissionVission;