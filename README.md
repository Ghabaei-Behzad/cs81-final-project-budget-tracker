// Behzad Ghabaei
// CS 81 - JavaScript
// App.js - index.css
// BudgetTracker App
// Instructor Seno
// Feb. 11, 2026
// url https://github.com/Ghabaei-Behzad/cs81-final-project-budget-tracker.git

# Project Documentation (README.md)

# Project Summary
This Personal Budget Tracker is a React-based web application designed to help users manage their financial data with (integers or floating) numbers. It serves as a showcase of modern front-end coding, emphasizing hooks and state management and a CSS file for the user interface. The application allows users to log both income and expenses, providing a precise calculation of their total financial data. This tool allows users to track their spending and observe a "red" or "green" color indicator on the provided data list. There are charts that are provided that separate the Profits from Costs with different colors, and the data list provided is saved to storage memory and becomes a data table with dates included of each input transaction. 
     While developing this project, we used CRUD which means create, read, update and delete.  This manages our data in the development lifecycle. Create means adding new data or records, Read means retrieve data for viewing reports, Update means editing the posts, and Delete means removing unwanted records. We could have installed and added chart.js features. 
     The Project Requirements were fulfilled such as writing the program in React.js and
including HTML in the BudgetTracker.js form and styles.css for a user friendly interface.
We used DOM manipulation where we delete the history, also were importing useState and useEffect from React
which allows interactivity with the user. Lastly, we deployed our files to Github and included this README.md file with four inquiry responses.

# Key Features and Functionality
The application features a financial dashboard that updates as data is entered using React’s reactive state system. It includes form validation to prevent data entry errors, ensuring that only positive numbers and descriptive text are accepted into the ledger. Data persistence is handled by the browser's LocalStorage API, meaning that a user's financial history is preserved even after closing the browser or refreshing the page. Additionally, the UI utilizes CSS animations like a button that wiggles, and conditional styling like (an active blue button) to provide visual assistance. The colors tell the user when the input is in a surplus or a deficit.
We have incorporated calculations, using js methods, data persistence with local storage, css with flexbox, and grid, and the Dom can update a list with adding or removing transactions.

# Technologies Used
The technology of the application is built using React, functional components and hooks are used, like useState for internal data, and useEffect for lifecycle management. Included are JavaScript features, such as higher-order functions with methods we learned such as .filter() and .reduce() and .map() for obtaining totals from data arrays. The CSS code includes Flexbox and CSS Grid for a nice layout. We incorporated React.js, javascript Es6+, html5, css3.  We included higher order functions like map, filter, and reduce, react hooks like useState, and useEffect, and finally form validation.

# Instructions for Use
Install dependencies like "npm install" and run "npm start" then follow these instructions.
To begin using the Budget Tracker, enter a word or sentence under "Add New Transaction" in the "Description" box. 
1. Add a "Description" in the box of your transaction,
2. and add the dollar "Amount" into the next input field.
3. Select whether the entry is "Income" (adding to your balance) or an "Expense" (subtracting from your balance) using the toggle buttons.
4. Click the "Add Transaction" button to save the entry, which will appear in the "History" list below.
This can update our total balance. Other useful features are knowing the sum of the amount of Income and the sum of Expenses. These two colored charts (green and red) give a useful analysis of the data we will enter.
5. To remove an entry, click the small "×" button located on the right side of each transaction of the "History" list.  Each box under "History" which is your new list, is also edge colored red or green.

##  Project files
Our project files include: App.js - BudgetTracker.js - styles.css

## Screen shot

 

//The comments below are from the previous React App. Ignore these comments below//-------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
