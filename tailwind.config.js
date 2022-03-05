module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: [{ min: '100px', max: '805px' }],
      md: [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        { min: '806px', max: '1098px' },
        { min: '868px' },
      ],
      lg: '1100px',
      xl: '1400px',
    },
    extend: {},
  },
  plugins: [],
};
