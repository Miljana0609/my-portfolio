import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Social Media API",
    description:
      "Designed and developed a RESTful backend API for a social media platform using Spring Boot. Implemented authentication, role-based authorization, and full CRUD functionality for users, posts, and comments. Built and deployed with Docker, PostgreSQL, and cloud services.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Docker"],
    github: "https://github.com/Miljana0609/spring-boot",
    live: "https://inquisitive-emmye-miljanaa-0c55bd32.koyeb.app/login"
  },
  {
    title: "Hotel Booking App",
    description:
      "A fullstack booking platform built with React and Node.js. Integrated a custom REST API with MongoDB to manage dynamic data, allowing users to browse services and simulate bookings. Focused on understanding frontend-backend integration and API communication.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Miljana0609/Hotel-website",
    live: "https://steady-crepe-080158.netlify.app/",
  },
  {
    title: "BokaSmart API",
    description:
      "A secure backend REST API built with Spring Boot for managing bookings and personal todo tasks. Implements JWT authentication, role-based access control, and clean architecture with DTOs and service layers. Includes unit testing and API documentation with Swagger.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA"],
    github: "https://github.com/Miljana0609/BokaSmart"
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-grain" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-border" />
            <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
              Projects
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-6 text-[#2c3a33]">
            Selected Projects<span className="text-accent">.</span>
          </h2>
          <p className="font-body text-center text-muted-foreground max-w-lg mx-auto mb-16">
            A few projects I’ve worked on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl bg-card border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex items-center gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank"
                    rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-body font-medium bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
