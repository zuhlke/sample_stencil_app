# Venus
Venus is a Stencil.js application, created by following instructions detailed here: https://stenciljs.com/docs/getting-started

Stencil.js is a library offering a set of very useful minimal apis for efficiently creating Custom Elements (Web Components, as they are more widely referred to)

Venus is a "Component", not a "Web App". Even though that may be the case, it currently comes with all possible output targets ('dist', 'dist-custom-elements' and 'www' being the most important). 
These output targets are described here: https://stenciljs.com/docs/output-targets

Aside from Venus (which is a "Component Library", ready to be used by other projects), you will also see some "example-consumer-apps" written in a number of different frameworks, for example: React, Angular (a few more might be added in the future). Their purpose is to play the role of "test-harness" applications, so that we can test out our Stencil.js-generated custom elements (Web Components)

## Setting up Venus
**In a nutshell, the commands you need are:**

To create the application: 

`npm init stencil`

To install the required dependencies:

`npm install`

To run the application

`npm run start`

To build the application, for all possible output targets,
so that our test "consumer" apps can make use of them:

`npm run build`

## Setting up an example app

**example-react-app**

This is an app created by create-react-app. Simply put, its only purpose is to consume and display our custom elements (Web Components) as they are provided by Venus. 

To create the application: 

`npx create-react-app example-react-app`

Step into the created react app's folder:

`cd example-react-app`

To install Venus (Stencil) components:
(point this to the folder where the Venus package.json is located)

`npm install venus file:../../venus`

To run the application

`npm run start`