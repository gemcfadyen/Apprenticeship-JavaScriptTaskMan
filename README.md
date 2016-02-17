# Apprenticeship-JavaScriptTaskMan
A TO-DO List manager


To Setup a similar JavaScript project:

- Create a package.json by doing `npm init`. Accept the defaults to the questions, but set test to "jasmine"
- Install Babel for translating ecma6 to ecma5
`npm install babel-preset-es2015 --save-dev`
`npm install babel-preset-es2015 --save-dev`
- Install a simple http server to run the app on
`npm install http-server --save-dev`

Open package.json and add the following under scripts:

"scripts": {
  "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
    "start": "http-server"
}

Create a `build` directory, where the generated (downgraded) javascript will be stored after babel has been run


Install the testing dependencies - add `jasmine-es6` to the dev-dependencies in package.json

Generate the jasmine test folder by doing `jasmine init`

To run the tests in a headless fashion, do `npm test`
