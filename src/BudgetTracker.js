// Behzad Ghabaei
// CS 81 - JavaScript
// final-project-web-app
// Personal Budget Tracker
// BudgetTracker.js
// Instructor Seno
// Feb. 11, 2026

import React, { useState, useEffect } from 'react';

/**
 * PERSONAL BUDGET TRACKER
 * This application demonstrates React Hooks, Higher-Order Functions,
 * Form Validation, and LocalStorage persistence.
 */

const BudgetTracker  = () => { 
  
  /** 
   * --- STATE MANAGEMENT ---
   * Initialize state from localStorage or an empty array if no data exists
   * setter functions are made, 'setSomething'
   */
 
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('budget_data');
    return saved ? JSON.parse(saved) : [];
  });

  /* 
   * The initial state values. useState() 
   * starts with what's inside parenthesis.
   */
  
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // 'income' or 'expense'
  const [error, setError] = useState('');

  /**
   * --- SIDE EFFECTS (Persistence) ---
   * useEffect acts as an observer; whenever [transactions] changes, 
   * we sync the data to the browser's localStorage. It manages side effects in React.
   * dependency array is not omitted. State variable included.
   * transactions will utilize local storage and JSON.
   */
  
  useEffect(() => {
    localStorage.setItem('budget_data', JSON.stringify(transactions));
  }, [transactions]);

  /**
   * --- BUSINESS LOGIC & CALCULATIONS ---
   * Utilizing Higher-Order Functions (.reduce) to calculate totals
   * These are array prototype methods, to obtain balance.
   * .filter method selects elements based on condition.
   * .reduce will return all elements into single value.
   * acc is accumulator, and curr is current value.
   * t is for transaction.
   * we have an array of objects, where each object has at least
   * a "type" and an "amount". 
   * type states are "income" or "expense" 
   * State Variable (type): Holds the current value of the state.
   * acc + curr.amount adds the current transaction's
   * amount to the running total.
   */
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpenses;

  // --- EVENT HANDLERS ---

  const handleAddTransaction = (e) => {
    e.preventDefault(); 
    
    /** 
     * preventDefault method, (above)
     * prevents page reload (standard DOM manipulation/event handling)
     * --Form Validation Logic-- (below)
     * The if statement checks for three potential errors.
     * If any of these are true, the code inside the block runs:
     * .trim removes whitespace from both ends of a string.
     * !amount checks if the "amount" is false (i.e., undefined, null, 0, or an empty string).
     * parseFloat(amount) converts the amount string/value into a
     * floating-point number.
     * It checks if the number is zero or negative. 
     */
    
    if (!description.trim() || !amount || parseFloat(amount) <= 0) {
      setError('Please provide a valid description and a positive amount.');
      return;
    }

    /**
     * Creating a new transaction object
     * unique numeric "id" in  milliseconds.  
     * stores "description" a user's input string.
     * converts "amount" to floating-point 
     * stores the category "type" Income or Expense.
     * current "date" as formatted string.
     */
    const newTransaction = {
      id: Date.now(), // Unique ID for React keys
      description,
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleDateString()
    };

    // Functional State Update: Appending new object to the array
    setTransactions([newTransaction, ...transactions]);

    // Reset Form Fields with our setters
    setDescription('');
    setAmount('');
    setError('');
  };

     /**
      * --Higher-Order Function: Filter--
      * We return a new array excluding the item with the matching ID.
      * this is how we delete.
      * React re-renders with a new, array from .filter method. 
      */
  
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  /**
   * --- UI RENDERING ---
   * <h2> has a Ternary operator and checks to see if balance
   * is greater than or equal to zero. 
   * "posivitve" makes color green "negative" makes color red.
   * balance.tofixed(2) - formatted to 2 decimal places
   */
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

      {/* 
        * Input Form. 
        * purpose of onChange event handler is to update React state when input changes.
        * The "value" property of "input" represents current state value,
        * "e" is for event, 
        * conditional rendering && for error handling (like required).
        */}
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

      {/* Dynamic List Rendering
        * transactions.map is a JavaScript array method that loops
        * through every item in the transactions array.
        * If the transaction type is "income", the className becomes "item income".
        * If it's "expense", it becomes "item expense".
        * to style income and expenses differently in CSS. 
        */}
      <section className="history">
        <h3>History</h3>
        <ul className="transaction-list">
          {transactions.length === 0 && <p className="empty">No transactions yet.</p>}
          {transactions.map((t) => (
            <li key={t.id} className={`item ${t.type}`}>
              <div className="item-info">
                <strong>{t.description + " "}</strong>
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

export default BudgetTracker;
