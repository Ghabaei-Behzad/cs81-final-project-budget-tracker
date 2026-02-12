// Behzad Ghabaei
// CS 81 - JavaScript
// App.js - index.css
// BudgetTracker App
// Instructor Seno
// Feb. 11, 2026

# Project Documentation (README.md)

# Project Summary
This Personal Budget Tracker is a React-based web application designed to help users manage their financial data with precision and ease. It serves as a comprehensive showcase of modern front-end coding, emphasizing efficient state management and a styled user interface. The application allows users to log both income and expenses, providing a precise calculation of their total financial standing. This tool allows users to track their spending and observe a "danger" or "success" color indicator on the provided data list. The charts that are provided separate the Profits from Costs with different colors, and the data list provided is saved to storage memory and becomes a data chart with dates included of each input transaction. 

# Key Features and Functionality
The application features a financial dashboard that updates instantly as data is entered using React’s reactive state system. It includes robust form validation to prevent data entry errors, ensuring that only positive numbers and descriptive text are accepted into the ledger. Data persistence is handled by the browser's LocalStorage API, meaning that a user's financial history is preserved even after closing the browser or refreshing the page. Additionally, the UI utilizes CSS animations of button wiggling, and conditional styling to provide visual assistance on whether the budget is in a surplus or a deficit.

# Technologies Used
The core logic of the application is built using React, functional components and hooks like useState for internal data and useEffect for lifecycle management. JavaScript features are used extensively, like higher-order functions with methods we learned like .filter() and .reduce() for obtaining totals from data arrays. The CSS code includes Flexbox and CSS Grid for a great layout.

# Instructions for Use
To begin using the Budget Tracker, enter a 
1. "Description" in the box of your transaction,
2. and the dollar "Amount" into the input fields.
3. Select whether the entry is "Income" (adding to your balance) or an "Expense" (subtracting from your balance) using    the toggle buttons.
4. Click the "Add Transaction" button to save the entry, which will appear in the "History" list below
   We will update our total balance automatically.
5.To remove an entry, click the small "×" button located on the right side of each transaction of the "History" list.
 

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
