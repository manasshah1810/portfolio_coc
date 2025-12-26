import React from 'react';

const Hero = () => {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative pt-6 md:pt-12" id="hero">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-5/12 perspective-1000 animate-float">
                    <div className="relative bg-clash-wood-light border-[6px] border-clash-gold rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:rotate-1">
                        <div className="bg-[#d1c4e9] p-4 flex justify-between items-center border-b-4 border-clash-gold">
                            <h2 className="text-[#4a0072] font-black text-lg tracking-wide uppercase drop-shadow-sm">Legendary Card</h2>
                            <span className="material-symbols-outlined text-[#4a0072]/60">info</span>
                        </div>
                        <div className="p-6 flex flex-col items-center gap-6 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-opacity-50">
                            <div className="relative">
                                <div className="w-32 h-32 rounded-3xl border-4 border-white shadow-lg overflow-hidden bg-gray-200 rotate-2">
                                    <img className="w-full h-full object-cover" data-alt="Portrait of Manas Shah" src="/Me.jpg" alt="Portrait" />
                                </div>
                                <div className="absolute -bottom-3 -right-3 bg-clash-gold border-2 border-white rounded-full p-2 shadow-md z-10">
                                    <span className="material-symbols-outlined text-[#4a3b2a]">brush</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <h1 className="text-3xl font-black text-[#4a3b2a] mb-1">Manas Shah</h1>
                                <p className="text-[#8d6e46] font-bold text-sm uppercase tracking-wide">UI/UX Designer · System Thinker</p>
                            </div>
                            <div className="w-full flex flex-col gap-3 bg-white/50 p-4 rounded-xl border border-clash-wood-dark">
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold w-12 text-right uppercase text-[#6d5635]">Design</span>
                                    <div className="flex-1 h-4 bg-[#e0e0e0] rounded-full overflow-hidden border border-[#bdbdbd] shadow-inner">
                                        <div className="h-full bg-gradient-to-r from-yellow-300 to-orange-400 w-[92%] rounded-full shadow-[inset_0_2px_0_rgba(255,255,255,0.4)]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold w-12 text-right uppercase text-[#6d5635]">System</span>
                                    <div className="flex-1 h-4 bg-[#e0e0e0] rounded-full overflow-hidden border border-[#bdbdbd] shadow-inner">
                                        <div className="h-full bg-gradient-to-r from-purple-300 to-purple-500 w-[85%] rounded-full shadow-[inset_0_2px_0_rgba(255,255,255,0.4)]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold w-12 text-right uppercase text-[#6d5635]">Code</span>
                                    <div className="flex-1 h-4 bg-[#e0e0e0] rounded-full overflow-hidden border border-[#bdbdbd] shadow-inner">
                                        <div className="h-full bg-gradient-to-r from-blue-300 to-blue-500 w-[75%] rounded-full shadow-[inset_0_2px_0_rgba(255,255,255,0.4)]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-7/12 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                    <div className="inline-block px-4 py-1 bg-white border-2 border-clash-gold rounded-full text-xs font-bold text-clash-gold-dark shadow-sm uppercase tracking-widest mb-2 transform -rotate-1">
                        Case Study Series
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#4a3b2a] leading-[1.05] drop-shadow-sm">
                        <img src="/Img1.png" alt='Manas Shah' className="max-w-full h-auto" />
                    </h1>
                    <p className="text-lg md:text-xl text-[#6d5635] font-medium max-w-xl leading-relaxed">
                        A collection of UI/UX quests, system designs, and code experiments. Leveling up products through thoughtful interaction and visual storytelling.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a className="clash-btn bg-clash-gold text-[#4a3b2a] border-b-[6px] border-clash-gold-dark hover:brightness-110 active:border-b-0 rounded-2xl px-8 py-4 text-lg font-black uppercase tracking-wide shadow-xl transform transition-transform cursor-pointer" href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
                            Enter Portfolio
                        </a>
                        <a className="clash-btn bg-white text-[#8d6e46] border-b-[6px] border-[#e0e0e0] hover:bg-gray-50 active:border-b-0 rounded-2xl px-8 py-4 text-lg font-black uppercase tracking-wide shadow-lg transform transition-transform cursor-pointer" href="#skills" onClick={(e) => handleScroll(e, 'skills')}>
                            View Stats
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
