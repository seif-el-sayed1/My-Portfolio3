import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { assets } from '../data';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(".hero-name", 
      { y: 110, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.4 } 
    )
    .fromTo(".hero-title", 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.1 }, 
      "-=1"
    )
    .fromTo(".hero-desc", 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      "-=0.8"
    )
    .fromTo(".hero-btns > *", 
      { scale: 0.85, opacity: 0, y: 30 }, 
      { scale: 1, opacity: 1, y: 0, duration: 0.85, stagger: 0.15 }, 
      "-=0.6"
    )
    .fromTo(".social-icons a", 
      { opacity: 0, y: 40, scale: 0.7 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.12 }, 
      "-=0.4"
    );

    gsap.to(".float-icon", {
      y: -25,
      rotation: 12,
      duration: 6.5,
      ease: "sine.inOut",
      stagger: 0.3,
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef} 
      className="min-h-screen pt-20 pb-16 flex items-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f5ff_1px,transparent_1px)] bg-[length:70px_70px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 z-10 w-full">
        <div className="max-w-3xl">
          <h2 className="hero-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tighter mb-5">
            Hi, I'm <span className="text-secondary glow-cyan">Seif Elsayed</span>
          </h2>

          <p className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-200 mb-6">
            Backend &amp; Full-Stack Developer
          </p>

          <p className="hero-desc text-base sm:text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-12">
            Building scalable, high-performance systems with Node.js, Express, MongoDB and React.
          </p>

          {/* Buttons */}
          <div className="hero-btns flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="hero-action cursor-pointer group relative overflow-hidden w-full sm:w-auto px-10 py-4 bg-secondary text-white font-bold rounded-2xl text-lg
                        transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20"
            >
              <span className="relative z-10 group-hover:text-black">
                View Projects
              </span>

              {/* hover animation layer */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <a
              href="https://drive.google.com/file/d/1leXsEYn5Op_gqyjsQ-H5WXrIsOcf6lpq/view"
              target="_blank"
              className="w-full sm:w-auto text-center px-10 py-4 border-2 border-secondary hover:border-white rounded-2xl text-lg 
                         transition-all duration-300 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="social-icons flex justify-center sm:justify-start gap-5">
            {/* GitHub */}
            <a
              href="https://github.com/seif-el-sayed1"
              target="_blank"
              className="group p-4 border border-white/30 hover:border-secondary rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-secondary/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/seif-el-sayed-a8452a31a/"
              target="_blank"
              className="group p-4 border border-white/30 hover:border-secondary rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-secondary/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=seifsayed121@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 border border-white/30 hover:border-secondary rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-secondary/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="hidden xl:flex flex-col absolute right-12 bottom-28 gap-14">
        {[assets.react, assets.node, assets.mongo, assets.tailwind].map((icon, i) => (
          <img
            key={i}
            src={icon}
            className="float-icon w-20 opacity-75 hover:opacity-100 transition-all duration-300 drop-shadow-2xl"
            style={{ transform: `rotate(${i * 14}deg)` }}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}