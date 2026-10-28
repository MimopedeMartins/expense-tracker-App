import { NavLink } from 'react-router-dom';

import { SidebarHeader } from './SidebarHeader.jsx';
import { SidebarNav } from './SidebarNav.jsx';
import { SidebarUserInfo } from './SidebarUserInfo.jsx';

import './Sidebar.css';

export function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-menu">
            <SidebarHeader />
            <SidebarNav />
          </div>
        </div>

        <SidebarUserInfo />
      </div>

      {/* Mobile Top Bar */}
      <header className="mobile-topbar">

        <div className="mobile-logo">
          💼
          <span>ExpenseTracker</span>
        </div>

        <div className="mobile-profile">
          👤
        </div>

      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
          }
        >
          <span>⌂</span>
          <small>dashboard</small>
        </NavLink>

        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
          }
        >
          <span>☷</span>
          <small>Expenses</small>
        </NavLink>

        <NavLink
          to="/add-expense"
          className={({ isActive }) =>
            isActive ? 'mobile-nav-link add-nav-link active' : 'mobile-nav-link add-nav-link'
          }
        >
          <span>+</span>
          <small>Add</small>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
          }
        >
          <span>⚙</span>
          <small>Settings</small>
        </NavLink>

      </nav>
    </>
  );
}

export default Sidebar;