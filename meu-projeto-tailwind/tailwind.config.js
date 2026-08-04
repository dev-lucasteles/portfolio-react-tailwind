module.exports = {
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          to: { left: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(15) forwards',
        blink: 'blink 0.75s step-end infinite',
      },
    },
  },
}