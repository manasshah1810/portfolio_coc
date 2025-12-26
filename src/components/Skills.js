import React from 'react';

const Skills = () => {
    return (
        <section className="scroll-mt-28" id="skills">
            <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-3xl font-black text-[#4a3b2a] flex items-center gap-3">
                    <span className="material-symbols-outlined text-clash-gold text-4xl shadow-sm rounded-lg bg-white p-1" style={{ fontVariationSettings: "'FILL' 1" }}>style</span>
                    My Deck
                </h2>
                <div className="bg-white border-2 border-clash-gold px-4 py-1 rounded-full text-sm font-bold text-[#8d6e46] shadow-sm">
                    Avg. Elixir: 8.2
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* Figma */}
                <div className="clash-card-hover group cursor-pointer bg-white border-[4px] border-clash-gold rounded-2xl overflow-hidden relative shadow-[0_6px_0_0_#dca208]">
                    <div className="p-2 h-full flex flex-col items-center">
                        <div className="w-full aspect-square bg-[#fff1f5] rounded-xl border-2 border-pink-200 flex items-center justify-center mb-2 relative overflow-hidden">
                            <span className="material-symbols-outlined text-5xl text-pink-500" style={{ fontVariationSettings: "'FILL' 1" }}>draw</span>
                            <div className="absolute bottom-1 right-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 rounded border border-white">Lvl 8</div>
                        </div>
                        <h3 className="font-extrabold text-[#4a3b2a] text-xs uppercase mb-1">Figma</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden border border-gray-300">
                            <div className="bg-pink-500 h-full w-[80%]"></div>
                        </div>
                    </div>
                </div>
                {/* HTML/CSS/JS */}
                <div className="clash-card-hover group cursor-pointer bg-white border-[4px] border-clash-gold rounded-2xl overflow-hidden relative shadow-[0_6px_0_0_#dca208]">
                    <div className="p-2 h-full flex flex-col items-center">
                        <div className="w-full aspect-square bg-[#fff8e1] rounded-xl border-2 border-orange-200 flex items-center justify-center mb-2 relative overflow-hidden">
                            <span className="material-symbols-outlined text-5xl text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>html</span>
                            <div className="absolute bottom-1 right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 rounded border border-white">Lvl 9.5</div>
                        </div>
                        <h3 className="font-extrabold text-[#4a3b2a] text-xs uppercase mb-1">HTML/CSS/JS</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden border border-gray-300">
                            <div className="bg-orange-500 h-full w-[95%]"></div>
                        </div>
                    </div>
                </div>
                {/* React JS */}
                <div className="clash-card-hover group cursor-pointer bg-white border-[4px] border-clash-gold rounded-2xl overflow-hidden relative shadow-[0_6px_0_0_#dca208]">
                    <div className="p-2 h-full flex flex-col items-center">
                        <div className="w-full aspect-square bg-[#e1f5fe] rounded-xl border-2 border-blue-200 flex items-center justify-center mb-2 relative overflow-hidden">
                            <span className="material-symbols-outlined text-5xl text-blue-500" style={{ fontVariationSettings: "'FILL' 1" }}>code_blocks</span>
                            <div className="absolute bottom-1 right-1 bg-blue-500 text-white text-[10px] font-bold px-1.5 rounded border border-white">Lvl 8</div>
                        </div>
                        <h3 className="font-extrabold text-[#4a3b2a] text-xs uppercase mb-1">React JS</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden border border-gray-300">
                            <div className="bg-blue-500 h-full w-[80%]"></div>
                        </div>
                    </div>
                </div>
                {/* Next JS */}
                <div className="clash-card-hover group cursor-pointer bg-white border-[4px] border-clash-gold rounded-2xl overflow-hidden relative shadow-[0_6px_0_0_#dca208]">
                    <div className="p-2 h-full flex flex-col items-center">
                        <div className="w-full aspect-square bg-[#f5f5f5] rounded-xl border-2 border-gray-300 flex items-center justify-center mb-2 relative overflow-hidden">
                            <span className="material-symbols-outlined text-5xl text-gray-700" style={{ fontVariationSettings: "'FILL' 1" }}>data_object</span>
                            <div className="absolute bottom-1 right-1 bg-gray-700 text-white text-[10px] font-bold px-1.5 rounded border border-white">Lvl 7</div>
                        </div>
                        <h3 className="font-extrabold text-[#4a3b2a] text-xs uppercase mb-1">Next JS</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden border border-gray-300">
                            <div className="bg-gray-700 h-full w-[70%]"></div>
                        </div>
                    </div>
                </div>
                {/* WordPress */}
                <div className="clash-card-hover group cursor-pointer bg-white border-[4px] border-clash-gold rounded-2xl overflow-hidden relative shadow-[0_6px_0_0_#dca208]">
                    <div className="p-2 h-full flex flex-col items-center">
                        <div className="w-full aspect-square bg-[#eceff1] rounded-xl border-2 border-blue-gray-200 flex items-center justify-center mb-2 relative overflow-hidden">
                            <span className="material-symbols-outlined text-5xl text-slate-600" style={{ fontVariationSettings: "'FILL' 1" }}>web</span>
                            <div className="absolute bottom-1 right-1 bg-slate-600 text-white text-[10px] font-bold px-1.5 rounded border border-white">Lvl 8</div>
                        </div>
                        <h3 className="font-extrabold text-[#4a3b2a] text-xs uppercase mb-1">WordPress</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden border border-gray-300">
                            <div className="bg-slate-600 h-full w-[80%]"></div>
                        </div>
                    </div>
                </div>
                {/* Flutter */}
                <div className="clash-card-hover group cursor-pointer bg-white border-[4px] border-clash-gold rounded-2xl overflow-hidden relative shadow-[0_6px_0_0_#dca208]">
                    <div className="p-2 h-full flex flex-col items-center">
                        <div className="w-full aspect-square bg-[#e3f2fd] rounded-xl border-2 border-blue-300 flex items-center justify-center mb-2 relative overflow-hidden">
                            <span className="material-symbols-outlined text-5xl text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>smartphone</span>
                            <div className="absolute bottom-1 right-1 bg-blue-400 text-white text-[10px] font-bold px-1.5 rounded border border-white">Lvl 9</div>
                        </div>
                        <h3 className="font-extrabold text-[#4a3b2a] text-xs uppercase mb-1">Flutter</h3>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden border border-gray-300">
                            <div className="bg-blue-400 h-full w-[90%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
