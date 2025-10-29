import React, { useState } from "react";
import ".styles/Sidebar.css"; // We'll style it here

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="sidebar-container">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "❌" : "☰"}
        </button>

        <ul className="menu">
          <li><span>🏠</span>{isOpen && " Home"}</li>
          <li><span>🎬</span>{isOpen && " Movies"}</li>
          <li><span>👤</span>{isOpen && " Profile"}</li>
          <li><span>⚙️</span>{isOpen && " Settings"}</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="main-content">
        <h1>Main Content Area</h1>
        <p>This is where your main page content will go.</p>
      </div>
    </div>
  );
};

export default Sidebar;
