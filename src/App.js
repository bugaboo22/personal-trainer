import './App.css';
import "./Sidebar.css";
import Sidebar from './Components/Sidebar';
import Customers from './Components/Customers';
import AddCustomer from './Components/EditCustomer';
import Trainings from './Components/Trainings';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import{ BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';




function App() {
  return (
    <div className="App">    
    <h1>Personal trainer</h1>
       <>
       <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Customers} />
          <Route path="/Trainings" component={Trainings} />
          <Route path="/Add customer" component={AddCustomer} />
        </Switch>
      </Router>
      </>
     
    </div>
    
  
    
     
     
    
  );
}

export default App;
