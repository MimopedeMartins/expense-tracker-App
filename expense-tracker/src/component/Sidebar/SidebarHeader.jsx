import expenseTrackerLogo from '../../assets/images/icons/expense_tracker_logo.png';
export function SidebarHeader() {
    return (
        <div className="sidebar-header">
            <span><img src={expenseTrackerLogo} alt="" /><h3>ExpenseTracker</h3></span>
        </div>
    );
};