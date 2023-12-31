/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        grass: '#78C850',
        fire: '#F08030',
        water: '#6890F0',
        bug: '#A8B820',
        normal: '#A8A878',
        poison: '#A040A0',
        electric: '#F8D030',
        ground: '#E0C068',
        fairy: '#F0B6BC',
        fighting: '#C03028',
        psychic: '#F85888',
        dark: '#705848',
        rock: '#B8A038',
        dragon: '#7038F8',
        ghost: '#705898',
        steel: '#B8B8D0',
        ice: '#98D8D8',
        flying: '#A890F0',
      },
      textColor: {
        grass: '#78C850',
        fire: '#F08030',
        water: '#6890F0',
        bug: '#A8B820',
        normal: '#A8A878',
        poison: '#A040A0',
        electric: '#F8D030',
        ground: '#E0C068',
        fairy: '#F0B6BC',
        fighting: '#C03028',
        psychic: '#F85888',
        dark: '#705848',
        rock: '#B8A038',
        dragon: '#7038F8',
        ghost: '#705898',
        steel: '#B8B8D0',
        ice: '#98D8D8',
        flying: '#A890F0',
      },
    },
  },
  safelist: [
    'bg-grass',
    'bg-fire',
    'bg-water',
    'bg-bug',
    'bg-normal',
    'bg-poison',
    'bg-electric',
    'bg-ground',
    'bg-fairy',
    'bg-fighting',
    'bg-psychic',
    'bg-dark',
    'bg-rock',
    'bg-dragon',
    'bg-ghost',
    'bg-steel',
    'bg-ice',
    'bg-flying',
    'hover:text-grass',
    'hover:text-fire',
    'hover:text-water',
    'hover:text-bug',
    'hover:text-normal',
    'hover:text-poison',
    'hover:text-electric',
    'hover:text-ground',
    'hover:text-fairy',
    'hover:text-fighting',
    'hover:text-psychic',
    'hover:text-dark',
    'hover:text-rock',
    'hover:text-dragon',
    'hover:text-ghost',
    'hover:text-steel',
    'hover:text-ice',
    'hover:text-flying',
    'text-grass',
    'text-fire',
    'text-water',
    'text-bug',
    'text-normal',
    'text-poison',
    'text-electric',
    'text-ground',
    'text-fairy',
    'text-fighting',
    'text-psychic',
    'text-dark',
    'text-rock',
    'text-dragon',
    'text-ghost',
    'text-steel',
    'text-ice',
    'text-flying',
  ],
  plugins: [],
}
