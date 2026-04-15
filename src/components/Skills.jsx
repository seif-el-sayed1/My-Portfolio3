import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { frontendSkills, backendSkills, additionalSkills } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 75%",
      onEnter: () => {
        gsap.fromTo(cardRefs.current,
          { y: 100, opacity: 0, scale: 0.85 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.06,
            ease: "back.out(1.7)"
          }
        );
      }
    });
  }, []);

  const handleMouseEnter = (e, globalIndex) => {
    const card = cardRefs.current[globalIndex];
    if (!card) return;

    gsap.to(card, {
      scale: 1.08,
      y: -10,
      boxShadow: "0 0 60px rgba(0, 245, 255, 0.5)",
      duration: 0.4,
      ease: "power2.out"
    });

    const icon = card.querySelector('.skill-icon');
    if (icon) gsap.to(icon, { y: -20, scale: 1.25, duration: 0.5, ease: "back.out(2)" });
  };

  const handleMouseLeave = (e, globalIndex) => {
    const card = cardRefs.current[globalIndex];
    if (!card) return;

    gsap.to(card, {
      scale: 1,
      y: 0,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.5,
      ease: "power2.out",
      clearProps: "boxShadow"
    });

    const icon = card.querySelector('.skill-icon');
    if (icon) gsap.to(icon, { y: 0, scale: 1, duration: 0.4 });
  };

  const renderSkills = (skills, title) => {
    const baseIndex = title === "Backend Skills" ? 0 : title === "Frontend Skills" ? 20 : 40;

    return (
      <div className="mb-14 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-center text-secondary">{title}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5 max-w-6xl mx-auto">
          {skills.map((skill, localIndex) => {
            const globalIndex = baseIndex + localIndex;
            return (
              <div
                key={localIndex}
                ref={(el) => (cardRefs.current[globalIndex] = el)}
                className="group relative h-32 sm:h-44 rounded-2xl sm:rounded-3xl bg-zinc-900 border border-white/10 hover:border-secondary overflow-hidden flex flex-col items-center justify-center cursor-pointer"
                onMouseEnter={(e) => handleMouseEnter(e, globalIndex)}
                onMouseLeave={(e) => handleMouseLeave(e, globalIndex)}
              >
                <div className="skill-icon mb-2 sm:mb-4">
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-10 h-10 sm:w-16 sm:h-16 drop-shadow-xl"
                  />
                </div>
                <p className="text-xs sm:text-lg font-semibold text-white group-hover:text-secondary transition-colors text-center px-1">
                  {skill.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {renderSkills(backendSkills, "Backend Skills")}
        {renderSkills(frontendSkills, "Frontend Skills")}
        {renderSkills(additionalSkills, "Additional Tools")}
      </div>
    </section>
  );
}