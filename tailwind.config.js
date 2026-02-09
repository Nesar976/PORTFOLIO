/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0a192f',
                'navy-light': '#112240',
                'navy-lighter': '#233554',
                teal: '#64ffda',
                slate: '#8892b0',
                'slate-light': '#a8b2d1',
                white: '#e6f1ff',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #64ffda, 0 0 10px #64ffda' },
                    '100%': { boxShadow: '0 0 20px #64ffda, 0 0 30px #64ffda' },
                }
            }
        },
    },
    plugins: [],
}
