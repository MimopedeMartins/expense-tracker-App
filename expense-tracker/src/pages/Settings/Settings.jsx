import Sidebar from '../../component/Sidebar/Sidebar';
import './Setting.css';

export function Settings() {
  return (
    <div className="setting-page">
      <Sidebar />
      <main className="settings">
        <h1>Settings</h1>
      </main>
    </div>
  );
}