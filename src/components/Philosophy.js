import React from 'react';

const Philosophy = () => {
    return (
        <section className="scroll-mt-28" id="philosophy">
            <div className="bg-[#fff8e1] border-[6px] border-[#dccba6] rounded-[2rem] p-8 md:p-12 relative shadow-xl transform hover:scale-[1.01] transition-transform duration-500">
                <div className="absolute top-4 left-4 w-4 h-4 bg-[#c4b395] rounded-full shadow-inner border border-[#a8987d]"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-[#c4b395] rounded-full shadow-inner border border-[#a8987d]"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#c4b395] rounded-full shadow-inner border border-[#a8987d]"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-[#c4b395] rounded-full shadow-inner border border-[#a8987d]"></div>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-[#4a3b2a] mb-6 uppercase tracking-wide flex items-center justify-center gap-3">
                        <span className="material-symbols-outlined text-[#8d6e46]">verified</span>
                        Design Philosophy
                    </h2>
                    <p className="text-lg text-[#6d5635] font-medium leading-relaxed mb-6">
                        I believe that great design is like a well-balanced game: easy to learn, hard to master, and always rewarding. My strategy involves deep user research (scouting), iterative prototyping (skirmishes), and pixel-perfect execution (victory).
                    </p>
                    <p className="text-lg text-[#6d5635] font-medium leading-relaxed">
                        I don't just push pixels; I build systems that scale. Whether it's a small startup skirmish or an enterprise war, I bring the right tools to the battlefield.
                    </p>
                    <div className="mt-10 flex justify-center">
                        <img className="opacity-50 mix-blend-multiply w-32" data-alt="Stylized signature of Manas Shah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiCr7ga9irDYn-kwdn_ZlFnI_dHFmhKrbOaOlippDnBHcNIdIs5e_7CJL3I5zLdQIqgV-rPYezvDOv14tewTa3Ls9qSwJABVerLmZ4FxUEXfktIuAJQQVYMlR529SfY1Szdf21Vx1nUnKXTVdMAYcJBYrU61P6xJt_NJ3Wxz2d44wvxcoMKe3hv4pFI3TApk4UU2jLLlIN8V9u-kVirfkGRyptcE80oGsxwRp9xGTO_rUAjHUF6_SKBZlEg27y5QNPgE2A3doIx5Qu" alt="Signature" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
