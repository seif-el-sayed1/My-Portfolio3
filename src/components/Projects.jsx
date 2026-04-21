import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import { projects } from '../data';

const reversedProjects = [...projects].reverse();

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { y: 120, opacity: 0, rotationX: 25 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.08,
        ease: "back.out(1.2)",
        scrollTrigger: { trigger: "#projects", start: "top 70%" }
      }
    );
  }, []);

  const openModal = (project) => {
    setSelected(project);
    setTimeout(() => {
      gsap.fromTo(modalRef.current,
        { scale: 0.6, opacity: 0, y: 80 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.8)" }
      );
    }, 50);
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      scale: 0.6,
      opacity: 0,
      y: 80,
      duration: 0.4,
      onComplete: () => setSelected(null)
    });
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-3 text-secondary">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-10 sm:mb-16 text-base sm:text-xl">
          Click on any project to see full details
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reversedProjects.map((project, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              onClick={() => openModal(project)}
              className="card group bg-zinc-900 border border-white/10 hover:border-secondary rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-52 sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-4 right-4 bg-black/80 text-xs font-bold px-3 py-1 rounded-full">
                  {project.type}
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 line-clamp-3 mb-4 sm:mb-6 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex justify-between items-end">
                  <div className="flex gap-2">
                    {project.skills.slice(0, 3).map((skill, idx) => (
                      <img key={idx} src={skill} className="w-6 h-6 sm:w-7 sm:h-7" alt="" />
                    ))}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); openModal(project); }}
                    className="px-4 cursor-pointer sm:px-6 py-2 sm:py-3 border border-white/30 hover:border-white hover:bg-white/10 text-white rounded-2xl text-sm font-medium transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT MODAL */}
      {selected && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-3 sm:p-4">
          <div
            ref={modalRef}
            className="bg-zinc-900 rounded-3xl max-w-5xl w-full max-h-[95vh] sm:max-h-[92vh] overflow-auto"
          >
            <div className="sticky top-0 bg-zinc-900 border-b border-white/10 px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center z-10">
              <h2 className="text-xl sm:text-3xl font-bold truncate pr-4">
                {selected.title}
              </h2>

              <button
                onClick={closeModal}
                className="shrink-0 p-2 sm:p-3 hover:bg-red-500/20 rounded-full transition-colors"
              >
                <X size={26} />
              </button>
            </div>

            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-48 sm:h-72 md:h-96 object-cover"
            />

            <div className="p-5 sm:p-10">
              <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10">
                {selected.description}
              </p>

              <h4 className="text-secondary text-lg sm:text-xl mb-4 sm:mb-6">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-3 sm:gap-6 mb-8 sm:mb-12">
                {selected.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-zinc-800 rounded-2xl p-2 sm:p-3 hover:scale-110 transition-transform"
                  >
                    <img src={skill} className="w-full h-full object-contain" alt="" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">

                {selected.github && !selected.repoPrivate && (
                  <a
                    href={selected.github}
                    target="_blank"
                    className="flex-1 text-center py-4 sm:py-5 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition text-sm sm:text-base"
                  >
                    Source Code
                  </a>
                )}

                {selected.link && selected.link !== "SOON" && !selected.projectPrivate && (
                  <a
                    href={selected.link}
                    target="_blank"
                    className="flex-1 text-center py-4 sm:py-5 border-2 border-secondary rounded-2xl font-semibold hover:bg-secondary hover:text-black transition text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                )}

                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    className="flex-1 text-center py-4 sm:py-5 border border-white/50 rounded-2xl font-semibold hover:bg-white/10 transition text-sm sm:text-base"
                  >
                    Watch Demo
                  </a>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}