/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-down': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-out-up': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
    }
    },
  },
  plugins: [],
}
