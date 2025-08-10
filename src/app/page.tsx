import AboutMe from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects  from "@/components/Projects";
import { Resume } from "@/components/Resume";
import  Skill  from "@/components/Skills";



export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutMe/>
    <Skill/>
    <Projects/>
    <Resume/>
    <Footer/>
    
   
    
    </>
  );
}
