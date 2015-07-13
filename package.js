Package.describe({
  name: "vilango:browser-detection",
  summary: "Meteorite package that provides browser detection.",
  version: "1.0.4"
});

Package.on_use(function (api) {
    api.export('BrowserDetect');

    api.use('standard-app-packages');
    api.add_files('browser-detection.js', ["client"]);
});
