import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: "Home", path: "#home" },
    { label: "Skills", path: "#skills" },
    { label: "Projects", path: "#projects" },
    { label: "About", path: "#about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    const linkClass =
        "relative cursor-pointer transition-all duration-300 hover:text-secondary hover:scale-105 " +
        "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 " +
        "after:bg-secondary after:transition-all after:duration-300 hover:after:w-full";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-secondary">
                    Seif<span className="text-white"> Elsayed</span>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-lg">
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => scrollTo(link.path.slice(1))}
                            className={linkClass}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary border-t border-white/10 py-6">
                    <div className="flex flex-col items-center gap-6 text-xl">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.path.slice(1))}
                                className={linkClass}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}