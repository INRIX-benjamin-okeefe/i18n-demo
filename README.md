# i18n Demo
This demo is meant to demonstrate various internationalization features available within the OpenCar framework.

## Installation
1. Clone this repo into your OpenCar workspace
2. Launch the OpenCar Simulator, click the "Launch App" menu, then select `i18n-demo`

## Setting a language or locale
Your location is determined by the OpenCar framework based on the language-locale (e.g., `en-us`, `jp-jp`, `en-ca`) value assigned to the `locale` property in the `Config.js` file located in your workspace directory. 

If no `locale` property is defined in your workspace's `Config.js` file, the framework will fallback to the value defined in the `PlatformConfig`.

**To test different languages and locales**, change the `locale` property value in your `Config.js` file, and restart the OpenCar development Simulator.

Simulator support for changing your language settings without having to make code changes is currently in development.
