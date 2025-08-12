import { useState } from 'react';
import ParallaxSection from '../components/ParallaxSection';
import TrackingLine from '../components/TrackingLine';
import RevealSection from '../components/RevealSection';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import ServicesMarquee from '../components/servicesmarquee';
import backgroundImage from '../assets/background.png';
import backgroundImageblk from '../assets/backgroundblk.png';



const Services = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=''>
    <Navbar />
    <div className="relative">
   
            <ParallaxSection speed={-0.1}>
                <div className="  flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8">

               


    <ServicesMarquee />
      

                </div>
            </ParallaxSection>
            <div className="space-y-16 p-8">
            <RevealSection>
            <div
  className="flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
                    <section className="bg-white py-16 px-8">
                    <h1 className="text-6xl lg:text-8xl font-bold text-black mb-6">
          Creating Mobile Apps That Empower and Engage
          </h1>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content 7*/}
        <div className="lg:w-1/2">
          
          <p className="text-lg text-gray-700 mb-6">
          We design and develop mobile apps that are as powerful as they are user-friendly. 
          Whether you need a sleek, intuitive app for your business, a dynamic e-commerce platform,
           or a custom solution tailored to your needs, we turn your ideas into a seamless mobile 
           experience. Your app is more than just a tool—it's a bridge to your customers, your 
           business, and your success.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get started
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHNoeXd6ZnZtbmd5NzJsaTQ5ZTllMzNpeDF1dzFwdGwyYzl0MnN3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JPgbfjx4d2sAAkQabX/giphy.webp" // Replace with your image path
            alt="Webflow design interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mt-12 text-gray-800">
      <ul className="space-y-8">
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>Need an app that stands out?</strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Our designs are tailored to create an app experience that reflects your brand’s identity and engages users.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent}>
            Looking for smooth performance?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            We build apps that are fast, responsive, and optimized for both iOS and Android devices.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>
            Want to boost user engagement?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            We focus on creating intuitive, easy-to-use apps that keep users coming back and interacting with your brand.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent} >
            Ready to launch your app?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Let’s bring your app idea to life with innovative design, seamless functionality, and a flawless user experience.
            </p>
            )}
          </li>
        </ul>
      </div>
    </section>
                    </div>
                </RevealSection>
                <RevealSection>
                <div
  className="flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8"
  style={{ backgroundImage: `url(${backgroundImageblk})` }}
>
                    <section className="bg-black py-16 px-8">
                    <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6">
            Uncaged creativity inspires our designs
          </h1>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content 1*/}
        <div className="lg:w-1/2">
          
          <p className="text-lg text-gray-400 mb-6">
          <span className='text-white'>We offer General Graphics Design, </span>
Unleash boundless creativity with our design services.
We craft visually compelling posters, packaging designs, and essential 
design elements for websites that captivate your audience. Our expertise
 extends to creating engaging marketing materials for social media and delivering
  flawless photo editing. Whether it's for branding, promotion, or storytelling, 
we bring your vision to life with designs that leave a lasting impact.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get started
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDNudWllMjl0eWNvM3Z1bzRhZDUzNHBnYzVzZWc1ancyd3FwdmYxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bpmNf92LmkoMw/giphy.webp" // Replace with your image path
            alt="Webflow design interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mt-12 text-gray-800">
        <ul className="space-y-8">
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>Do you want to grab Attention?</strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
              Work with us to make designs that will grab the viewer's attention.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent}>
              Do you have a vision in mind you want made a reality?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
              Let us collaborate, tell us what you have in mind and we create it.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>
              Do you want to find your Aesthetic?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
              Let us work on your vision, experiment and find the right fit for you.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent} >
              Do you have a dream?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
              Let's make it reality.
            </p>
            )}
          </li>
        </ul>
      </div>
    </section>
                    </div>
                </RevealSection>
                <RevealSection>
                <div
  className="flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
                    <section className="bg-white py-16 px-8">
                    <h1 className="text-6xl lg:text-8xl font-bold text-black mb-6">
        Where Style Meets Imagination 
          </h1>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Image Content */}
      <div className="lg:w-1/2">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWY2MGZpcGUwdHpibWY2NWphYnRleWFxMmMzeXFtZzEyaHY0cnUwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41m3lEXGK65TkQHm/giphy.webp" // Replace with your image path
            alt="Webflow design interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Text Content 2 */}
        <div className="lg:w-1/2">
          
          <p className="text-lg text-gray-700 mb-6">
          We offer <span className='text-black'>Fashion Graphic Design</span> services that unleash boundless
        creativity. Collaborate with us to design unique logos, create stunning
        visuals, and deliver captivating aesthetics for your fashion brand. Let
        us help you make an unforgettable statement in the fashion industry.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get started
          </button>
        </div>

        
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mt-12 text-gray-400">
      <ul className="space-y-8">
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>Do you want designs that turn heads?</strong>
            {isExpanded && (
            <p className="mt-2 text-gray-800">
            Collaborate with us to craft visuals that captivate and demand attention.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent}>
            Have a vision waiting to come alive?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-800">
            Share your ideas, and we'll turn them into stunning designs tailored just for you.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>
            Still searching for your unique style?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-800">
            We'll explore, experiment, and find the perfect look that speaks to your brand.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent} >
              Do you have a dream?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-800">
              Let's make it reality.
            </p>
            )}
          </li>
        </ul>
      </div>
    </section>
                    </div>
                </RevealSection>
                <RevealSection>
                <div
  className="flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8"
  style={{ backgroundImage: `url(${backgroundImageblk})` }}
>
                    
                    <section className="bg-black py-16 px-8">
                    <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6">
          Empowering Innovation Through Intelligent Solutions
          </h1>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      
        {/* Text Content 3*/}
        <div className="lg:w-1/2">
          
          <p className="text-lg text-gray-400 mb-6">
          Unlock the true potential of your data with our cutting-edge AI, ML, and
           Data Science services. From predictive analytics to automation, we provide
            tailored solutions that drive smarter decisions, optimize operations, and
             fuel growth. Let us transform your challenges into opportunities with
              technology that evolves alongside your business
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get started
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzN5NjYwcmN0amg4cnNybjdocXZnZTM1bXFoOHNrbmM2azd1bGNmNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PjJ1cLHqLEveXysGDB/giphy.webp" // Replace with your image path
            alt="Webflow design interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mt-12 text-gray-800">
      <ul className="space-y-8">
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>Want to predict the future?</strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Leverage predictive analytics to stay ahead of the curve.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent}>
            Looking to automate your processes?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            We build intelligent systems that save time and resources.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>
            Need actionable insights from your data?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Our expertise turns complex datasets into clear, data-driven strategies.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent} >
            Ready to innovate?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Let’s design solutions that make your business smarter and more competitive.
            </p>
            )}
          </li>
        </ul>
      </div>
    </section>
                    </div>
                </RevealSection>
                
                <RevealSection>
                <div
  className="flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
                    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
       {/* Image Content */}
       <div className="lg:w-1/2">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZnYmxieGxjeXMza2J2Y3h1cDdlbzB5OXVvcW83aXB4dXI4cGJzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/huyZxIJvtqVeRp7QcS/giphy.webp" // Replace with your image path
            alt="Webflow design interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Text Content 4*/}
        <div className="lg:w-1/2">
          <h1 className="text-6xl lg:text-8xl font-bold text-black mb-6">
          Amplify Your Brand’s Voice in the Digital World
          </h1>
          <p className="text-lg text-gray-700 mb-6">
          Connect, engage, and grow with our expert digital marketing solutions. 
          From social media campaigns to SEO strategies, we help you build a powerful 
          online presence that resonates with your audience. 
          Let us turn clicks into customers and ideas into impactful results.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get started
          </button>
        </div>

       
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mt-12 text-gray-400">
      <ul className="space-y-8">
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>Want to reach the right audience?</strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Our targeted strategies ensure your message gets to those who matter most.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent}>
            Need to boost your online visibility?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            We optimize your digital presence to rank higher and shine brighter.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>
            Looking to drive engagement and growth?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            From compelling content to innovative campaigns, we spark conversations that convert.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent} >
            Ready to dominate the digital space?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Let’s create a marketing strategy that puts your brand in the spotlight
            </p>
            )}
          </li>
        </ul>
      </div>
    </section>
                    </div>
                </RevealSection>
                <RevealSection>
                <div
  className="flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8"
  style={{ backgroundImage: `url(${backgroundImageblk})` }}
><section className="bg-black py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content 5*/}
        <div className="lg:w-1/2">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6">
          Crafting Websites That Inspire and Perform
          </h1>
          <p className="text-lg text-gray-400 mb-6">
          We design and develop stunning, user-centric websites that blend creativity 
          with functionality. Whether you need a sleek portfolio, a robust 
          e-commerce platform, or a dynamic business site, we bring your 
          vision to life with precision and innovation. Your website is your 
          digital storefront—let’s make it extraordinary
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get started 

          </button>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTdlN3dxMGQyODdhaWkxN3NxOWJld3RjMmo3NmoxbmwwMDAweW0yaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zgduo4kWRRDVK/giphy.webp" // Replace with your image path
            alt="Webflow design interface"
            className="w-full rounded-lg shadow-lg"
          />  
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mt-12 text-gray-800">
      <ul className="space-y-8">
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>Want a website that stands out?</strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Our designs are tailored to reflect your brand’s unique identity.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent}>
            Need seamless functionality?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            We create intuitive, responsive websites optimized for all devices.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>
            Looking to boost engagement and conversions?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Our development solutions ensure a user experience that keeps visitors coming back.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent} >
            Ready to make your mark online?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Let’s build a website that tells your story and achieves your goals.
            </p>
            )}
          </li>
        </ul>
      </div>
    </section>
                    </div>
                </RevealSection>
                <RevealSection>
                <div
  className="flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8"
  style={{ backgroundImage: `url(${backgroundImage})` }}
> <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
{/* Image Content */}
<div className="lg:w-1/2">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnExemFiN3NrdTRlamMzZzI2czNsb3IycW5kcGQzc2R0YWtrNnpmeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjHOezvV1v2GN07S/giphy.webp" // Replace with your image path
            alt="Webflow design interface"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content 6*/}
        <div className="lg:w-1/2">
          <h1 className="text-6xl lg:text-8xl font-bold text-black mb-6">
          Finding and Delivering the Perfect Goods for You
          </h1>
          <p className="text-lg text-gray-700 mb-6">
          We specialize in helping you find exactly what you need, evaluating 
          the quality of products, purchasing them on your behalf, and ensuring
           they reach you hassle-free. Whether you're looking for specific items, 
           the best deals, or high-quality goods, our service is designed to save you 
           time and provide peace of mind. Your satisfaction is our priority.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Get started
          </button>
        </div>

        
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto mt-12 text-gray-800">
      <ul className="space-y-8">
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>Need help finding the perfect product?</strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            We scour the market to find the best options for you, considering your needs and preferences.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent}>
            Worried about quality?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            We don’t just pick products—we evaluate them thoroughly,
            ensuring they meet high standards before making a purchase.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer" onClick={toggleContent}>
            Ready to buy without the hassle?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            Once we’ve found the right product, we handle the purchase 
            and delivery, ensuring a smooth and efficient experience.
            </p>
            )}
          </li>
          <li>
            <strong className="block text-lg font-semibold cursor-pointer"onClick={toggleContent} >
            Want it delivered fast and safely?
            </strong>
            {isExpanded && (
            <p className="mt-2 text-gray-400">
            We manage the entire delivery process, so you don’t have to worry about a thing.

Let us handle the legwork while you enjoy the best products, all delivered to your door.
            </p>
            )}
          </li>
        </ul>
      </div>
    </section>
                    </div>
                </RevealSection>
                
                <RevealSection>
                <div
  className="flex items-center text-gray-800 bg-cover relative flex-col md:pt-20 md:p-12 md:pb-20 sd:p-8"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
    <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Banking Details</h2>
      <p className="text-lg mb-2">
        <strong>Account Name:</strong> RED CUP SERIES PVT LTD
      </p>
      <p className="text-lg mb-2">
        <strong>Bank Name:</strong> FBC
      </p>
      <p className="text-lg mb-2">
        <strong>USD Account Number:</strong> 6880389312020
      </p>
      <p className="text-lg mb-2">
        <strong>Branch:</strong> Leopold Takawira Branch
      </p>
      <p className="text-lg">
        <strong>ZIG Account Number:</strong> 4480389310001
      </p>
    </div>
  </div>
</RevealSection>

            </div>
        </div>
        <Footer />
        </div>
  )
}
export default Services;