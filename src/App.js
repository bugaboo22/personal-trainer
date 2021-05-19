import './App.css';
import "./Sidebar.css";
import Sidebar from './Components/Sidebar';
import Trainings from './Components/Trainings';
import Calender from './Components/Calender';
import CustomerList from './Components/CustomerList';
import{ BrowserRouter as Router,Switch,Route } from 'react-router-dom';
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
