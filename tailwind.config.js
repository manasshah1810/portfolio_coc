/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "clash-gold": "#f4c025",
                "clash-gold-dark": "#dca208",
                "clash-wood": "#f5e6c8",
                "clash-wood-light": "#fdf6e3",
                "clash-wood-dark": "#e6d0a5",
                "clash-purple": "#9c27b0",
                "clash-purple-light": "#e1bee7",
                "clash-blue-sky": "#e3f2fd",
                "clash-blue-pale": "#f0f9ff",
                "bg-sky-start": "#f0f8ff", // Alice Blue
                "bg-sky-end": "#e1f5fe",   // Light Blue 50
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"]
            },
            boxShadow: {
                'clash-btn': '0 4px 0 0 #dca208',
                'clash-btn-active': '0 0 0 0 #dca208',
                'clash-card': '0 8px 0 0 rgba(0,0,0,0.05), 0 8px 16px rgba(100,149,237,0.1)',
                'clash-card-hover': '0 12px 0 0 rgba(220,162,8,0.3), 0 16px 24px rgba(100,149,237,0.15)',
                'clash-inset': 'inset 0 4px 4px rgba(0,0,0,0.05)',
                'clash-float': '0 10px 30px -10px rgba(100,149,237,0.3)',
            },
            animation: {
                'bounce-slow': 'bounce 3s infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
