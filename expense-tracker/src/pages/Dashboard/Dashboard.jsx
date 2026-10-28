import Sidebar from '../../component/Sidebar/Sidebar';
import ExpenseTrackerLogo from '../../assets/images/icons/expense-tracker-logo.svg';
import NumberOfExpensesIcon from '../../assets/images/icons/number-of-expenses-icon.svg';
import AverageExpenseIcon from '../../assets/images/icons/average-expense.svg';
import spendingChart from '../../assets/images/icons/spending-chart.png';
import './Dashboard.css';

export function Dashboard({expenses}) {
    let totalExpenses = 0;
    let numberExpenses = 0;
    const recentExpenses = expenses.slice(-3).reverse();

    expenses.forEach((totalExpense) => {
        totalExpenses += totalExpense.amount;
        numberExpenses++;
    });


    let averageExpenses = numberExpenses === 0 ? 0 : totalExpenses / numberExpenses;

    return (
        <div className="dashboard">
            <Sidebar />


            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div className="dashboard-header-title">
                        <h1>Dashboard</h1>
                    </div>

                    <div className="dashboard-header-date">
                        <p>April 5, 2023</p>
                    </div>
                </div>

                <div className="dashboard-overview">
                    <div className="overview-card overview-card-total-spent">
                        <div className="overview-card-icon">
                            <img src={ExpenseTrackerLogo} alt="Expense Tracker Logo" />
                        </div>
                        <div className="overview-card-content">
                            <h3>Total Spent</h3>
                                <p>${totalExpenses.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="overview-card overview-card-number-of-expenses">
                        <div className="overview-card-icon">
                            <img src={NumberOfExpensesIcon} alt="Number of Expenses Icon" />
                        </div>
                        <div className="overview-card-content">
                            <h3>Number of Expenses</h3>
                            <p>{numberExpenses}</p>
                        </div>
                    </div>
                    <div className="overview-card overview-card-average-expense">
                        <div className="overview-card-icon">
                            <img src={AverageExpenseIcon} alt="Average Expense Icon" />
                        </div>
                        <div className="overview-card-content">
                            <h3>Average  Expense</h3>
                            <p>${averageExpenses.toFixed(2)}</p>
                        </div>
                    </div>
                </div>

                <div className="dashboard-content">
                    <div className="spending-by-category-content">
                        <div className="spending-by-category-header">
                            <h2>Spending by Category</h2>
                        </div>

                        <div className="spending-by-category">
                            <div className="spending-chart-header">

                                <img src={spendingChart} alt="Spending Chart" />
                                <h2>$1,244.50</h2>
                                <span>Total</span>
                            </div>

                            <div className="spending-chart-container">
                                {expenses.map((expenseChart) => (
                                    <div className="chart-spending-info">
                                        <p className='active-color-content'></p>
                                        <p className='spending-item'>{expenseChart.category}</p>
                                        <p className='spending-percentage'>{expenseChart.percentage}%</p>
                                        <p className="chart-spending-amount">{expenseChart.amount.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="recent-expenses">
                        <div className="recent-expenses-header">
                            <h2>Recent Expenses</h2>
                        </div>

                        <div className="recent-expenses-list">
                            {recentExpenses.map((recent) => (
                                <div className="recent-expense-item" key={recent.id}>
                                    <div className="recent-expense-item-info">
                                        <div className='recent-expense-list-icon'>
                                            <span aria-hidden="true">💸</span>
                                        </div>
                                        <div className='recent-expense-list-content'>
                                            <h4>{recent.description}</h4>
                                            <p>{recent.date}</p>
                                        </div>
                                    </div>

                                    <div className="recent-expense-item-date">
                                        <p className='expense-recent-money'>${Number(recent.amount).toFixed(2)}</p>
                                        <p className='expense-recent-date'>{recent.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}