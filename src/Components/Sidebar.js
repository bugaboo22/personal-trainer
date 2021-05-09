import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
        <li><Link to="/Add customer">Add customer</Link></li>
        <li><Link to="/Edit customer">Edit customer</Link></li>
        <li><Link to="Delete customer">Delete customer</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar; 