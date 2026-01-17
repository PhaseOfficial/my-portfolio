import ScrollStack, { ScrollStackItem } from './ScrollStack'

const Carreer = () => {
  const cardData = [
    {
      title: "Software Developer",
      description: "Full-stack developer specializing in React, Node.js, and modern web technologies",
      skills: ["React", "Node.js", "TypeScript"],
      details: ["💻 Building scalable web applications", "🚀 Optimizing performance & user experience"],
      gradient: "from-blue-600 to-purple-700"
    },
    {
      title: "AI/ML Engineer", 
      description: "Building intelligent systems with machine learning and artificial intelligence",
      skills: ["Python", "TensorFlow", "OpenAI"],
      details: ["🧠 Neural networks & deep learning", "🔬 Data analysis & model optimization"],
      gradient: "from-green-600 to-teal-700"
    },
    {
      title: "UI/UX Designer",
      description: "Creating beautiful and intuitive user experiences with modern design principles",
      skills: ["Figma", "Adobe XD", "Sketch"],
      details: ["🎨 User interface design", "✨ User experience optimization"],
      gradient: "from-orange-600 to-red-700"
    }
  ]

  return (
    <section className='bg-black text-white relative w-full min-h-screen font-montserrat'>
      <div className='absolute top-20 left-1/2 transform -translate-x-1/2 z-10 text-center'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
          My Career Journey
        </h1>
        <p className='text-gray-300 mt-2 max-w-md mx-auto'>
          Scroll to see my cards unfold
        </p>
      </div>
      
      <ScrollStack 
        useWindowScroll={true}
        itemDistance={100}
        baseScale={0.6}
        stackPosition="50%"
        scaleEndPosition="50%"
        itemStackDistance={0}
        blurAmount={0}
      >
        {cardData.map((card, index) => (
          <ScrollStackItem key={index}>
            <div className={`bg-gradient-to-br ${card.gradient} p-8 rounded-2xl text-white shadow-2xl w-full max-w-lg mx-auto`}>
              <h2 className='text-3xl font-bold mb-4'>{card.title}</h2>
              <p className='text-lg mb-6 opacity-90 leading-relaxed'>{card.description}</p>
              
              <div className='flex flex-wrap gap-3 mb-6'>
                {card.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className='px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10'
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className='space-y-2'>
                {card.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className='text-sm opacity-75 flex items-center'>
                    {detail}
                  </p>
                ))}
              </div>
              
              <div className='mt-8 pt-6 border-t border-white/20'>
                <div className='flex justify-between items-center'>
                  <span className='text-sm opacity-60'>Role {index + 1}</span>
                  <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center'>
                    <span className='text-sm font-bold'>{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  )
}

export default Carreer
