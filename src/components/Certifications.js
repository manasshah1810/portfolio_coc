import React from 'react';

const Certifications = () => {
    return (
        <section className="scroll-mt-28" id="certifications">
            <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-3xl font-black text-[#4a3b2a] flex items-center gap-3">
                    <span className="material-symbols-outlined text-clash-gold text-4xl shadow-sm rounded-lg bg-white p-1" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                    Trophy Road
                </h2>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-[2rem] border-2 border-white shadow-clash-inset overflow-x-auto">
                <div className="flex gap-8 md:gap-12 justify-start md:justify-center items-center min-w-max pb-4 md:pb-0">
                    <div className="hidden md:block absolute h-2 bg-[#dccba6] rounded-full w-[80%] z-0 top-1/2 -translate-y-1/2 left-10"></div>
                    <div className="relative z-10 flex flex-col items-center gap-4 w-40 group">
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-3xl border-4 border-white shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined text-5xl text-white drop-shadow-md">military_tech</span>
                        </div>
                        <div className="text-center bg-white border border-clash-gold rounded-lg px-3 py-2 shadow-sm relative top-[-10px]">
                            <h4 className="font-bold text-[#4a3b2a] text-sm leading-tight">UI/UX Mastery</h4>
                            <p className="text-[10px] text-[#8d6e46] font-bold uppercase mt-1">Juno School</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
