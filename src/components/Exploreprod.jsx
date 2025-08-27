import BlurText from "./BlurText";
import LetterGlitch from './LetterGlitch';
const Exploreprod = () => {
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100px",
        overflow: "hidden",
      }}
    >
    <div
        style={{
          position: "absolute",
          inset: 0, // fill parent
          zIndex: 0, // behind everything
        }}
      >
    <LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
/>
</div>
  <div
    style={{
      position: "absolute",
      inset: 0, // fill parent
      zIndex: 1, // behind everything
    }}
  >
    <BlurText
  text="I am a Data Scientist"
  delay={150}
  animateBy="words"
  onAnimationComplete={handleAnimationComplete}
  className="text-5xl font-black font-montserrat text-center md:text-8xl whitespace-pre-line"
  rootMargin="-100px"
  textAlign="center"
  direction="top"
/>
  </div>
  </section>
  )
}

export default Exploreprod