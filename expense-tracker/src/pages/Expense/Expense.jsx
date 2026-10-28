import Sidebar from '../../component/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EditExpense } from '../../component/Sidebar/EditExpense';
import './Expense.css';

export function Expense({ expenses, setExpenses }) {
  const [editingExpense, setEditingExpense] = useState(null);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const updateDeleteExpense = (expense) => {
    const newExpenses = expenses.filter((expenseDelete) => {
      return expenseDelete.id != expense.id;
    });

    setExpenses(newExpenses);
  };

  const handleUpdateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id
          ? updatedExpense
          : expense
      )
    );

    setEditingExpense(null);
  };

  // Search
  const searchExpense = (event) => {
    setSearch(event.target.value);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.description
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  return (
    <div className="expenses-page">

      <Sidebar />

      <main className="expenses-main">

        <div className="expenses-header">
          <h1>Expenses</h1>

          <button
            className="add-expense-btn"
            onClick={() => navigate('/add-expense')}
          >
            + Add Expense
          </button>
        </div>

        <div className="expense-controls">

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search expenses..."
              value={search}
              onChange={searchExpense}
            />
          </div>

          <select className="category-filter">
            <option>All Categories</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Others</option>
          </select>

        </div>

        <div className="expenses-card">

          <div className="table-header">
            <span>Date</span>
            <span>Description</span>
            <span>Category</span>
            <span>Amount</span>
            <span>Actions</span>
          </div>

          {filteredExpenses.map((expense) => (
            <div className="expense-row" key={expense.id}>

              <span>{expense.date}</span>

              <span>{expense.description}</span>

              <span className={`category ${expense.category.toLowerCase()}`}>
                {expense.category}
              </span>

              <strong>
                ${expense.amount.toFixed(2)}
              </strong>

              <div className="expense-actions">

                <button>•••</button>

                <button
                  onClick={() => setEditingExpense(expense)}
                >
                  ✎
                </button>

                <button
                  onClick={() => updateDeleteExpense(expense)}
                >
                  🗑️
                </button>

              </div>

            </div>
          ))}

          <div className="expenses-footer">

            <span>
              Showing {filteredExpenses.length} of {expenses.length} expenses
            </span>

            <div className="pagination">
              <button>←</button>
              <button className="current-page">1</button>
              <button>2</button>
              <button>→</button>
            </div>

          </div>

        </div>

      </main>

      {editingExpense && (
        <EditExpense
          expense={editingExpense}
          onClose={() => setEditingExpense(null)}
          onUpdate={handleUpdateExpense}
        />
      )}

    </div>
  );
}
