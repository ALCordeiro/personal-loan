## 🚀 Overview

This project was created using React and TypeScript. Unit tests were implemented with [react-test-library](https://testing-library.com/docs/react-testing-library/intro/), 
and [cypress](https://www.cypress.io/) was used for end-to-end (E2E) testing. I also utilized [styled-components](https://styled-components.com/) for styling the entire application. 
Global state management was handled using [Context](https://react.dev/learn/scaling-up-with-reducer-and-context). Additionally, I integrated other useful libraries, such as
[lodash](https://lodash.com/) for handling debouncing, [react-dnd](https://www.npmjs.com/package/react-dnd) to enable drag-and-drop functionality on the `CardLoan` component used 
in the `SuccessPage`. The project was also configured to use [webpack](https://webpack.js.org/) for more efficient package management.

This project is structured as follows:

    src/
    ├── cypress/
    │     └── e2e
    |         └── specs
    ├── src
    │     └── common
    |           └── enums
    |           └── hooks
    |           └── interfaces
    |           └── icons
    |           └── services
    |           └── utils
    |     └── components
    |     └── context
    |     └── pages

  - cypress: 
    - e2e: here you can find all e2e tests;
  - common:
    - enums: Contains the enums used in the application
    - hooks: Contains all the custom hooks used in the application
    - interfaces: Contains all the common interfaces used in the application
    - services: Contains all the services used in the application
    - utils: Contains all the utility functions used in the application
  - components: Contains all the components used in the application
  - context: Contains the context used in the application
  - pages: Contains all the pages in the application

  **Inside each folder you can algo find a folder called `__tests__`. In this folder you have the unit tests for each file**

### 🤔 How to run the application

To run the application, follow these steps:

  - In the root directory of `personal-loan`, run `npm i` to install all dependencies.
    - After all packages are installed, run `npm start`
    - Open the application in your browser. Ex: [http://localhost:3000](http://localhost:3000/)

### 🤔 How to run unit tests

To run the unit tests, follow these steps:

  - In the root directory of `personal-loan`, run `npm test`
    - If you want to run a specific unit test, you can use `npm test {relative-path}`. Ex: `npm test src/common/hooks/__tests__/useIsmobile.test.ts`

### 🤔 How to run E2E tests

To run the end-to-end (E2E) tests, follow these steps:
  - Open a terminal and start the application with `npm start`
  - After that, Open another terminal and run `npm run cypress:open`
    - The Cypress CLI should appear. Select the option to run E2E tests, and then run the desired specs.
