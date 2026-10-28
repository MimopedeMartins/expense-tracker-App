import { useState } from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import './Addexpense.css';

export function AddExpense({ expenses, setExpenses }) {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  function descriptionText(event) {
    setDescription(event.target.value);
  }

  function amountNumber(event) {
    setAmount(event.target.value);
  }

  function categoryText(event) {
    setCategory(event.target.value);
  }

  function dateText(event) {
    setDate(event.target.value);
  }

  function saveExpenses(event) {
    event.preventDefault();

    const newExpenses = [
      ...expenses,
      {
        id: crypto.randomUUID(),
        date: date,
        description: description,
        category: category,
        amount: Number(amount),
        notes: notes
      }
    ];

    setExpenses(newExpenses);

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // Clear all form fields after saving
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
    setNotes('');
  }

  return (
    <div className="add-expense-page">
      {showSuccess && (
        <div className="success-popup">
          <span>✓</span>
          <div>
            <strong>Expense added!</strong>
            <p>Your expense has been added successfully.</p>
          </div>
        </div>
      )}

      <Sidebar />

      <main className="add-expense-main">
        <div className="add-expense-header">
          <div>
            <h1>Add Expense</h1>
            <p>Record a new expense and keep track of your spending.</p>
          </div>
        </div>

        <div className="expense-form-card">
          <form onSubmit={saveExpenses}>
            <div className="form-group">
              <label>Expense Description</label>
              <input
                type="text"
                placeholder="e.g. Grocery shopping"
                value={description}
                onChange={descriptionText}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Amount</label>
                <div className="amount-input">
                  <span>$</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={amountNumber}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Category</label>
                <select
                  value={category}
                  onChange={categoryText}
                >
                  <option value="">Select category</option>
                  <option value="food">Food</option>
                  <option value="transport">Transport</option>
                  <option value="shopping">Shopping</option>
                  <option value="bills">Bills</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={dateText}
              />
            </div>

            <div className="form-group">
              <label>
                Notes <span>(Optional)</span>
              </label>
              <textarea
                placeholder="Add any additional notes..."
                rows="4"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate('/expenses')}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-expense-btn"
              >
                Save Expense
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}