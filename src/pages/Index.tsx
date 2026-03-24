import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CoursesSection from "../components/CoursesSection";
import InternshipSection from "../components/InternshipSection";


const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CoursesSection />
      <InternshipSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;