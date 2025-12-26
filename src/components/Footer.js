import React from 'react';

const Footer = () => {
    return (
        <footer className="pt-10 pb-10 text-center" id="contact">
            <div className="inline-block bg-[#4a3b2a] text-[#f5e6c8] p-6 rounded-[2rem] border-4 border-[#6d5635] shadow-2xl max-w-md w-full relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full border-2 border-white flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors shadow-md group">
                    <span className="material-symbols-outlined text-white text-sm font-bold group-hover:scale-110 transition-transform">close</span>
                </div>
                <h3 className="text-xl font-black uppercase mb-4 tracking-wide text-white">Contact Settings</h3>
                <div className="flex flex-col gap-3">
                    <a className="bg-[#6d5635] hover:bg-[#806640] p-3 rounded-xl flex items-center justify-center gap-2 transition-colors border-b-4 border-[#3e3123] active:border-b-0 active:translate-y-1" href="mailto:hello@manas.design">
                        <span className="material-symbols-outlined text-clash-gold">mail</span>
                        <span className="font-bold">manasshah1210@gmail.com</span>
                    </a>
                    <div className="flex gap-3">
                        <a className="flex-1 bg-[#0077b5] hover:bg-[#006097] p-3 rounded-xl flex items-center justify-center gap-2 transition-colors border-b-4 border-[#004b75] active:border-b-0 active:translate-y-1 text-white font-bold" href="www.linkedin.com/in/manasshah1007">
                            LinkedIn
                        </a>
                        <a className="flex-1 bg-[#333] hover:bg-[#222] p-3 rounded-xl flex items-center justify-center gap-2 transition-colors border-b-4 border-[#111] active:border-b-0 active:translate-y-1 text-white font-bold" href="https://github.com/manasshah1810">
                            GitHub
                        </a>
                    </div>
                </div>
                <p className="text-xs text-[#8d6e46] mt-6 font-medium">
                    Player ID: #MN5H4H • Server: Mumbai
                </p>
            </div>
        </footer>
    );
};

export default Footer;
