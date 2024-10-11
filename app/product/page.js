import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import { ShayariCollection } from "../component/Product";
import { PanjabiCollection } from "../component/PanjabiCollection";
import { ThreePcsCollection } from "../component/ThreePcsCollection";
import { BabiesItem } from "../component/BabiesItem";
import { TShirtCollection } from "../component/TShirtCollection";
import { PantCollection } from "../component/PantCollection";
import { BedSheet } from "../component/BedSheet";
import { LungiCollection } from "../component/LungiCollection";




export async function generateMetadata() {
    return {
      title: 'Samir Textile',
      description: "Generated by create Product Page",
    }
  }


const ProductPage=()=>{
    return(
        <div className=" mb-7 sm:mb-20">
        <div className="w-full bg-cover bg-center mb-5" style={{backgroundImage: 'url("/img/StockCake-Textile Factory Scene_1728011217.jpg")'}}>
<div className="bg-black/70  py-10 sm:py-24">
<div className="container mx-auto text-center">
  {/* Heading */}
  <h1 className=" text-4xl sm:text-6xl font-semibold text-white mb-3 animate-slide-in-down">
   Our Product
  </h1>
  {/* Breadcrumb Navigation */}
  <nav aria-label="breadcrumb">
    <ol className="flex justify-center items-center space-x-3 text-sm uppercase text-white pt-2">
      <li>
        <Link href={"/"} className="text-[#EDDD5E] text-lg">Home </Link>
      </li>
      <li><FaChevronCircleRight className="text-xl" /></li>
      <li className="text-white text-lg"> Service</li>
    </ol>
  </nav>
</div>
</div>
</div>
<ShayariCollection/>
<PanjabiCollection/>
<ThreePcsCollection/>
<BabiesItem/>
<TShirtCollection/>
<PantCollection/>
<BedSheet/>
<LungiCollection/>
    </div>
            
    )
}
export  default ProductPage;
