module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#b3d9ff',
                    200: '#80bfff',
                    300: '#4da6ff',
                    400: '#1a8cff',
                    500: '#0B84FF',
                    600: '#0073e6',
                    700: '#0066cc',
                    800: '#004d99',
                    900: '#004080',
                },
                secondary: {
                    100: '#fad5b7',
                    200: '#f7ba88',
                    300: '#f39e58',
                    400: '#f08228',
                    500: '#ed7410',
                    600: '#d7690f',
                    700: '#bf5d0d',
                    800: '#a7510c',
                    900: '#8f460a',
                },
                colornav: {
                    100: '#D4ECDD',
                    200: '#b2ddc2',
                },
            },
            boxShadow: {
                // menu: '5px 5px 5px 10px rgba(0, 0, 0, 0.5), -0px -5px 5px 10px rgba(0, 0, 0, 0.5)',
                menu: '0px 0px 5px 1px rgba(0, 0, 0, 0.2)',
                menub: '0px 0px 10px 5px rgba(0, 255, 0, 0.5)',
            },
        },
    },
    variants: [
        'responsive',
        'group-hover',
        'focus-within',
        'first',
        'last',
        'odd',
        'even',
        'hover',
        'focus',
        'active',
        'visited',
        'disabled',
    ],
    plugins: [require('@tailwindcss/forms')],
};
