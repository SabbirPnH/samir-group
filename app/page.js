
'use client'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { About } from "./component/About";
import { Carousel } from "./component/Crousel";
import ScrollBanner from "./component/ScrollBanner";
import Service from "./component/Service";
import WhyUs from "./component/WhyUs";
import Gallery from "./component/Gallery";
import Products from "./component/Product";



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
      <About />
      <WhyUs/>
      <ScrollBanner/>
      <Service/>
      <Gallery/>
      <Products/>
      
    </div>
  );
}
