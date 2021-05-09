import './App.css';
import "./Sidebar.css";
import Sidebar from './Components/Sidebar';
import Customers from './Components/Customers';
import AddCustomer from './Components/AddCustomer';
import Trainings from './Components/Trainings';
import EditCustomer from './Components/EditCustomer';
import DeleteCustomer from './Components/DeleteCustomer';
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
          <Route path="/Edit customer" component={EditCustomer} />
          <Route path="/Delete customer" component={DeleteCustomer} />
        </Switch>
      </Router>
      </>
     
    </div>
    
  
    
     
     
    
  );
}

export default App;
