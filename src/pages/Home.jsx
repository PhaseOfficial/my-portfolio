import { motion } from 'framer-motion';
import { FaGithub, FaBrain, FaLaptopCode, FaLanguage, FaGraduationCap, FaAward, FaUsers, FaRobot } from 'react-icons/fa';
import { MdAnalytics, MdEngineering } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';

// COMPONENTS
import Navbar from '../components/Navbar';
import Explore from '../components/Exploreprod';
import Contactus from '../components/Contactus';
import Footer from '../components/footer';
import Offer from '../components/Offer';

// ASSETS
import zchpcLogo from '../assets/zchpc-logo.png';
import uzLogo from '../assets/University_of_Zimbabwe_LOGO.png';
import profileHero from '../assets/background.png';
import profileImage from '../assets/pamhonde.png';
import '../App.css';

// Import the GlowingEffect
import { GlowingEffect, cn } from '../components/GlowingEffect'; 

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
};

const heroVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

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
    <div className="min-h-screen text-gray-200" style={{ backgroundColor: '#0a0a09' }}>
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${profileHero})` }}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center text-white px-6 z-10">
          <div className="mb-6">
            <img
              src={profileImage}
              alt="Panashe Arthur Mhonde"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Panashe Arthur Mhonde
          </h1>
          <p className="text-lg md:text-xl font-medium mb-4">
            Data Scientist & Analyst | AI Researcher | Full-Stack Developer
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm md:text-base">
            <a href="https://wa.me/+263788147289" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <IoLogoWhatsapp /> +263 788 147 289
            </a>
            <a
              href="https://github.com/PhaseOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-400"
            >
              <FaGithub /> PhaseOfficial
            </a>
          </div>
        </div>
      </motion.section>

      <Offer className="" />
      <Explore className="" />

      {/* Info Cards Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-100">
          Who is Panashe?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Profile Card */}
          <GlowCard customIndex={0}>
            <div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-100">Profile</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Energetic and ambitious Data Scientist & Statistician, passionate about solving real-world problems with AI and Data Analytics.
                Skilled full-stack developer with experience in API integrations, backend development, database management, and SEO.
                Proficient graphic designer with a keen eye for detail.
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
                  className="h-16 mx-auto mb-4 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-100">Work Experience</h3>
              <div className="space-y-6 text-center text-gray-300 text-sm flex-grow">
                <div>
                  <p className="font-bold text-base text-white">Resident Researcher (Big Data & AI)</p>
                  <p className="text-gray-500 text-xs mb-1">ZCHPC | Jul 2024 – Apr 2025</p>
                  <p className="text-gray-400">
                    Researched AI and Big Data integration for national-scale projects. Built predictive models using Python & TensorFlow.
                  </p>
                </div>
                <div className="border-t border-gray-800 pt-4">
                  <p className="font-bold text-base text-white">Big Data Analyst Intern</p>
                  <p className="text-gray-500 text-xs mb-1">ZCHPC | Jul 2023 – Jul 2024</p>
                  <p className="text-gray-400">
                    Analyzed large datasets with Python & SQL, deployed models on HPC systems, and contributed to dashboards.
                  </p>
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Skills */}
          <GlowCard customIndex={2}>
            <div>
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-100">Technical Skills</h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg"><MdAnalytics className="text-blue-400 text-xl" /> <span>Data Analysis (Python, R, SQL)</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg"><FaBrain className="text-pink-400 text-xl" /> <span>Machine Learning & LLM Training</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg"><FaLaptopCode className="text-green-400 text-xl" /> <span>Full-Stack Web Development</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg"><FaRobot className="text-yellow-400 text-xl" /> <span>Prompt Engineering</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg"><MdEngineering className="text-orange-400 text-xl" /> <span>Data Engineering</span></li>
                <li className="flex items-center gap-3 bg-white/5 p-2 rounded-lg"><FaUsers className="text-purple-400 text-xl" /> <span>Communication & Teamwork</span></li>
              </ul>
            </div>
          </GlowCard>
        </div>

        {/* Second Row */}
        <div className="grid gap-8 md:grid-cols-3 mt-8">
          
          {/* Languages */}
          <GlowCard customIndex={3}>
            <div>
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-100">
                <FaLanguage className="inline mr-2" /> Languages
              </h3>
              <ul className="text-gray-300 space-y-3 px-4">
                <li className="flex justify-between border-b border-gray-800 pb-2"><span>English</span> <span className="text-yellow-500">★★★★★</span></li>
                <li className="flex justify-between border-b border-gray-800 pb-2"><span>Shona</span> <span className="text-yellow-500">★★★★★</span></li>
                <li className="flex justify-between border-b border-gray-800 pb-2"><span>Sign Language</span> <span className="text-yellow-500/50">★★★✩✩</span></li>
                <li className="flex justify-between pb-2"><span>Chinese</span> <span className="text-yellow-500/50">★★★✩✩</span></li>
              </ul>
            </div>
          </GlowCard>

          {/* Education */}
          <GlowCard customIndex={4}>
            <div className="flex flex-col items-center">
              <div className="text-center mb-4 bg-white/10 p-4 rounded-xl">
                <img
                  src={uzLogo}
                  alt="UZ Logo"
                  className="h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-100">
                <FaGraduationCap className="inline mr-2" /> Education
              </h3>
              <div className="text-center mt-4">
                <p className="text-lg font-bold text-white">BSc (Hons) in Data Science and Systems</p>
                <p className="text-gray-400 mt-2">University of Zimbabwe</p>
                <p className="text-sm text-gray-500">2021 – 2025</p>
                <div className="mt-4 inline-block px-4 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-sm">
                  Upper Second Class (2.1)
                </div>
              </div>
            </div>
          </GlowCard>

          {/* Achievements */}
          <GlowCard customIndex={5}>
            <div>
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-100">
                <FaAward className="inline mr-2" /> Achievements
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg border-l-4 border-yellow-500">
                  <span className="block font-bold text-white">Distinction</span>
                  <span className="text-sm">Shona NLP Thesis</span>
                </li>
                <li className="bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="block font-bold text-white">5th Place</span>
                  <span className="text-sm">Zindi Maize Disease Detection</span>
                </li>
                <li className="bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-lg border-l-4 border-green-500">
                  <span className="block font-bold text-white">Certified</span>
                  <span className="text-sm">AI & Big Data (ZCHPC)</span>
                </li>
              </ul>
            </div>
          </GlowCard>

        </div>
      </section>
    </div>
  );
};

export default function Home() {
  return (
    <div className="pt-20">
      <Navbar />
      <AboutMeSection />
      {/* <Companies className=""/> */}
      {/* <Trust className=""/> */}
      {/* <Carreer className=""/> */}
      <Contactus className="mt-20" id="contact" />
      <Footer className="mt-20" />
    </div>
  );
}