import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Bot, 
  FileJson, 
  Server, 
  Layout, 
  Smartphone,
  ArrowUpRight, 
  Github
} from "lucide-react";

// --- ANIMATED ILLUSTRATIONS ---

// 1. AI Chatbot Illustration: Message Stream
const ChatbotIllustration = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative z-10 flex flex-col gap-3 w-48">
        {/* User Message (Right) */}
        <motion.div 
          className="self-end bg-blue-500/20 border border-blue-500/50 p-2 rounded-lg rounded-tr-none flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <div className="w-16 h-2 bg-blue-300/50 rounded-full" />
          <MessageSquare size={16} className="text-blue-300" />
        </motion.div>

        {/* AI Response (Left) */}
        <motion.div 
          className="self-start bg-cyan-500/20 border border-cyan-500/50 p-2 rounded-lg rounded-tl-none flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
        >
          <Bot size={16} className="text-cyan-300" />
          <div className="flex flex-col gap-1">
            <motion.div 
                className="w-24 h-2 bg-cyan-300/50 rounded-full" 
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.div 
                className="w-16 h-2 bg-cyan-300/30 rounded-full" 
                animate={{ width: ["0%", "70%"] }}
                transition={{ duration: 1, delay: 1.7, repeat: Infinity, repeatDelay: 3 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// 2. API / Backend Illustration: File Upload Stream
const APIIllustration = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-emerald-900/50 to-green-900/50 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="flex items-center gap-8 relative z-10">
        {/* File Icon */}
        <motion.div
            animate={{ x: [0, 60, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <FileJson className="w-10 h-10 text-emerald-400" />
        </motion.div>

        {/* Server Icon */}
        <div className="relative">
            <Server className="w-14 h-14 text-green-300" />
            <motion.div 
                className="absolute -right-1 -top-1 w-3 h-3 bg-green-400 rounded-full"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
            />
        </div>
      </div>

      {/* Connection Line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-[2px] bg-white/10" />
    </div>
  );
};

// 3. Web App Illustration: Responsive Layout
const WebIllustration = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/10">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

       <div className="relative z-10 flex gap-4 items-end">
            {/* Desktop View */}
            <motion.div 
                className="w-24 h-16 border-2 border-purple-400/50 rounded bg-purple-900/30 backdrop-blur-sm"
                initial={{ height: 0 }}
                whileInView={{ height: 64 }}
                transition={{ duration: 1 }}
            >
                <div className="w-full h-2 bg-purple-400/50 mb-1" />
                <div className="flex gap-1 p-1">
                    <div className="w-1/3 h-8 bg-purple-400/20 rounded" />
                    <div className="w-2/3 h-8 bg-purple-400/20 rounded" />
                </div>
            </motion.div>

            {/* Mobile View */}
            <motion.div 
                className="w-8 h-12 border-2 border-pink-400/50 rounded bg-pink-900/30 backdrop-blur-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-full h-1 bg-pink-400/50 mb-1" />
                <div className="p-0.5 space-y-1">
                    <div className="w-full h-2 bg-pink-400/20 rounded" />
                    <div className="w-full h-2 bg-pink-400/20 rounded" />
                    <div className="w-full h-2 bg-pink-400/20 rounded" />
                </div>
            </motion.div>
       </div>
    </div>
  );
};

// --- CARD COMPONENT ---

const ProjectCard = ({ title, desc, tags, link, github, Illustration }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col bg-zinc-900 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300 h-full"
    >
      <div className="w-full">
        <Illustration />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h3>
            <div className="flex gap-2">
                {github && (
                    <a href={github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                )}
                {link && (
                    <a href={link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <ArrowUpRight size={20} />
                    </a>
                )}
            </div>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium text-white/70 bg-white/5 border border-white/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN SECTION EXPORT ---

const FullStackProjects = () => {
  const projects = [
    {
      title: "AI Chatbot Assistant",
      desc: "A responsive chatbot integrated with Gemini AI and Supabase Edge Functions. Features real-time streaming responses and secure conversation history.",
      tags: ["React", "Supabase", "Gemini API", "Edge Functions"],
      illustration: ChatbotIllustration,
      github: "#",
      link: "#"
    },
    {
      title: "ZIMRA Fiscal API Client",
      desc: "Built a robust client-side API interface for the ZIMRA Fiscal Device Management System. Handles secure receipt uploads (CSV, JSON) and fiscal day reporting.",
      tags: ["TypeScript", "Node.js", "REST APIs", "Secure Uploads"],
      illustration: APIIllustration,
      github: "#",
      link: "#"
    },
    {
      title: "Vybrant Care Platform",
      desc: "Designed and developed digital assets and web components for a UK-based care service provider. Focused on accessible UI/UX and brand storytelling.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"],
      illustration: WebIllustration,
      github: "#",
      link: "#"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full Stack Development
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bridging the gap between complex backend logic and beautiful frontend experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              desc={project.desc}
              tags={project.tags}
              Illustration={project.illustration}
              github={project.github}
              link={project.link}
            />
          ))}
        </div>
          <div className="mt-16 text-center">
                    <a href="https://github.com/PhaseOfficial" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                        <Github size={20} />
                        View More on GitHub
                    </a>
                </div>
      </div>
    </section>
  );
};

export default FullStackProjects;