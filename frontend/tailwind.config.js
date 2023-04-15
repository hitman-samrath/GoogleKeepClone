/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{js,jsx}", "./src/Auth/*.{js,jsx}", "./src//Notes/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                'tnr': ['"Times New Roman"'],
                'cursive': ['cursive', 'calibri', 'monospace', 'Georgia']
            },
            colors: {
                'instapurple': '#e1306c',
                'linkedinblue': '#1e4fd6',
                'githubgreen': '#086d15',
            },
            screens: {
                'xs': '400px',
            },
        },

    },
    plugins: [],
}