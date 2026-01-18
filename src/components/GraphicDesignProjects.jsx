import { motion } from "framer-motion";
import { 
  PenTool, 
  Layers, 
  Palette, 
  Image as ImageIcon,
  Crop,
  Megaphone,
  ArrowUpRight, 
  Instagram
} from "lucide-react";

// --- ANIMATED ILLUSTRATIONS ---

// 1. Branding / Vector Illustration: Pen Tool Morphing
const BrandingIllustration = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-pink-900/50 to-rose-900/50 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* The Shape being drawn */}
      <motion.div
        className="absolute w-20 h-20 border-2 border-pink-400 bg-pink-500/20"
        animate={{ 
            borderRadius: ["0%", "50%", "0%"], 
            rotate: [0, 45, 0] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* The Pen Tool */}
      <motion.div
        className="absolute z-10 text-white drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
        animate={{ 
            x: [25, -25, 25], 
            y: [-25, 25, -25] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <PenTool size={32} className="fill-pink-500 text-pink-200" />
      </motion.div>

      {/* Anchor Points */}
      <motion.div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-1/2 -translate-x-10 -translate-y-10" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-1/2 translate-x-10 translate-y-10" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
    </div>
  );
};

// 2. Marketing / Social Media Illustration: Floating Layers
const MarketingIllustration = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative z-10">
        {/* Layer 1 (Back) */}
        <motion.div 
            className="absolute w-24 h-32 bg-violet-800/40 border border-violet-500/30 rounded-lg -rotate-12"
            animate={{ x: -20, rotate: -15 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Layer 2 (Middle) */}
        <motion.div 
            className="absolute w-24 h-32 bg-fuchsia-800/40 border border-fuchsia-500/30 rounded-lg rotate-6"
            animate={{ x: 20, rotate: 10 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Layer 3 (Front - Megaphone) */}
        <motion.div 
            className="relative w-24 h-32 bg-white/5 border border-white/20 rounded-lg backdrop-blur-md flex items-center justify-center shadow-xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
        >
            <Megaphone className="w-10 h-10 text-fuchsia-300" />
        </motion.div>
      </div>
    </div>
  );
};

// 3. Event / Art Illustration: Color Palette & Composition
const ArtIllustration = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/10">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

       <div className="relative z-10 flex gap-4">
            {/* The Image Frame */}
            <motion.div 
                className="w-24 h-24 border-2 border-dashed border-orange-400/50 rounded-lg flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ImageIcon className="text-orange-300/50 w-10 h-10" />
            </motion.div>

            {/* The Palette */}
            <motion.div 
                className="absolute -right-8 -bottom-4 bg-zinc-800 border border-white/10 p-2 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Palette className="text-amber-400 w-8 h-8" />
            </motion.div>

            {/* Crop Marks */}
            <motion.div 
                className="absolute -top-2 -left-2 text-white/30"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Crop size={20} />
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
      className="group relative flex flex-col bg-zinc-900 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-colors duration-300 h-full"
    >
      <div className="w-full">
        <Illustration />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{title}</h3>
            <div className="flex gap-2">
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

const GraphicDesignProjects = () => {
  const projects = [
    {
      title: "Vybrant Care Branding",
      desc: "Designed the complete visual identity for Vybrant Care Services (UK), including logo refinement, marketing posters, and social media templates to communicate care and professionalism.",
      tags: ["Adobe Illustrator", "Photoshop", "Brand Identity", "Print Design"],
      illustration: MarketingIllustration,
      link: "#" // Link to a Behance or portfolio if available
    },
    {
      title: "Roora Day Event Design",
      desc: "Created culturally resonant invitation cards and event signage for a traditional 'Roora' ceremony. Focused on blending traditional motifs with modern typography.",
      tags: ["CorelDraw", "Typography", "Event Design", "Visual Arts"],
      illustration: ArtIllustration,
      link: "#"
    },
    {
      title: "Logo & Vector Art",
      desc: "A collection of logos and vector illustrations created for various local startups and personal projects. Specializing in minimalist and geometric design styles.",
      tags: ["Vector Art", "Logo Design", "Minimalism", "Illustration"],
      illustration: BrandingIllustration,
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
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 mb-4">
            Graphic Design
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visual storytelling through branding, print media, and digital art.
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
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignProjects;