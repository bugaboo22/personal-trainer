import './App.css';
import './Header';
import CustomerList from './Components/CustomerList';
import AddCustomer from './Components/AddCustomer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import{ BrowserRouter,Switch,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
       <AppBar position="static">
      <Toolbar>
          <Typography variant="h6">
            Personal trainer
          </Typography>
        </Toolbar>
      </AppBar>
    <CustomerList/>
    
  
     </div>
     
    
  );
}

export default App;
