
'use client'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "./component/Crousel";
import About from "./component/About";
import ImageCard from "./component/ImageCard";
import VideoModalSection from "./component/VideoModal";
import WhyChooseUs from "./component/WhyChoose";
import Blog from "./component/Blog";
import Brand from "./component/Brand";
import { ShayariCollection } from "./component/Product";
import { ThreePcsCollection } from "./component/ThreePcsCollection";
import { PanjabiCollection } from "./component/PanjabiCollection";






export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div>
      <Carousel/>
      <ImageCard/>
      <About/>
      <ShayariCollection/>
      <ThreePcsCollection/>
      <PanjabiCollection/>
      <VideoModalSection/>
      <WhyChooseUs/>
      <Brand/>
      <Blog/>
    </div>
  );
}
