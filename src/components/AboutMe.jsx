import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutMe } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(cardRefs.current,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "back.out(1.4)"
          }
        );
      }
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-28 px-4 sm:px-6 bg-black/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate Full-Stack Developer focused on building scalable and user-friendly applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {aboutMe.map((item, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-secondary transition-all group"
            >
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-900 border border-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-3xl">
            <span className="text-xl sm:text-2xl">📍</span>
            <span className="text-base sm:text-lg">Giza, Egypt</span>
          </div>
        </div>
      </div>
    </section>
  );
}