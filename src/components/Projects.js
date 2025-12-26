import React from 'react';

const Projects = () => {
    return (
        <section className="scroll-mt-28" id="projects">
            <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-3xl font-black text-[#4a3b2a] flex items-center gap-3">
                    <span className="material-symbols-outlined text-clash-gold text-4xl shadow-sm rounded-lg bg-white p-1" style={{ fontVariationSettings: "'FILL' 1" }}>swords</span>
                    Battle Log
                </h2>
                <div className="bg-white border-2 border-clash-gold px-4 py-1 rounded-full text-sm font-bold text-[#8d6e46] shadow-sm">
                    Recent Matches
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group bg-white rounded-[2rem] border-[6px] border-clash-gold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div className="h-48 bg-clash-purple-light relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        <div className="absolute top-4 right-4 bg-clash-purple text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-white shadow-sm z-10 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">star</span>
                            Special Challenge
                        </div>
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Fintech mobile application dashboard" src="/COCProject.png" alt="COC Website" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <div className="bg-clash-gold text-[#4a3b2a] text-[10px] font-black px-2 py-0.5 rounded inline-block uppercase mb-1">Ranked Match</div>
                            <h3 className="text-2xl font-black drop-shadow-md">Game-Inspired Portfolio System (Clash of Clans Universe)</h3>
                        </div>
                    </div>
                    <div className="p-6 bg-white flex-1 flex flex-col">
                        <p className="text-[#6d5635] font-medium mb-6 leading-relaxed">
                            Complete reimagining of my personal portfolio using Clash-of-Clans-style UI patterns such as collectible cards, progress bars, rarity levels, and quest-based navigation. The project explores how familiar game mechanics can make professional information more engaging without sacrificing clarity or usability.
                        </p>
                        <div className="mt-auto flex justify-between items-center">
                            <div className="flex -space-x-2">

                            </div>
                            <a href="https://manas-coc.vercel.app">
                                <button className="clash-btn bg-clash-gold text-[#4a3b2a] border-b-[4px] border-clash-gold-dark hover:brightness-110 active:border-b-0 rounded-xl px-5 py-2 text-sm font-extrabold uppercase tracking-wide shadow-md">
                                    Open Chest
                                </button></a>
                        </div>
                    </div>
                </div>
                <div className="group bg-white rounded-[2rem] border-[6px] border-clash-gold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div className="h-48 bg-orange-100 relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-white shadow-sm z-10 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">key</span>
                            Course Quest
                        </div>
                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Design system library preview" src="/CEProject.png" alt="Code-Escape" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                            <div className="bg-orange-500 text-white text-[10px] font-black px-2 py-0.5 rounded inline-block uppercase mb-1">Challenge</div>
                            <h3 className="text-2xl font-black drop-shadow-md">Group Project : Immersive Coding Escape</h3>
                        </div>
                    </div>
                    <div className="p-6 bg-white flex-1 flex flex-col">
                        <p className="text-[#6d5635] font-medium mb-6 leading-relaxed">
                            Code Escape was designed as a learning system rather than a lesson platform. Game mechanics like progression, rewards, and themed environments were used to reduce friction and increase sustained engagement. The project explores how interaction design can turn problem-solving into an intrinsically motivating experience.
                        </p>
                        <div className="mt-auto flex justify-between items-center">
                            <div className="flex -space-x-2">

                            </div>
                            <a href="https://code-escape09.netlify.app">
                                <button className="clash-btn bg-clash-gold text-[#4a3b2a] border-b-[4px] border-clash-gold-dark hover:brightness-110 active:border-b-0 rounded-xl px-5 py-2 text-sm font-extrabold uppercase tracking-wide shadow-md">
                                    Open Chest
                                </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
