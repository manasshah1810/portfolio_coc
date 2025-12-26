import React from 'react';

const Experience = () => {
    return (
        <section className="scroll-mt-28" id="experience">
            <div className="flex items-center justify-between mb-8 px-2">
                <h2 className="text-3xl font-black text-[#4a3b2a] flex items-center gap-3">
                    <span className="material-symbols-outlined text-clash-gold text-4xl shadow-sm rounded-lg bg-white p-1" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
                    Quest Log
                </h2>
            </div>
            <div className="flex flex-col gap-4">
                <div className="relative bg-white border-[4px] border-clash-gold rounded-2xl p-4 md:p-6 shadow-[0_6px_0_0_rgba(220,162,8,0.2)] hover:transform hover:-translate-y-1 hover:shadow-[0_10px_0_0_rgba(220,162,8,0.3)] transition-all">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-clash-blue-sky rounded-xl border-2 border-blue-200 flex items-center justify-center shadow-inner">
                                <span className="material-symbols-outlined text-3xl text-blue-500">work</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-[#4a3b2a]">Mobile App Developer Intern</h3>
                                <p className="text-[#8d6e46] font-bold text-sm">HopHead</p>
                            </div>
                        </div>
                        <div className="bg-clash-wood-light border border-clash-wood-dark px-3 py-1 rounded-lg text-xs font-bold text-[#8d6e46] flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">calendar_month</span>
                            May 2024 – June 2024
                        </div>
                    </div>
                    <div className="mt-4 pl-0 md:pl-[4.5rem]">
                        <p className="text-[#6d5635] font-medium leading-relaxed">
                            Completed a short-term intensive mission developing mobile app features. Contributed to the core codebase and assisted in app development.
                        </p>
                    </div>
                    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm transform rotate-6">
                        COMPLETED
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
