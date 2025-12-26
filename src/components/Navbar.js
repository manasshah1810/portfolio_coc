import React from 'react';

const Navbar = () => {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky top-4 z-50 flex justify-center w-full px-4 mb-12">
            <div className="bg-white/90 backdrop-blur-sm border-[3px] border-clash-gold rounded-full px-2 py-2 shadow-clash-float flex items-center gap-2 max-w-5xl w-full justify-between md:px-4">
                <div className="flex items-center gap-2 md:gap-3 pl-2">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full border-2 border-clash-gold overflow-hidden bg-clash-wood">
                            <img className="w-full h-full object-cover" data-alt="User avatar profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcVTGOnlfLUt1S2kSu-NisQyoGaXh-IeapzXqO3EjkDndD9kYLWU1vZPJx4lD-nEIL4xRr2OHfUAbF7_7EgsTB1J4cSXTgco96E2bU-GsTbDXpKXHtU2heYu9S9ihhTFZLlLd2cHjZ--VHali1mHB0ZZaXp8ELZ9zHVXbF8bU_2LmrGrO0FBPTdp0GJtMe7WqhIh4K9qHchgLK9Ht3lqzIZnYtO5QJ-eOr1eGQWc5w0-fSgZXVxootao2rj4-zL9yIMXpAU3OQdWAu" alt="User avatar" />
                        </div>
                        <div className="absolute -bottom-1 -right-4 bg-clash-purple text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-white whitespace-nowrap">
                            Max Lvl
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Player</span>
                        <span className="text-sm font-extrabold text-[#4a3b2a] leading-none">Manas Shah</span>
                    </div>
                </div>
                <div className="hidden lg:flex items-center bg-clash-blue-sky/30 rounded-full px-1">
                    <a className="px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-[#6d5635] hover:text-clash-purple transition-colors cursor-pointer" href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
                    <a className="px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-[#6d5635] hover:text-clash-purple transition-colors cursor-pointer" href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
                    <a className="px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-[#6d5635] hover:text-clash-purple transition-colors cursor-pointer" href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a>
                    <a className="px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-[#6d5635] hover:text-clash-purple transition-colors cursor-pointer" href="#education" onClick={(e) => handleScroll(e, 'education')}>Education</a>
                    <a className="px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-[#6d5635] hover:text-clash-purple transition-colors cursor-pointer" href="#certifications" onClick={(e) => handleScroll(e, 'certifications')}>Certifications</a>
                    <a className="px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold text-[#6d5635] hover:text-clash-purple transition-colors cursor-pointer" href="#philosophy" onClick={(e) => handleScroll(e, 'philosophy')}>Philosophy</a>
                </div>
                <a className="clash-btn bg-clash-gold text-[#4a3b2a] border-b-4 border-clash-gold-dark hover:brightness-110 active:border-b-0 rounded-full px-5 py-2 text-sm font-extrabold uppercase tracking-wide flex items-center gap-2 cursor-pointer" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    <span className="hidden sm:inline">Contact</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
