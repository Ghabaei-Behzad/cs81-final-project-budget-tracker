// Behzad Ghabaei
// CS 81 - JavaScript
// final-project-web-app
// Instructor Seno
// Feb. 11, 2026

import React, { useState, useEffect } from 'react';

/**
 * PERSONAL BUDGET TRACKER
 * This application demonstrates mastery of React Hooks, Higher-Order Functions,
 * Form Validation, and LocalStorage persistence.
 */

const App = () => { // const BudgetTracker
  // --- STATE MANAGEMENT ---
  
  // Initialize state from localStorage or an empty array if no data exists
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('budget_data');
    return saved ? JSON.parse(saved) : [];
  });

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // 'income' or 'expense'
  const [error, setError] = useState('');

  // --- SIDE EFFECTS (Persistence) ---

  // useEffect acts as an observer; whenever [transactions] changes, 
  // we sync the data to the browser's localStorage.
  useEffect(() => {
    localStorage.setItem('budget_data', JSON.stringify(transactions));
  }, [transactions]);

  // --- BUSINESS LOGIC & CALCULATIONS ---

  // Utilizing Higher-Order Functions (reduce) to calculate totals
  // This demonstrates an understanding of array prototype methods.
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpenses;

  // --- EVENT HANDLERS ---

  const handleAddTransaction = (e) => {
    e.preventDefault(); // Prevents page reload (standard DOM manipulation/event handling)

    // Form Validation Logic
    if (!description.trim() || !amount || parseFloat(amount) <= 0) {
      setError('Please provide a valid description and a positive amount.');
      return;
    }

    // Creating a new transaction object
    const newTransaction = {
      id: Date.now(), // Unique ID for React keys
      description,
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleDateString()
    };

    // Functional State Update: Appending new object to the array
    setTransactions([newTransaction, ...transactions]);

    // Reset Form Fields
    setDescription('');
    setAmount('');
    setError('');
  };

  const deleteTransaction = (id) => {
    // Higher-Order Function: Filter
    // We return a new array excluding the item with the matching ID.
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // --- UI RENDERING ---

  return (
    <div className="container">
      <header className="header">
        <h1>Budget Visualizer</h1>
        <div className="balance-card">
          <span>Current Balance</span>
          <h2 className={balance >= 0 ? 'pos' : 'neg'}>${balance.toFixed(2)}</h2>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="stats-grid">
        <div className="card income">
          <h4>Income</h4>
          <p>+${totalIncome.toFixed(2)}</p>
        </div>
        <div className="card expense">
          <h4>Expenses</h4>
          <p>-${totalExpenses.toFixed(2)}</p>
        </div>
      </div>

      {/* Input Form */}
      <section className="form-section">
        <h3>Add New Transaction</h3>
        <form onSubmit={handleAddTransaction}>
          {error && <p className="error-msg">{error}</p>}
          <input 
            type="text" 
            placeholder="Description (e.g., Grocery, Salary)" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input 
            type="number" 
            placeholder="Amount" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="radio-group">
            <button 
              type="button" 
              className={type === 'income' ? 'active' : ''} 
              onClick={() => setType('income')}
            >Income</button>
            <button 
              type="button" 
              className={type === 'expense' ? 'active' : ''} 
              onClick={() => setType('expense')}
            >Expense</button>
          </div>
          <button type="submit" className="submit-btn">Add Transaction</button>
        </form>
      </section>

      {/* Dynamic List Rendering */}
      <section className="history">
        <h3>History</h3>
        <ul className="transaction-list">
          {transactions.length === 0 && <p className="empty">No transactions yet.</p>}
          {transactions.map((t) => (
            <li key={t.id} className={`item ${t.type}`}>
              <div className="item-info">
                <strong>{t.description}</strong>
                <small>{t.date}</small>
              </div>
              <div className="item-amount">
                <span>{t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}</span>
                <button onClick={() => deleteTransaction(t.id)} className="del-btn">×</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App; //export default BudgetTracker;

//This is the React code below
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
