## 🚀 Overview

This project was created using React and Typescript. Unit tests were created using [react-test-library](https://testing-library.com/docs/react-testing-library/intro/) 
and [cypress](https://www.cypress.io/) on the E2E tests. I also used [styled-components](https://styled-components.com/) to create all the styles of the application. 
Global state management was done using [Context](https://react.dev/learn/scaling-up-with-reducer-and-context), native from React. I also used other useful libraries like
[lodash](https://lodash.com/) to deal with debounces, [react-dnd](https://www.npmjs.com/package/react-dnd) to create a drag and drop effect on the `CardLoan` component used 
in the `SuccessPage`. The project also was configurated to use [webpack](https://webpack.js.org/) to deal better with packages management.

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
    - enums: here you can find the enums used on the application
    - hooks: here you can find all the custom hooks used on the application
    - interfaces: here you can find all the interfaces used on the application
    - services: here you can find all the services used on the application
    - utils: here you can find all the utils functions used on the application
  - components: here you can find all the components used on the application
  - context: here you can find the context used on the application
  - pages: here you can find all the pages on the application

  **Inside each folder you can algo find a folder called `__tests__`. In this folder you check the unit tests for each file**

### 🤔 How to run the application

To run the application, follow the following commands:

  - In the root `personal-loan` run `npm i`
    - After install all the packages run `npm start`
    - Open the application on your browser. Ex: [http://localhost:3000](http://localhost:3000/)

### 🤔 How to run unit tests

To run the unit tests, follow the following commands:

  - In the root `personal-loan` run `npm test`
    - If you want to run a specific unit test you can use `npm test {relative-path}`. Ex: `npm test src/common/hooks/__tests__/useIsmobile.test.ts`

### 🤔 How to run E2E tests

To run the E2E tests, follow the following commands:
  - Open a terminal and run the application with `npm start`
  - After that, open another terminal and run the following command `npm run cypress:open`
    - The cypress cli should appears, now you need to select the option to run E2E and run the `specs` created
