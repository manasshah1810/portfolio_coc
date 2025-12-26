import React from 'react';

const Education = () => {
    return (
        <section className="scroll-mt-28" id="education">
            <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-3xl font-black text-[#4a3b2a] flex items-center gap-3">
                    <span className="material-symbols-outlined text-clash-gold text-4xl shadow-sm rounded-lg bg-white p-1" style={{ fontVariationSettings: "'FILL' 1" }}>map</span>
                    Adventure Path
                </h2>
            </div>
            <div className="relative pl-8 md:pl-10 space-y-8 before:absolute before:left-3 md:before:left-4 before:top-4 before:bottom-4 before:w-1 before:bg-[#e6d0a5] before:rounded-full">
                <div className="relative">
                    <div className="absolute -left-[30px] md:-left-[34px] top-0 w-6 h-6 rounded-full border-4 border-white bg-clash-gold shadow-md z-10 animate-pulse"></div>
                    <div className="bg-white border-[3px] border-clash-gold rounded-xl p-5 shadow-sm">
                        <span className="block text-xs font-black text-clash-purple uppercase mb-1">Current Quest</span>
                        <h3 className="text-lg font-black text-[#4a3b2a] leading-tight mb-1">B.Tech in AI/ML</h3>
                        <p className="text-[#8d6e46] text-sm font-bold mb-2">Honours in Immersive Technology</p>
                        <p className="text-xs text-gray-500">D. J. Sanghvi College of Engineering</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -left-[30px] md:-left-[34px] top-0 w-6 h-6 rounded-full border-4 border-white bg-[#8d6e46] shadow-md z-10"></div>
                    <div className="bg-white/80 border-[2px] border-[#e6d0a5] rounded-xl p-5 shadow-sm opacity-90 hover:opacity-100 transition-opacity">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-black text-[#4a3b2a] leading-tight mb-1">Diploma in CS Engineering</h3>
                                <p className="text-xs text-gray-500">Shri Bhagubhai Mafatlal Polytechnic</p>
                            </div>
                            <span className="bg-[#f0f0f0] text-gray-500 text-[10px] font-bold px-2 py-1 rounded">2025</span>
                        </div>
                        <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm transform rotate-6">
                            COMPLETED
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -left-[30px] md:-left-[34px] top-0 w-6 h-6 rounded-full border-4 border-white bg-[#8d6e46] shadow-md z-10"></div>
                    <div className="bg-white/60 border-[2px] border-[#e6d0a5] rounded-xl p-5 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-black text-[#4a3b2a] leading-tight mb-1">Secondary School (10th)</h3>
                                <p className="text-xs text-gray-500">Pawar Public School, Kandivali</p>
                            </div>
                            <span className="bg-[#f0f0f0] text-gray-500 text-[10px] font-bold px-2 py-1 rounded">2022</span>
                        </div>
                    </div>
                    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm transform rotate-6">
                        COMPLETED
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
