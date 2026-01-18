import { motion } from 'framer-motion';
import { FaGithub, FaBrain, FaLaptopCode, FaLanguage, FaGraduationCap, FaAward, FaUsers, FaRobot } from 'react-icons/fa';
import { MdAnalytics, MdEngineering } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';
import ProjectsSection from '../components/ProjectsSection';

// COMPONENTS
import Navbar from '../components/Navbar';
import Explore from '../components/Exploreprod';
import Contactus from '../components/Contactus';
import Footer from '../components/footer';
import Offer from '../components/Offer';
import { MorphingText } from "../components/MorphingText"; 
import ScrollExpandMedia from '../components/ScrollExpandMedia'; 

// ASSETS
import zchpcLogo from '../assets/zchpc-logo.png';
import uzLogo from '../assets/University_of_Zimbabwe_LOGO.png';
import profileHero from '../assets/background.png';
import profileImage from '../assets/pamhonde.png';
import heroVideo from '../assets/webvid.mp4'; 
import '../App.css';

// Import the GlowingEffect
import { GlowingEffect, cn } from '../components/GlowingEffect'; 

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
};

// Define your text strings
const myTexts = [
  "Who is Panashe?",
  "Who is Arthur?",
  "Who is Phase_rcs?",
];

// --- Reusable Glow Card Component ---
const GlowCard = ({ children, className, customIndex }) => {
  return (
    <motion.div
      custom={customIndex}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className={cn("relative h-full", className)}
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative h-full flex flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/90 p-6 shadow-sm">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const AboutMeSection = () => {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={heroVideo} 
      bgImageSrc={profileHero} 
      title="Panashe Arthur Mhonde" 
      date="Data Scientist & Full Stack Dev"
      scrollToExpand="Scroll to Explore"
      textBlend={true}
    >
      
      {/* --- REVEALED CONTENT SECTION --- */}
      
      {/* 1. Profile Header (Avatar + Name + Socials) */}
      <div className="flex flex-col items-center text-center text-white px-6 mb-16 mt-8">
        
        {/* Avatar */}
        <div className="mb-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={profileImage}
            alt="Panashe Arthur Mhonde"
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-black shadow-2xl object-cover"
          />
        </div>

        {/* NAME & ROLE */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-2">
            Panashe Arthur Mhonde
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium mb-8">
            Data Scientist | AI Researcher | Full-Stack Developer
          </p>
        </motion.div>
        
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a 
            href="https://wa.me/+263788147289" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-green-500/50 hover:text-green-400 transition-all duration-300 backdrop-blur-sm"
          >
            <IoLogoWhatsapp className="text-xl" /> 
            <span className="font-medium">+263 788 147 289</span>
          </a>
          <a
            href="https://github.com/PhaseOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 backdrop-blur-sm"
          >
            <FaGithub className="text-xl" /> 
            <span className="font-medium">PhaseOfficial</span>
          </a>
        </div>

        {/* Offer & Explore Components */}
        <div className="w-full max-w-7xl mx-auto space-y-20">
            <Offer className="" />
            <Explore className="" />
        </div>
      </div>

      {/* 2. Info Cards Section */}
      <section className="px-4 md:px-12 lg:px-24 pb-20 max-w-[1600px] mx-auto">
        
        {/* Morphing Header */}
        <div className="mb-16">
            <MorphingText 
            texts={myTexts} 
            className="text-4xl md:text-6xl font-bold text-center text-gray-100 drop-shadow-lg" 
            />
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Profile Card */}
          <GlowCard customIndex={0}>
            <div>
              <h3 className="text-xl font-bold text-center mb-4 text-white uppercase tracking-wider">Profile</h3>
              <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                Energetic and ambitious <span className="text-blue-400 font-semibold">Data Scientist & Statistician</span>, passionate about solving real-world problems with AI and Data Analytics.
                Skilled full-stack developer with experience in API integrations, backend development, database management, and SEO.
              </p>
            </div>
          </GlowCard>

          {/* Work Experience */}
          <GlowCard customIndex={1}>
            <div className="h-full flex flex-col">
              <div className="text-center mb-4">
                <img
                  src={zchpcLogo}
                  alt="ZCHPC Logo"
                  className="h-12 mx-auto mb-4 object-contain opacity-90"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-6 text-white uppercase tracking-wider">Work Experience</h3>
              <div className="space-y-6 text-center text-gray-300 text-sm flex-grow">
                <div>
                  <p className="font-bold text-base text-blue-300">Resident Researcher</p>
                  <p className="text-gray-500 text-xs mb-2 font-mono">ZCHPC | Jul 2024 – Apr 2025</p>
                  <p className="text-gray-400 leading-snug">
                    Researched AI & Big Data integration. Built predictive models using Python & TensorFlow.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-base text-blue-300">Big Data Analyst Intern</p>
                  <p className="text-gray-500 text-xs mb-2 font-mono">ZCHPC | Jul 2023 – Jul 2024</p>
                  <p className="text-gray-400 leading-snug">
                    Analyzed large datasets, deployed HPC models, and built dashboards.
                  </p>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Skills */}
          <GlowCard customIndex={2}>
            <div>
              <h3 className="text-xl font-bold text-center mb-6 text-white uppercase tracking-wider">Technical Skills</h3>
              <ul className="text-gray-300 space-y-3 text-sm">
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg hover:bg-white/10 transition"><MdAnalytics className="text-blue-400 text-xl" /> <span>Data Analysis (Python, R, SQL)</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg hover:bg-white/10 transition"><FaBrain className="text-pink-400 text-xl" /> <span>Machine Learning & LLM Training</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg hover:bg-white/10 transition"><FaLaptopCode className="text-green-400 text-xl" /> <span>Full-Stack Web Development</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg hover:bg-white/10 transition"><FaRobot className="text-yellow-400 text-xl" /> <span>Prompt Engineering</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg hover:bg-white/10 transition"><MdEngineering className="text-orange-400 text-xl" /> <span>Data Engineering</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg hover:bg-white/10 transition"><FaUsers className="text-purple-400 text-xl" /> <span>Communication & Teamwork</span></li>
              </ul>
            </div>
          </GlowCard>

          {/* Languages */}
          <GlowCard customIndex={3}>
            <div>
              <h3 className="text-xl font-bold text-center mb-6 text-white uppercase tracking-wider">
                <FaLanguage className="inline mr-2" /> Languages
              </h3>
              <ul className="text-gray-300 space-y-4 px-2">
                <li className="flex justify-between items-center border-b border-white/10 pb-2"><span>English</span> <span className="text-yellow-400 text-xs tracking-widest">★★★★★</span></li>
                <li className="flex justify-between items-center border-b border-white/10 pb-2"><span>Shona</span> <span className="text-yellow-400 text-xs tracking-widest">★★★★★</span></li>
                <li className="flex justify-between items-center border-b border-white/10 pb-2"><span>Sign Language</span> <span className="text-yellow-400/50 text-xs tracking-widest">★★★✩✩</span></li>
                <li className="flex justify-between items-center pb-2"><span>Chinese</span> <span className="text-yellow-400/50 text-xs tracking-widest">★★★✩✩</span></li>
              </ul>
            </div>
          </GlowCard>

          {/* Education */}
          <GlowCard customIndex={4}>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
                <img
                  src={uzLogo}
                  alt="UZ Logo"
                  className="h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-white uppercase tracking-wider">
                <FaGraduationCap className="inline mr-2" /> Education
              </h3>
              <div className="text-center mt-4 space-y-2">
                <p className="text-lg font-bold text-white leading-tight">BSc (Hons) Data Science & Systems</p>
                <p className="text-gray-400">University of Zimbabwe</p>
                <p className="text-sm text-gray-500 font-mono">2021 – 2025</p>
                <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">
                  Upper Second Class (2.1)
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Achievements */}
          <GlowCard customIndex={5}>
            <div>
              <h3 className="text-xl font-bold text-center mb-6 text-white uppercase tracking-wider">
                <FaAward className="inline mr-2" /> Achievements
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="bg-gradient-to-r from-white/5 to-transparent p-4 rounded-xl border-l-4 border-yellow-500 hover:bg-white/10 transition">
                  <span className="block font-bold text-white text-lg">Distinction</span>
                  <span className="text-sm text-gray-400">Shona NLP Thesis</span>
                </li>
                <li className="bg-gradient-to-r from-white/5 to-transparent p-4 rounded-xl border-l-4 border-blue-500 hover:bg-white/10 transition">
                  <span className="block font-bold text-white text-lg">5th Place</span>
                  <span className="text-sm text-gray-400">Zindi Maize Disease Detection</span>
                </li>
                <li className="bg-gradient-to-r from-white/5 to-transparent p-4 rounded-xl border-l-4 border-green-500 hover:bg-white/10 transition">
                  <span className="block font-bold text-white text-lg">Certified</span>
                  <span className="text-sm text-gray-400">AI & Big Data (ZCHPC)</span>
                </li>
              </ul>
            </div>
          </GlowCard>

        </div>
      </section>
    </ScrollExpandMedia>
  );
};

export default function Home() {
  return (
    <div className="pt-20 bg-[#0a0a09]">
      <Navbar />
      <AboutMeSection />
      <ProjectsSection />
      <Contactus className="mt-20" id="contact" />
      <Footer className="mt-20" />
    </div>
  );
}