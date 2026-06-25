import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import portraitImg from "../../assets/portrait.jpg";

export function About() {
  const experiences = [
    { year: "2023—PRES", role: "Creative Technologist", company: "Studio Monolith" },
    { year: "2021—2023", role: "Frontend Developer", company: "Digital Arts Network" },
    { year: "2019—2021", role: "Interaction Designer", company: "Aether Labs" },
    { year: "2017—2019", role: "Junior Designer", company: "Polyform" },
  ];

  const awards = [
    { year: "2023", title: "Site of the Day", project: "Lumina Vision", org: "Awwwards" },
    { year: "2022", title: "FWA of the Month", project: "Aether Grid", org: "FWA" },
    { year: "2021", title: "Webby Nominee", project: "Monolith UI", org: "Webby Awards" },
  ];

  return (
    <div className="relative min-h-screen bg-white text-black pb-40 overflow-hidden font-sans selection:bg-black selection:text-white">
      {/* Intro and Photo Split */}
      <section className="w-full px-6 lg:px-[6rem] pt-6 md:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Bio Text */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-sans font-medium mb-12 tracking-tighter uppercase"
              >
                Bridging the gap between <br className="hidden md:block"/>
                <span className="font-serif italic font-light lowercase text-gray-500">engineering</span> and <br className="hidden md:block"/>
                <span className="font-serif italic font-light lowercase text-gray-500">expressive design</span>.
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-8 text-lg font-light leading-relaxed text-black/80 max-w-xl"
              >
                <p>
                  My practice involves designing programmatic systems, real-time spatial interfaces, and computational forms. I believe that code is an inherently creative medium capable of eliciting deep emotional responses through interaction.
                </p>
                <p>
                  Based in Guangzhou, I've spent the last six years collaborating with architectural studios, avant-garde design agencies, and deep-tech startups. My work often explores generative logic, tangible prototypes, and the evolving symbiosis between human intuition and machine intelligence.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 pt-12"
            >
              <a 
                href="#" 
                className="inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] border-b border-black pb-2 hover:opacity-50 transition-opacity"
              >
                Download Resume <ArrowUpRight className="w-3 h-3 ml-2" />
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="aspect-[3/4] md:aspect-[4/5] w-full bg-gray-100 overflow-hidden group"
            >
              <img
                src={portraitImg}
                alt="PollyW Portrait"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            </motion.div>
            <div className="mt-6 flex justify-between items-center text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-black/40">
              <span>Guangzhou, CN</span>
              <span>Available for freelance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Tables for Experience / Awards */}
      <section className="w-full px-6 lg:px-[6rem] mt-32 md:mt-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-10 flex items-center">
              <span className="w-1.5 h-1.5 bg-black rounded-full mr-4 inline-block"></span>
              Experience
            </h3>
            <div className="border-t border-black">
              {experiences.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-black/20 group hover:border-black transition-colors"
                >
                  <div className="text-xs font-medium tracking-[0.2em] text-black/40 mb-3 md:mb-0 w-32 shrink-0">
                    {exp.year}
                  </div>
                  <div className="flex-1 text-2xl md:text-3xl font-sans font-medium uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-300">
                    {exp.role}
                  </div>
                  <div className="text-sm font-serif italic text-black/60 mt-3 md:mt-0 text-left md:text-right w-40 shrink-0">
                    {exp.company}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-10 flex items-center">
              <span className="w-1.5 h-1.5 bg-black rounded-full mr-4 inline-block"></span>
              Recognition
            </h3>
            <div className="border-t border-black">
              {awards.map((award, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-black/20 group hover:border-black transition-colors"
                >
                  <div className="text-xs font-medium tracking-[0.2em] text-black/40 mb-3 md:mb-0 w-24 shrink-0">
                    {award.year}
                  </div>
                  <div className="flex-1 text-2xl md:text-3xl font-sans font-medium uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-300">
                    {award.title}
                  </div>
                  <div className="text-sm font-serif italic text-black/60 mt-3 md:mt-0 text-left md:text-right shrink-0 leading-tight">
                    {award.project} <br className="hidden md:block"/>
                    <span className="text-[10px] uppercase font-sans font-medium not-italic tracking-[0.2em] opacity-50 block md:mt-1">{award.org}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
