import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(cardRef.current, 
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1, ease: "back.out(1.4)" }
        );
      }
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-secondary mb-3">Work Experience</h2>
          <p className="text-gray-400 text-xl">Where I turned code into real impact</p>
        </div>

        <div ref={cardRef} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-secondary/60 transition-all">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-3xl font-bold">Backend Developer</h3>
              <p className="text-2xl text-secondary mt-1">Neon</p>
            </div>
            <div className="text-right">
              <p className="text-gray-300">Aug 2025 – Present</p>
              <p className="text-sm text-gray-500">Part-time • Remote • Cairo, Egypt</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Node.js", "Express.js", "MongoDB", "Socket.io", "Paymob"].map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-zinc-800 text-sm rounded-full border border-white/10">
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-4 text-gray-300 text-[17px]">
            <li className="flex gap-3">
              <span className="text-secondary mt-1">•</span>
              Built scalable backend systems and high-performance RESTful APIs serving real-time features.
            </li>
            <li className="flex gap-3">
              <span className="text-secondary mt-1">•</span>
              Implemented real-time communication using Socket.io and integrated Paymob payment gateway.
            </li>
            <li className="flex gap-3">
              <span className="text-secondary mt-1">•</span>
              Optimized database queries and improved API response time significantly for high-traffic endpoints.
            </li>
            <li className="flex gap-3">
              <span className="text-secondary mt-1">•</span>
              Maintained clean, modular architecture following best practices and service-driven design.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}