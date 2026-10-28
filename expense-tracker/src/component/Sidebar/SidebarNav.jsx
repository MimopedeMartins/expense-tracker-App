import dashboardIcon from '../../assets/images/icons/dashboard_icon.png';
import expensesIcon from '../../assets/images/icons/expenses_icon.png';
import addExpenseIcon from '../../assets/images/icons/add_expense_icon.png';
import settingsIcon from '../../assets/images/icons/settings_icon.png';
import { NavLink } from 'react-router-dom';
export function SidebarNav() {
    return (
        <ul>
            <NavLink to="/dashboard" className="sidebar-link">
                <span><img src={dashboardIcon} alt="" width="24" /><li>Dashboard</li></span></NavLink>
            <NavLink to="/expenses" className="sidebar-link">
                <span><img src={expensesIcon} alt="Expenses" width="24" /><li>Expenses</li></span>
            </NavLink>
            <NavLink to="/add-expense" className="sidebar-link">
                <span><img src={addExpenseIcon} alt="Add Expense" width="24" /><li>Add Expense</li></span>
            </NavLink>
            <NavLink to="/settings" className="sidebar-link">
                <span><img src={settingsIcon} alt="Settings" width="24" /><li>Settings</li></span>
            </NavLink>
        </ul>
    )
}