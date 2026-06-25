import { Outlet, NavLink, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Menu, X } from "lucide-react";

export function MainLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Use setTimeout to wait for Framer Motion exit/enter transitions to stabilize
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Index", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Around", path: "/around" },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="w-full flex items-center justify-between px-6 lg:px-[6rem]">
          {/* Left Side: PORTFOLIO & Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <span className="text-[13px] md:text-sm font-medium tracking-[0.125em] text-black uppercase cursor-default">
              PORTFOLIO
            </span>
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition-colors ${
                      isActive ? "font-medium text-black" : "text-gray-500 hover:text-black"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-black p-2 -ml-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Right side - Identity */}
          <div className="flex items-center gap-2.5 group cursor-default">
            <span 
              className="text-[13px] md:text-sm font-medium tracking-[0.25em] uppercase transition-colors duration-300 group-hover:text-gray-500"
              style={{ transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)' }}
            >
              POLLYW
            </span>
            <motion.svg 
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-black transition-colors duration-300 group-hover:text-gray-500"
            >
              <path d="M7 0C7 3.866 3.866 7 0 7C3.866 7 7 10.134 7 14C7 10.134 10.134 7 14 7C10.134 7 7 3.866 7 0Z" />
            </motion.svg>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-sm font-medium tracking-wide">MENU</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 -mr-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-8 text-2xl font-serif">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive ? "text-black italic" : "text-gray-400 hover:text-black"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 min-h-screen pb-20">
        <Outlet />
      </main>
      
      {/* Minimal Footer */}
      <footer className="container mx-auto px-6 md:px-12 py-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} AI Product Manager. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-black transition-colors">Twitter / X</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-black transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
