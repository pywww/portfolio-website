import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "lumina",
    number: "01",
    title: "LUMINA VISION",
    subtitle: "拾光之境",
    category: "WebXR & AI",
    year: "2025",
    summary: "An immersive spatial computing experience that visualizes biometric data into architectural lightscapes. Designed for high-end exhibition spaces.",
    img: "https://images.unsplash.com/photo-1647892842753-01ee3cafd42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzc2NDU2NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UX/UI Design", "Spatial Computing", "WebXR"]
  },
  {
    id: "aether",
    number: "02",
    title: "AETHER GRID",
    subtitle: "矩阵空间",
    category: "Generative Art",
    year: "2024",
    summary: "A generative art platform enabling artists to tokenize parametric 3D sculptures in real-time. Minimalist interface with maximum creative freedom.",
    img: "https://images.unsplash.com/photo-1770520211378-caf2781e0958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwYXJ0JTIwbW9ub2Nocm9tZXxlbnwxfHx8fDE3NzY1MjUwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Product Design", "Three.js", "WebGL"]
  },
  {
    id: "monolith",
    number: "03",
    title: "MONOLITH UI",
    subtitle: "单体设计系统",
    category: "Design System",
    year: "2024",
    summary: "A robust, multi-tenant headless design system built for complex financial dashboards. Focused on typographic hierarchy and layout density.",
    img: "https://images.unsplash.com/photo-1603090383863-d39579d7d04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaG5vbG9neSUyMHdoaXRlfGVufDF8fHx8MTc3NjUyNTA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["System Design", "React", "Architecture"]
  }
];

export function Projects() {
  return (
    <div className="container mx-auto px-6 md:px-12 pt-32 pb-24 min-h-screen bg-white text-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24 md:mb-32"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tighter uppercase mb-6">
          Selected<br />Projects
        </h1>
        <p className="text-gray-500 font-light text-xl md:text-2xl max-w-2xl">
          A curated collection of digital experiences, interactive installations, and scalable design systems.
        </p>
      </motion.div>

      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="group flex flex-col md:flex-row gap-8 md:gap-12 border-t border-black pt-12 pb-24"
          >
            {/* Left Section: Number and Info */}
            <div className="w-full md:w-5/12 flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-xl md:text-2xl font-serif text-black font-medium block leading-none pt-1">
                    {project.number}
                  </span>
                  <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight uppercase">
                      {project.title}
                    </h2>
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8 ml-9 md:ml-12">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] md:text-xs uppercase tracking-[0.2em] border border-black px-3 py-1.5 rounded-full text-black font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 md:mt-0 ml-0 md:ml-12">
                <p className="text-black leading-relaxed font-light text-lg max-w-md">
                  {project.summary}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 border-b border-black pb-1 hover:opacity-50 transition-opacity cursor-pointer">
                  <span className="text-sm font-medium uppercase tracking-wider text-black">View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-black" strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Right Section: Image */}
            <div className="w-full md:w-7/12 mt-8 md:mt-0">
              <Link 
                to={`/projects/${project.id}`} 
                className="w-full overflow-hidden bg-gray-50 aspect-[4/3] md:aspect-[16/10] block relative group"
              >
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-sm"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)' }}
                  >
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
