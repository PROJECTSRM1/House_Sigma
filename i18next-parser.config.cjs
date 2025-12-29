module.exports = {
  input: ["src/**/*.{ts,tsx}"],
  output: "src/i18n",
  options: {
    lngs: ["en"],
    defaultLng: "en",
    resource: {
      loadPath: "src/i18n/{{lng}}.json",
      savePath: "src/i18n/{{lng}}.json"
    }
  }
};
