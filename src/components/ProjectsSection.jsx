import { motion } from "framer-motion";
import { 
  Brain, 
  ScanFace, 
  Database, 
  MessageSquareCode, 
  LineChart, 
  ArrowUpRight, 
  Github,
  Search
} from "lucide-react";

// --- ANIMATED ILLUSTRATION COMPONENTS ---

// 1. NLP / LLM Illustration: Pulsing Brain with floating data particles
const NLPIllustration = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/10">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Central Brain */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 p-4 bg-indigo-600/20 rounded-full border border-indigo-400/50 backdrop-blur-sm"
      >
        <Brain className="w-12 h-12 text-indigo-300" />
      </motion.div>

      {/* Floating Particles (Words/Tokens) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ 
            x: [0, (i % 2 === 0 ? 60 : -60)], 
            y: [0, (i === 0 ? -60 : 40)], 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            delay: i * 0.8,
            ease: "easeOut" 
          }}
        >
          <MessageSquareCode className="w-6 h-6 text-purple-400" />
        </motion.div>
      ))}
    </div>
  );
};

// 2. Computer Vision Illustration: Scanning Line effect
const CVIllustration = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Target Image Placeholder */}
      <div className="relative z-10 w-24 h-24 border-2 border-emerald-500/30 rounded-lg flex items-center justify-center bg-black/40">
        <ScanFace className="w-12 h-12 text-emerald-400/50" />
        
        {/* Scanning Line */}
        <motion.div
          className="absolute w-full h-[2px] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Bounding Boxes appearing */}
      <motion.div
        className="absolute top-10 right-10 w-8 h-8 border border-emerald-400 rounded-sm"
        animate={{ opacity: [0, 1, 0], scale: [1.2, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
};

// 3. Predictive Analytics Illustration: Growing Graph
const DataIllustration = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/10">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative z-10 flex items-end gap-3 h-24 w-40 border-l border-b border-white/20 p-2">
        {/* Bar 1 */}
        <motion.div 
          className="w-8 bg-orange-500/80 rounded-t-sm"
          animate={{ height: ["20%", "40%", "30%", "60%"] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        {/* Bar 2 */}
        <motion.div 
          className="w-8 bg-orange-400/80 rounded-t-sm"
          animate={{ height: ["40%", "80%", "50%", "90%"] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
        />
        {/* Bar 3 */}
        <motion.div 
          className="w-8 bg-red-400/80 rounded-t-sm"
          animate={{ height: ["60%", "30%", "70%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.4 }}
        />
        
        {/* Floating Icon */}
        <motion.div 
            className="absolute -top-6 -right-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
            <LineChart className="w-10 h-10 text-orange-200" />
        </motion.div>
      </div>
    </div>
  );
};

// --- MAIN PROJECT CARD COMPONENT ---

const ProjectCard = ({ title, desc, tags, link, github, Illustration }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col bg-zinc-900 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300"
    >
      {/* Illustration Area */}
      <div className="w-full">
        <Illustration />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
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

        {/* Tags */}
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

const ProjectsSection = () => {
  const projects = [
    {
      title: "Shona NLP Model",
      desc: "Developed a bilingual dataset and language model specifically for the Zimbabwean banking sector. Fine-tuned BERT for Shona-English code-switching scenarios.",
      tags: ["Python", "PyTorch", "HuggingFace", "NLP"],
      illustration: NLPIllustration,
      github: "#",
      link: "#"
    },
    {
      title: "Maize Disease Detection",
      desc: "An advanced Computer Vision system capable of detecting disease in maize crops with 94% accuracy. Used for the Zindi competition (5th Place overall).",
      tags: ["OpenCV", "TensorFlow", "CNN", "Agriculture"],
      illustration: CVIllustration,
      github: "#",
      link: "#"
    },
    {
      title: "Fiscal Data Analytics",
      desc: "A predictive analytics dashboard for ZIMRA financial data. Utilizes time-series forecasting to predict revenue trends and anomalies in real-time.",
      tags: ["R Language", "SQL", "Tableau", "Forecasting"],
      illustration: DataIllustration,
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
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my work in Artificial Intelligence, Data Science, and Software Development.
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

export default ProjectsSection;