/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerHome: "url('/assets-home/banner.jpg')",
        bannerServices: "url('/assets-services/banner.jpg')",
        bannerAboutUs: "url('/assets-aboutus/banner.jpg')",
        bannerContact: "url('/assets-contact/banner.png')",
      },
      boxShadow: {
        shadowForm: 'rgba(66, 152, 117, 0.5) 0px 7px 29px 0px;'
      }
    },
  },
  plugins: [],
}

