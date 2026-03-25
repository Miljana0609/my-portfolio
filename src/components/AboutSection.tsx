import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Heart, MapPin } from "lucide-react";
import profileImg from "../assets/IMG_9977.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-grain" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              About me
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#2c3a33]">
            Hi, I'm Miljana 👋🏻 <span className="text-accent">!</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[3/4] max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border border-border bg-card">
                <img
                  src={profileImg}
                  alt="Miljana Zoranovic"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-primary/20 -z-10" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6 max-w-xl"
          >
            <p className="text-lg leading-relaxed">
              Java developer with a focus
              on backend and cloud technologies at Jensen Yrkeshögskola, graduating in May 2027.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm">
            </p>
            I'm a Java developer with a strong interest in backend development and cloud technologies, 
            focused on building systems that work behind the scenes and make digital services run smoothly.
            For me, programming is not just about writing code, but about solving problems and creating solutions that people can actually use. 
            I like building reliable systems that support everyday applications and make things easier for users.
            I’ve always been interested in technology, and I really enjoy the process of figuring things out, especially when a difficult problem finally makes sense.
            <p className="text-muted-foreground leading-relaxed text-sm">
              Much like experimenting with a new recipe in the kitchen,
              I’ve learned that great results require both patience and precision.
              I see my upcoming internship as an opportunity to step into a real-world environment,
              contribute to a team, and gain hands-on experience in building meaningful solutions.
              For me, a positive team culture is just as important as the technical work.
              I’m looking for a place where people collaborate, solve problems together, and genuinely enjoy what they do.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm">
              Outside of coding, I recharge by spending time in nature, baking, or being with family and friends.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: MapPin, text: "Säffle, Sweden" },
                { icon: Coffee, text: "Coffee lover" },
                { icon: Heart, text: "Problem solver" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                >
                  <Icon size={16} className="text-accent" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;