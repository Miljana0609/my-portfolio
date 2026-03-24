import { motion } from "framer-motion";
import logo from "../assets/MLogo1-removebg-preview.png"

const HeroSection = () => {
  return (
    <section 
    id="hero"
    className="relative h-screen grid place-items-center text-center overflow-hidden">

    <div 
  className="absolute inset-0"
  style={{
    backgroundImage: "url('/Loop Background GIF by Trakto0.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
  
       

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />


      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">

        {/* LOGO */}
        
        <motion.img
  src={logo}
  alt="Miljana Zoranovic logo"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    w-56 sm:w-64 md:w-72 lg:w-80
    mb-6
    object-contain
    drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]
  "
/>
        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl font-medium tracking-wider mt-4"        >
          Java Developer Student · Backend & Cloud
        </motion.p>

        {/* Internship line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/90 text-sm md:text-base mt-3 tracking-wide uppercase"
        >
          Looking for an internship starting October 2026
        </motion.p>



        {/* Arrow */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-white/70 hover:text-accent text-2xl animate-bounce"
        >
          ↓
        </motion.a>

      </div>
    </section>
  );
};


export default HeroSection; 