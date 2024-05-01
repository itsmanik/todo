/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "main-color": "#001111",
                "secondary-color": "#002828",
                "accent-color": "#0D938C",
                "white-grey": "#E4E4E4",
            },
        },
    },
    plugins: [],
};
