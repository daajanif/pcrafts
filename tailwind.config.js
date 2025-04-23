/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      // Your Astro & JS/TS files
      './src/**/*.{astro,html,js,jsx,ts,tsx}',
  
      // Include Flowbite's JS-based utilities
      './node_modules/flowbite/**/*.js'
    ],
    theme: {
      extend: {
        // Colors and existing theme extensions
        colors: {
          primary: {
            50:  '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626', // ← red‑600
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
          secondary: {
            50:  '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b', // slate‑500
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
          accent: {
            50:  '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6', // teal‑500
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          },
        },
        fontFamily: {
          sans:    ['Inter var', 'system-ui', 'sans-serif'],
          heading: ['Montserrat',  'system-ui', 'sans-serif'],
          // Add Arabic font family for RTL
          arabic:  ['TheYearofTheCamel', 'Inter var', 'system-ui', 'sans-serif'],
        },
        // Add RTL-specific spacing utilities
        margin: {
          'r-auto': 'margin-left: auto; margin-right: 0;',
          'l-auto': 'margin-right: auto; margin-left: 0;',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'), // your existing plugin
      require('flowbite/plugin'),         // add Flowbite
  
      // Add RTL plugin - creates 'rtl:' variant for RTL-specific styling
      function({ addVariant }) {
        // Add 'rtl' variant
        addVariant('rtl', '[dir="rtl"] &');
        
        // Add 'ltr' variant for explicit LTR styling
        addVariant('ltr', '[dir="ltr"] &');
      }
    ],
  };