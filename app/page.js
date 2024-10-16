
'use client'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from "./component/Crousel";
import About from "./component/About";
import Company from "./component/Company";
import Message from "./component/Message";
import Contact from "./component/Contact";
import MissionVission from "./component/MissionVission";




export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div id="home">
      <Carousel/>
      <About/>
      <Company/>
      <Message/>
      <MissionVission/>
      <Contact/>
    </div>
  );
}


