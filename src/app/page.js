"use client";

import { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Mail, Sparkles } from 'lucide-react';

export default function Home() {
  // Custom Magic Cursor State
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <main className="min-h-screen bg-[#030712] text-gray-200 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* 1. Professional Grid Background (Handmade Blueprint Feel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* 2. Custom Floating Cursor */}
      <motion.div 
        className="hidden md:flex fixed top-0 left-0 w-8 h-8 border border-cyan-400/50 rounded-full pointer-events-none z-50 items-center justify-center backdrop-blur-sm"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto p-8 md:p-16 relative z-10">
        
        {/* Hero Section */}
        <motion.header 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-28 mt-10 relative"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm tracking-widest text-gray-400 uppercase">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            {portfolioData.personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-400 font-medium mb-6 flex items-center gap-3">
            <Terminal className="w-7 h-7" /> 
            {portfolioData.personalInfo.role}
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed font-light">
            {portfolioData.personalInfo.tagline}
          </p>
        </motion.header>

        {/* Projects Section (Glassmorphism Cards) */}
        <section className="mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12 border-b border-white/5 pb-4"
          >
            <Code2 className="w-7 h-7 text-indigo-400" />
            <h3 className="text-3xl font-bold tracking-wide text-white">Featured Work</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-8 rounded-3xl hover:border-cyan-500/30 transition-all cursor-pointer shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative">
                  <h4 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                  <p className="text-gray-400 mb-8 font-light leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-black/30 text-indigo-300 text-xs font-mono px-3 py-1.5 rounded-lg border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12 border-b border-white/5 pb-4"
          >
            <Cpu className="w-7 h-7 text-indigo-400" />
            <h3 className="text-3xl font-bold tracking-wide text-white">Technical Arsenal</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h4 className="text-lg text-cyan-400 mb-6 font-mono uppercase tracking-widest text-sm">Development Stack</h4>
              <div className="flex flex-wrap gap-3">
                {portfolioData.skills.map((skill, i) => (
                  <span key={i} className="bg-white/[0.03] border border-white/[0.05] text-gray-300 px-5 py-2.5 rounded-xl text-sm hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h4 className="text-lg text-indigo-400 mb-6 font-mono uppercase tracking-widest text-sm">Core Competencies</h4>
              <div className="flex flex-wrap gap-3">
                {portfolioData.coreCompetencies.map((comp, i) => (
                  <span key={i} className="bg-white/[0.03] border border-white/[0.05] text-gray-300 px-5 py-2.5 rounded-xl text-sm hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-300 transition-all cursor-default">
                    {comp}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-24 bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.05] rounded-[2.5rem] relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Build Together.</h3>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto font-light text-lg">
            Currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <a href="mailto:sahil@example.com" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
            <Mail className="w-5 h-5" /> Send Message
          </a>
        </motion.section>

      </div>
    </main>
  );
}