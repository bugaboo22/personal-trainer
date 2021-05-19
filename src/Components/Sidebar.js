import React from 'react';

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
  
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul onClick={showSidebar}>
        <li><Link to="/">Customers</Link></li>
        <li><Link to="/Trainings">Trainings</Link></li>    
        <li><Link to="/Calender">Calender</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar; 