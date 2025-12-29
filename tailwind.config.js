/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                teal: {
                    500: '#14b8a6', // Approximate teal
                    600: '#0d9488',
                    700: '#0f766e',
                    900: '#134e4a', // Darker for text
                },
                maroon: {
                    600: '#be123c', // Approximate pink/maroon
                    700: '#9f1239',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
