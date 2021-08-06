# Autocomplete App

This project was created with [React Hooks, Typescript & Material UI](https://github.com/NicolasdRa/autocomplete-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

You may serve it with a static server:

    ### `npm install -g serve`
    ### `serve -s build`
  
    or just run  

    ### `npx serve build`


## General

* Product feed file (products.csv) is parsed and converted into JSON by means of the `react-papaparse` library in a useEffect hook in the `App` component. Alternatively, it could have been processed and served through a mock server like json server, the data fetched in the same useEffect hook and the date fed to the local state in the same way. 

* The app is a `PWA`, and has been optimized bringing lighthouse report values to high scores (96, 98, 100, 100). Further optimization can still be made to bring all values to a 100. 
   
* `Testing` has been implemented with `Jest` and `Enyzme`. Spnapshot tests and a selection of functionality tests have been implemented. Further tests can still be implemented with more time.

## Components and functionality

* Search component filters by product name and price.
* Dynamic pagination implemented with options to display from 5 to 200 rows per page.
* Rows display required info and is expandable showing a photo gallery of the product

## Optional features

* `gender` filter implemented.
* `sale_price` checkbox filter implemented.
* images are natively lazy loaded by browsers
* Being a PWA loaded images are cached and are accessible offline served by the service worker.



