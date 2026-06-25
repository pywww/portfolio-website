import { motion } from "motion/react";
import { ArrowLeft, Play, ArrowUpRight, Cpu, Layers } from "lucide-react";
import { Link, useParams } from "react-router";

export function ProjectDetail() {
  const { id } = useParams();

  // Mock data for demonstration, normally fetched by ID
  const project = {
    title: "Lumina Vision",
    subtitle: "拾光之境",
    category: "WebXR & AI",
    location: "Shanghai, CN",
    year: "2025",
    status: "Live Prototype",
    teamSize: "4 Members",
    role: "Lead Creative Technologist",
    heroImage: "https://images.unsplash.com/photo-1722954249957-d58b99bc8d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwM2QlMjBhYnN0cmFjdCUyMHJlbmRlcmluZ3xlbnwxfHx8fDE3NzY1MjE0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-6 lg:px-[6rem] pt-4 pb-12"
    >
      {/* Header */}
      <div className="flex justify-end mb-16">
        <Link 
          to="/" 
          className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-gray-500 hover:text-black transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      <div id="project-title" className="mb-20 max-w-5xl scroll-mt-32">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-medium leading-[1.1] tracking-tight mb-4"
        >
          {project.title}
        </motion.h1>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl text-gray-400 font-light"
        >
          {project.subtitle}
        </motion.h2>
      </div>

      {/* Metadata Bar */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-y border-gray-200 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24 text-sm"
      >
        {[
          { label: "Category", value: project.category },
          { label: "Location", value: project.location },
          { label: "Year", value: project.year },
          { label: "Status", value: project.status },
          { label: "Team Size", value: project.teamSize },
          { label: "Role", value: project.role },
        ].map((meta, i) => (
          <div key={i} className="flex flex-col space-y-2">
            <span className="text-gray-400 text-xs uppercase tracking-widest">{meta.label}</span>
            <span className="font-medium text-black">{meta.value}</span>
          </div>
        ))}
      </motion.div>

      {/* Content Blocks */}
      
      {/* 1. Large 16:9 Video/Hero Placeholder */}
      <motion.section 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-32 relative group cursor-pointer"
      >
        <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative">
          <img 
            src={project.heroImage} 
            alt="Hero Visual" 
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          {/* Faux Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
            <div className="w-20 h-20 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-105 transition-transform">
              <Play className="w-8 h-8 md:w-12 md:h-12 text-white ml-2" fill="currentColor" />
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center tracking-widest uppercase">Project Reel / 01:24</p>
      </motion.section>

      {/* 2. TL;DR Section */}
      <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h3 className="text-2xl font-serif mb-2">TL;DR</h3>
          <p className="text-gray-400 text-sm tracking-widest uppercase">太长不看</p>
        </div>
        <div className="lg:col-span-8 border-l border-gray-200 pl-8 md:pl-16">
          <ul className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
            <li className="relative">
              <span className="absolute -left-6 top-3 w-2 h-px bg-black block" />
              Developed a real-time volumetric rendering pipeline in the browser using WebGL and WebXR, achieving steady 60fps on mobile HMDs.
            </li>
            <li className="relative">
              <span className="absolute -left-6 top-3 w-2 h-px bg-black block" />
              Integrated an edge-based AI classification model to dynamically alter geometric complexity based on user biometric feedback (heart rate variability).
            </li>
            <li className="relative">
              <span className="absolute -left-6 top-3 w-2 h-px bg-black block" />
              Secured first place at the 2025 Spatial Computing Biennale for "Most Innovative Use of Biometrics in Architecture".
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Core Contributions */}
      <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h3 className="text-2xl font-serif mb-2">Core Contributions</h3>
          <p className="text-gray-400 text-sm tracking-widest uppercase">核心贡献</p>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div>
            <h4 className="font-medium mb-4 flex items-center text-lg">
              <Cpu className="w-5 h-5 mr-3 text-gray-400" /> 
              Shader Architecture
            </h4>
            <p className="text-gray-600 font-light text-sm leading-loose">
              Wrote custom GLSL fragment shaders for procedural noise generation. Optimized buffer allocations resulting in a 40% reduction in memory overhead.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 flex items-center text-lg">
              <Layers className="w-5 h-5 mr-3 text-gray-400" /> 
              Interaction Design
            </h4>
            <p className="text-gray-600 font-light text-sm leading-loose">
              Prototyped gesture-based controllers mapping hand-tracking APIs to physics-based particle attractors, enabling a natural, codeless spatial UI.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4 flex items-center text-lg">
              <ArrowUpRight className="w-5 h-5 mr-3 text-gray-400" /> 
              Pipeline Integration
            </h4>
            <p className="text-gray-600 font-light text-sm leading-loose">
              Bridged Rhino/Grasshopper geometry exports directly into Three.js via an automated Node.js build script parsing custom JSON geometry blobs.
            </p>
          </div>
        </div>
      </section>

      {/* 4. System Design Area */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
          <div>
            <h3 className="text-2xl font-serif mb-2">System Design</h3>
            <p className="text-gray-400 text-sm tracking-widest uppercase">系统架构</p>
          </div>
        </div>
        
        {/* Placeholders for flowcharts/diagrams */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#FAFAFA] aspect-[4/3] flex flex-col items-center justify-center p-12 border border-gray-100 group hover:bg-gray-50 transition-colors">
            <div className="w-24 h-24 border border-dashed border-gray-300 rounded-full flex items-center justify-center mb-6 relative">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              {/* Fake nodes */}
              <div className="absolute top-0 -right-4 w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="absolute bottom-4 -left-6 w-6 h-6 border border-gray-300 rounded-full"></div>
            </div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Data Flow Diagram</p>
            <p className="text-xs text-gray-400 mt-2 text-center">Biometric -&gt; AI Node -&gt; WebGL Render</p>
          </div>

          <div className="bg-[#FAFAFA] aspect-[4/3] flex flex-col items-center justify-center p-12 border border-gray-100 group hover:bg-gray-50 transition-colors">
             <div className="w-32 h-20 border border-gray-300 flex items-center justify-center mb-6 relative">
              <span className="w-16 h-px bg-gray-300 absolute -left-16"></span>
              <span className="w-16 h-px bg-gray-300 absolute -right-16"></span>
              <div className="w-2 h-2 bg-black absolute -left-16"></div>
              <div className="w-2 h-2 border border-black absolute -right-16 bg-white"></div>
            </div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Topology Map</p>
            <p className="text-xs text-gray-400 mt-2 text-center">Node Cluster Architecture</p>
          </div>
        </div>
      </section>

      {/* Back to Projects Button */}
      <section className="flex justify-center mt-32 mb-16">
        <Link 
          to="/projects" 
          className="group relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-gray-200 bg-white hover:bg-[#DCE9F5] hover:border-[#DCE9F5] transition-all duration-300"
          style={{ transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)' }}
        >
          <div className="flex flex-col items-center text-center">
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8 mb-2 text-gray-400 group-hover:text-black group-hover:-translate-x-1 transition-all duration-300" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-gray-400 group-hover:text-black transition-colors duration-300">
              Projects
            </span>
          </div>
        </Link>
      </section>

    </motion.div>
  );
}
