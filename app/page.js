
'use client'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "./component/Crousel";
import About from "./component/About";
import ImageCard from "./component/ImageCard";
import Texttile from "./component/Texttile";
import VideoModalSection from "./component/VideoModal";
import WhyChooseUs from "./component/WhyChoose";
import Blog from "./component/Blog";
import Brand from "./component/Brand";



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
      <Texttile/>
      <VideoModalSection/>
      <WhyChooseUs/>
      <Brand/>
      <Blog/>
    </div>
  );
}
