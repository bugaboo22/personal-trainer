import './App.css';
import Customers from './Components/CustomerList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
       <AppBar position="static">
      <Toolbar>
          <Typography variant="h6">
            Personal trainer
          </Typography>
        </Toolbar>
      </AppBar>
    <Customers/>
    </div>
  );
}

export default App;
