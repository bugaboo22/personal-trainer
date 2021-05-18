import './App.css';
import "./Sidebar.css";
import Sidebar from './Components/Sidebar';
import Customers from './Components/Customers';
import AddCustomer from './Components/AddCustomer';
import Trainings from './Components/Trainings';
import Calender from './Components/Calender';
import CustomerList from './Components/CustomerList';
import AddTraining from './Components/AddTraining';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import{ BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import Header from './Components/Header';


<Route path="/Calender" component={Calender} /> 

function App() {
  return (
    <div className="App">    
      
       <Header/>
       <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={CustomerList} />
          <Route path="/Trainings" component={Trainings} /> 
          <Route path="/Calender" component={Calender} /> 
        </Switch>
      </Router>
      
     
    </div>
    
  
    
     
     
    
  );
}

export default App;
