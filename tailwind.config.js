module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens:{
      xs: '250px',
      sm: '360px',
      md: '700px',
      lg: '1024px',
      xl: '1248px'
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
