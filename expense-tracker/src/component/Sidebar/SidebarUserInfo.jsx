import userIcon from '../../assets/images/icons/image.png';
export function SidebarUserInfo() {
    return (
        <div className="user-info">
            <div className="user-avatar">
                <img src={userIcon} alt="User Avatar" />
            </div>
            <div className="user-logout">
                <p>John Doe</p>
                <button>Logout</button>
            </div>
        </div>
    )
};