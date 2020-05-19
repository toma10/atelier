const defaultConfig = require("tailwindcss/defaultConfig")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      maxWidth: {
        container: "126rem",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultConfig.theme.fontFamily.sans],
        serif: ["Roboto", ...defaultConfig.theme.fontFamily.serif],
      },
    },
  },
  variants: {
    opacity: [...defaultConfig.variants.opacity, "group-hover"],
  },
  plugins: [require("@tailwindcss/ui")],
}
