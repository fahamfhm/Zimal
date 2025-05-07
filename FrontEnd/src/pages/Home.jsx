import React from 'react';
import HeroImage from '../assets/hero.png';
import sample from '../assets/hero.png';

const projects = [
  { id: 1, name: "Spices", image: sample, link: "spices" },
  { id: 2, name: "Cosmetics", image: sample, link: "cosmetics" },
  { id: 3, name: "Foods", image: sample, link: "foods" },
];

const main = [
  { id: 1, name: "Cyber Solutions", image: sample, link: "contact" },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-green-100 to-white text-green-700 min-h-screen flex items-center scroll-mt-24' id='about'>
        <div className='container mx-auto px-6 md:px-12 lg:px-24'>
          <div className='flex flex-col-reverse md:flex-row items-center gap-12'>
            <div className='flex-1 text-center md:text-left'>
              <h1 className='text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-green-700 drop-shadow-md'>
                Build Your Digital Empire 🌐
              </h1>
              <p className='text-lg md:text-xl text-gray-700 mb-8'>
                Your vision, our code — Exceptional digital experiences delivered globally.
              </p>
              <a href="about" className="inline-block bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 animate-pulse">
                Get Started Today
              </a>
            </div>
            <div className="flex-1">
              <img src={HeroImage} alt="Hero" className='w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover border-4 border-green-200' />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className='bg-white text-green-700 py-28'>
        <div className='container mx-auto px-6 md:px-12 lg:px-24'>

          {/* Main Services */}
          <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-green-800'>
            Main Service
          </h2>
          <div className='flex flex-col-reverse md:flex-row items-center gap-12'>
            <div className='flex-1 text-center md:text-left'>
              <div className="flex justify-center mb-24">
                {main.map(project => (
                  <div key={project.id} className="bg-white border border-green-200 rounded-3xl p-8 shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 max-w-sm hover:shadow-green-300/50">
                    <img src={project.image} alt={project.name} className="rounded-xl mb-4 w-90 h-56 object-cover" />
                  
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h1 className='text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-green-700 drop-shadow-md'>
                Cyber Secrity Solutions
              </h1>
              <p className='text-lg md:text-xl text-gray-700 mb-8'>
                Your vision, our code — Exceptional digital experiences delivered globally.
              </p>
              <a href="#" className="inline-block bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 animate-pulse">
                View More
              </a>            </div>
          </div>


          {/* Other Services */}
          <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-green-800'>
            Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map(project => (
              <div key={project.id} className="bg-white border border-green-100 p-8 rounded-3xl shadow-xl hover:shadow-green-300/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500">
                <img src={project.image} alt={project.name} className="rounded-xl mb-4 w-full h-56 object-cover" />
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <a href={project.link} className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all duration-300">
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;
