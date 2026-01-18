import BlurText from "./BlurText";
import RotatingText from './RotatingText';
import Particles from './Particles';

const Exploreprod = () => {
  return (
    // Changed min-h-screen to min-h-[100dvh] for better mobile browser support (addresses address bar resizing)
    <section className="relative flex items-center justify-center min-h-[100dvh] w-full overflow-hidden ">
      
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#660761ff', '#f00909ff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      {/* Added w-full and px-4 to ensure text doesn't touch screen edges */}
      <div className="relative z-10 text-center w-full px-4 flex flex-col items-center justify-center gap-2 md:gap-4">
        
        <BlurText
          text="I excel at being a"
          // Adjusted text sizes:
          // Base: text-3xl (Mobile)
          // SM: text-5xl (Small Tablets)
          // MD: text-7xl (Desktops)
          className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
        />
        
        <RotatingText
          texts={['Data Scientist', 'Graphic Designer', 'Developer', 'Digital Marketer!']}
          // Significant changes here for responsiveness:
          // 1. Base text-2xl: Small enough to fit "Digital Marketer" on a phone screen.
          // 2. sm:text-5xl: Scales up for tablets.
          // 3. md:text-7xl: Big impact on desktop.
          // 4. py/px: Adjusted padding to be proportional to text size.
          mainClassName="
            inline-block
            rounded-lg
            bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 
            text-white 
            font-black font-montserrat-bold
            overflow-hidden
            justify-center
            text-2xl px-3 py-1
            sm:text-5xl sm:px-5 sm:py-2
            md:text-7xl md:px-8 md:py-3
            lg:text-8xl
          "
          staggerFrom="last"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </section>
  );
}

export default Exploreprod;