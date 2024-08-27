//import Image from "next/image";
import HeroSection from "./component/Header/HeroSection.jsx"
import Navbar from "./component/Header/Navbar.jsx"
import AboutSection from "./component/About/AboutSection.jsx"
import ProjectsSection from "./component/Project/ProjectsSection.jsx"
import EmailSection from "./component/EmailSection.jsx"
import Footer from "./component/Footer.jsx"
import AchievmentSection from "./component/AchievmentSection.jsx"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 container mx-auto">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12">
        <HeroSection/>
        <AchievmentSection/>
        <AboutSection/>
        <ProjectsSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
