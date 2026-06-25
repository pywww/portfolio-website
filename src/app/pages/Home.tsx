import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import cubeImg1 from "../../imports/574bfe0a522a3825ff401b347fa463a.jpg";
import cubeImg2 from "../../imports/da0ae0c342cf257fdf4a1841c0941ff.jpg";
import cubeImg3 from "../../imports/08e4943d8f0a6b3f4b705f2687a5845.jpg";
import cubeImg4 from "../../imports/81284c33df7017574a2592f1d090318.jpg";
import cubeImg5 from "../../imports/79c091dff59c5e3b87b610db535cc4c.jpg";

const projects = [
  {
    id: "adspark",
    number: "01",
    title: "ADSPARK",
    category: "AI Marketing Platform",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhZHZlcnRpc2luZyUyMGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8fHwxNzM1MTMwNDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "fitmirror",
    number: "02",
    title: "FITMIRROR",
    category: "Smart Fitness",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MzUxMzA0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "monolith",
    number: "03",
    title: "MONOLITH UI",
    category: "Design System",
    img: "https://images.unsplash.com/photo-1603090383863-d39579d7d04f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGVjaG5vbG9neSUyMHdoaXRlfGVufDF8fHx8MTc3NjUyNTA0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  }
];

// Main Home Page Component
export function Home() {
  // Define the main vertical axis position
  const axisX = "left-[3rem] md:left-[25%]";

  return (
    <div className="relative min-h-screen bg-white text-black pb-40 overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-[25vh]">
        
        {/* Title & Cube Wrapper for perfect vertical alignment */}
        <div className="relative w-full">
          {/* The Rotating Cube exactly on the axis */}
          <div className={`absolute ${axisX} top-1/2 -translate-x-1/2 -translate-y-1/2 z-10`}>
            <div className="w-40 h-40 [perspective:1200px]">
              <motion.div 
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="w-full h-full relative" 
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Cube Faces - 160px width/height means 80px translateZ */}
                <div className="absolute inset-0 border-[1.5px] border-black bg-white/20 backdrop-blur-sm overflow-hidden" style={{ transform: 'translateZ(80px)' }}>
                  <ImageWithFallback src={cubeImg1} alt="Cube Image 1" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="absolute inset-0 border-[1.5px] border-black bg-white/20 backdrop-blur-sm overflow-hidden" style={{ transform: 'rotateY(90deg) translateZ(80px)' }}>
                  <ImageWithFallback src={cubeImg2} alt="Cube Image 2" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="absolute inset-0 border-[1.5px] border-black bg-white/20 backdrop-blur-sm overflow-hidden" style={{ transform: 'rotateY(180deg) translateZ(80px)' }}>
                  <ImageWithFallback src={cubeImg3} alt="Cube Image 3" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="absolute inset-0 border-[1.5px] border-black bg-white/20 backdrop-blur-sm overflow-hidden" style={{ transform: 'rotateY(-90deg) translateZ(80px)' }}>
                  <ImageWithFallback src={cubeImg4} alt="Cube Image 4" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="absolute inset-0 border-[1.5px] border-black bg-white/20 backdrop-blur-sm overflow-hidden" style={{ transform: 'rotateX(90deg) translateZ(80px)' }}>
                  <ImageWithFallback src={cubeImg5} alt="Cube Image 5" className="w-full h-full object-cover opacity-50" />
                </div>
                <div className="absolute inset-0 border-[1.5px] border-black bg-white/20 backdrop-blur-sm overflow-hidden" style={{ transform: 'rotateX(-90deg) translateZ(80px)' }}>
                  <ImageWithFallback src={cubeImg1} alt="Cube Image 6" className="w-full h-full object-cover opacity-50" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hero Text */}
          <div className={`pl-[5.5rem] md:pl-[calc(25%+4rem)] pr-6 max-w-6xl relative z-10`}>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] font-sans font-medium tracking-tighter uppercase"
            >
              AI Product <br/>
              <span className="font-serif italic font-light lowercase text-gray-500">Manager</span>
            </motion.h1>
          </div>
        </div>

        <div className={`pl-[5.5rem] md:pl-[calc(25%+4rem)] pr-6 max-w-6xl relative z-10`}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex flex-col gap-2"
          >
            <p className="text-sm md:text-base font-medium text-black uppercase tracking-[0.2em]">
              Selected works
            </p>
            <p className="text-sm md:text-base font-light text-gray-400 uppercase tracking-widest">
              Archive 2022—2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Timeline Section */}
      <section className="flex flex-col gap-32 md:gap-40 relative z-10 mt-16 md:mt-32">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative w-full flex flex-col md:flex-row"
          >
            {/* The continuous line going downwards from the very first dot */}
            {idx === 0 && (
              <div className={`absolute ${axisX} top-8 md:top-12 w-[1px] bg-black -z-10`} style={{ height: '5000px' }}></div>
            )}

            {/* Dot on the vertical axis */}
            <div className={`absolute ${axisX} top-8 md:top-12 -translate-x-1/2 w-2.5 h-2.5 bg-black rounded-full ring-[6px] ring-white`}></div>
            
            {/* Horizontal connecting line to content */}
            <div className={`absolute ${axisX} top-8 md:top-12 h-[1px] bg-black w-6 md:w-10`}></div>
            
            {/* Left Side: Number (Desktop only, mobile shows it inside content) */}
            <div className="hidden md:flex w-[25%] justify-end pr-8 lg:pr-12 pt-[14px]">
              <span className="text-4xl lg:text-6xl font-sans font-medium tracking-tighter text-black/20 leading-none">
                {project.number}
              </span>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-[75%] pl-[5.5rem] md:pl-[3.5rem] lg:pl-16 pr-6 lg:pr-[6rem] flex flex-col">
              
              {/* Header block with Title & Tag */}
              <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-8 mt-4 md:mt-0">
                <Link to={`/projects/${project.id}`} className="block group">
                  {/* Mobile number */}
                  <span className="md:hidden text-2xl font-sans font-medium text-black/20 leading-none mb-2 block">
                    {project.number}
                  </span>
                  
                  <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-sans font-medium uppercase tracking-tighter leading-[0.9] group-hover:opacity-60 transition-opacity">
                    {project.title.split(" ")[0]} <br className="hidden md:block" />
                    {project.title.split(" ").slice(1).join(" ")}
                  </h2>
                </Link>
                
                <div className="flex items-center">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium border border-black/20 px-4 py-2 rounded-full text-gray-600">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Image - Large cinematic crop */}
              <Link to={`/projects/${project.id}#project-title`} className="relative block w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden group bg-gray-100">
                <motion.img 
                  whileHover={{ scale: 1.02 }}
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
      </section>
    </div>
  );
}
