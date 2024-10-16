// 'use client'
// import { useState } from "react";
// import MessageModal from "./MessageModal";

// const Message=()=>{
// const [showModal , setShowModal]=useState(false)
// function handleShowModal (){
//     setShowModal(true)
// }
//     return(
// <div>
//     {
//       showModal && <MessageModal 
//         onClose={()=>setShowModal(false) }
//       />
//     }
// <div className="font-sans">
//   <div className="lg:max-w-9xl max-w-3xl mx-auto px-4 sm:px-0">
//     <div className="max-w-2xl mx-auto text-center">
//       <h2 className="text-gray-800 text-3xl font-extrabold">Meet our team</h2>
//       <p className="text-gray-800 text-sm mt-4 leading-relaxed">Meet our team of professionals to serve you.</p>
//     </div>
//     <div className="grid lg:grid-cols-2  gap-6 max-md:justify-center mt-12">
//       <div className="border bg-black rounded-lg overflow-hidden">
//         <img src="https://readymadeui.com/team-1.webp" className="w-full h-80 object-cover" />
//         <div className="p-4">
//           <h4 className="text-gray-400 text-base font-bold tracking-wide text-xl">Shahana Ferdousi</h4>
//           <p className="text-gray-400 text-sm mt-1">Chairman</p>
//           <p className="text-gray-400 text-sm mt-1">SAMIR GROUP</p>
//          <div className="flex justify-between items-center">
//          <div className="space-x-4 mt-4">
//             <button type="button" className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700">
//               <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
//                 <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" data-original="#010002" />
//               </svg>
//             </button>
//             <button type="button" className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
//               <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
//                 <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" data-original="#03a9f4" />
//               </svg>
//             </button>
//             <button type="button" className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
//               <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
//                 <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" data-original="#0077b5" />
//               </svg>
//             </button>
//           </div>
//           <div onClick={handleShowModal}>
//             <p className="text-red-500 font-bold tracking-widest cursor-pointer mt-4">Message</p>
//             </div>
//          </div>
//         </div>
//       </div>
//       <div className="border bg-black rounded-lg overflow-hidden">
//         <img src="https://readymadeui.com/team-1.webp" className="w-full h-80 object-cover" />
//         <div className="p-4">
//           <h4 className="text-gray-400 text-base font-bold tracking-wide text-xl">Sabbir </h4>
//           <p className="text-gray-400 text-sm mt-1">developer</p>
//           <p className="text-gray-400 text-sm mt-1">SAMIR GROUP</p>
//          <div className="flex justify-between items-center">
//          <div className="space-x-4 mt-4">
//             <button type="button" className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700">
//               <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
//                 <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" data-original="#010002" />
//               </svg>
//             </button>
//             <button type="button" className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
//               <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
//                 <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" data-original="#03a9f4" />
//               </svg>
//             </button>
//             <button type="button" className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
//               <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
//                 <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" data-original="#0077b5" />
//               </svg>
//             </button>
//           </div>
//           <div onClick={handleShowModal}>
//             <p className="text-red-500 font-bold tracking-widest cursor-pointer mt-4">Message</p>
//             </div>
//          </div>
//         </div>
//       </div>
    
//     </div>
//   </div>
// </div>
// </div>

//     )
// }
// export default Message;



'use client'
import { useState } from "react";
import MessageModal from "./MessageModal";
import Image from "next/image";

const Message = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Shahana Ferdousi",
      position: "Chairman",
      company: "SAMIR GROUP",
      img: "/img/pngtree-cartoon-character-of-a-green-asian-looking-woman-picture-image_2656385.jpg",
      message: "Since starting samir group in 2004,I have seen the company growing steadily in diverse business activities. We are determine and committed to influence and shaping the company’s future and promise to carry on the company’s mission of working with integrity, honesty and respect. During the last few years we have transformed our business changing the way to do things. We are asking our people to make the best decisions for the group as a whole, Not just their little of it. Our customers are now seeing the benefits of our working as a global team and each day we look forward to meeting new opportunities and challenges. It forces us to change our thinking in order to find it. As a custodian of the samir group, I hope that the cordial relations with all the valued clients will remain in intact as partners of prosperity and we also look forward to developing more successful relations with potential clients in the future. It will certainly help us grow and serve the stakeholders even better in the day ahead. The journey of samir group is never ending, but with the support of my team and clients. I am confident that the company will continue to scale milestones of excellence for years to come.Thank You"

    },
    {
      name: "Mohammad Sohel",
      position: "Managing Director",
      company: "SAMIR GROUP",
      img: "/img/1 (1) - Copy.jpg",
     message: "Dear Visitors Welcome to the website of samir group of company’s and thanks for your interest. It is with believed that I started samir group BD in 2004, this side will give you an excellent insight about our company and its capability. Only a click away you will find a lot of useful information about the different products and services we provide. The mission of samir group is it succeeds customer’s expectations by providing outstanding customer care through innovations created by talented, satisfied employees while positively contributing to all over the country. We believe that our customer satisfaction and thus they are loyalties are our success. As a managing director of Samir Group, I feel it is an immense honor and privilege to chat the path of this company. Our overall business attitude is shaped by our overall value care. The people of Samir Group understand that on the long time success can only be achieved if a company takes care of all namely employees, customer and the society."
    }
  ];

  // Handle showing modal with selected member details
  function handleShowModal(member) {
    setSelectedMember(member);
    setShowModal(true);
  }

  return (
    <div>
      {
        showModal && (
          <MessageModal 
            onClose={() => setShowModal(false)}
            member={selectedMember}  
          />
        )
      }
      <div className="font-sans">
        <div className="lg:max-w-9xl max-w-3xl mx-auto px-4 sm:px-0">
        <h2 className="text-[#E72929] text-4xl font-bold font-manrope leading-normal uppercase  text-center"> Message</h2>
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-10
             max-md:justify-center mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="border bg-black rounded-lg overflow-hidden">
                <Image src={member.img} className="w-full h-80 object-cover" alt={member.name} width={400} height={400}/>
                <div className="p-4">
                  <h4 className="text-gray-400 text-base font-bold tracking-wide text-xl">{member.name}</h4>
                  <p className="text-gray-400 text-sm mt-1">{member.position}</p>
                  <p className="text-gray-400 text-sm mt-1">{member.company}</p>
                  <div className="flex justify-between items-center">
                  <div className="space-x-4 mt-4">
            <button type="button" className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 155.139 155.139">
                <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" data-original="#010002" />
              </svg>
            </button>
            <button type="button" className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 512 512">
                <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" data-original="#03a9f4" />
              </svg>
            </button>
            <button type="button" className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#fff" viewBox="0 0 24 24">
                <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" data-original="#0077b5" />
              </svg>
            </button>
          </div>
                    <div onClick={() => handleShowModal(member)}>
                      <p className="text-red-500 font-bold tracking-widest cursor-pointer mt-4">Message</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
