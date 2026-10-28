import './EditExpense.css';
import { useState } from 'react';
import Sidebar from './Sidebar';

export function EditExpense({ expense, onClose, onUpdate }) {
    const [description, setDescription] = useState(expense.description);
    const [amount, setAmount] = useState(expense.amount);
    const [category, setCategory] = useState(expense.category);
    const [date, setDate] = useState(expense.date);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedExpense = {
            ...expense,
            description,
            amount: Number(amount),
            category,
            date
        };

        onUpdate(updatedExpense);
    };
    return (
        <div className="edit-expense-page">
            <Sidebar />
            <main className="edit-expense-main">

                <div className="edit-expense-header">
                    <div>
                        <h1>Edit Expense</h1>
                        <p>Update the details of your expense.</p>
                    </div>
                </div>

                <div className="edit-expense-card">
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Expense Description</label>
                            <input
                                type="text"
                                placeholder="e.g. Grocery shopping"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
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
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Category</label>

                                <select value={category}
                                    onChange={(e) => setCategory(e.target.value)}>
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

                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>

                        <div className="edit-form-actions">
                            <button
                                type="button"
                                className="edit-cancel-btn"
                                onClick={onClose}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="save-changes-btn"
                            >
                                Save Changes
                            </button>
                        </div>

                    </form>
                </div>

            </main>
        </div>
    );
}