import BlurText from "./BlurText";
import RotatingText from './RotatingText';
import Particles from './Particles';

const Exploreprod = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[100dvh] w-full overflow-hidden bg-black/90">
      
      {/* Particles background */}
      {/* Added pointer-events-none to ensure particles don't block scrolling/touching on mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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
      <div className="relative z-10 text-center w-full max-w-[100vw] px-4 flex flex-col items-center justify-center gap-4">
        
        <BlurText
          text="I excel at being a"
          // Adjusted base size to text-2xl for better proportion on small phones
          className="text-2xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
        />
        
        <RotatingText
          texts={['Data Scientist', 'Graphic Designer', 'Developer', 'Digital Marketer!']}
          // FIXES APPLIED:
          // 1. whitespace-nowrap: Forces text to stay on one line (prevents layout jumping).
          // 2. text-[...]: Used specific mobile sizing (text-xl or clamp) to fit "Digital Marketer".
          // 3. px/py: Tightened mobile padding.
          mainClassName="
            inline-flex items-center justify-center
            whitespace-nowrap
            rounded-lg
            bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 
            text-white 
            font-black font-montserrat-bold
            overflow-hidden
            
            text-xl px-3 py-2
            min-w-[280px] sm:min-w-[500px] 
            
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