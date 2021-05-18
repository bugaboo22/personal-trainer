import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { forwardRef } from 'react';
import moment from 'moment';
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AddTraining from './AddTraining';
import Moment from 'react-moment';

function Trainings() {

    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        getTrainings();
      }, []);

    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }
    /*
     const deleteTraining = (rowData) => {
      if (window.confirm('Are you sure?')) {
      fetch(rowData.links[0].href, {
          method: 'DELETE'
      })
      .then(_ =>  getTrainings())
      .then(_ => setMsg('Training was deleted succesfully'))
      .then(_ => setOpen(true))
      .catch(err => console.error(err))
     }
    } */
    const deleteTraining = (selectedRow) => {
      console.log(selectedRow.id)
      fetch('https://customerrest.herokuapp.com/api/trainings/' + selectedRow.id,
        { method: 'DELETE' })
        .then(response => {
          if (response.ok) {
            getTrainings();
            setMsg("Training deleted succesfully!");
            
          } else {
            alert('Something went wrong in deletion');
          }
        }
        )
        .catch(err => console.error(err))
    }

    const  columns = [
      
      {title: 'Activity', field: 'activity'},
      { title: 'Date', field: 'date',
            render: row => (
                <Moment format="DD.MM.YYYY HH:mm">{row.date}</Moment>
            )
        },
      {title: 'Duration (min)', field: 'duration'},
      {title: 'Firstname', field: 'customer.firstname'},
      {title: 'Lastname', field: 'customer.lastname'}
  ]
    const tableIcons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
      ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

return (
    <div>
      <h2>Trainings</h2>
     
        <div className="ag-theme-material" style={{ height: 600, width: 700, margin: 'auto'  }}>  
        <MaterialTable     
              title="Trainings"
              columns={columns}
              key={trainings}
              data={trainings}
              icons={tableIcons}  
              editable={{
                onRowDelete: oldData =>
                  new Promise((resolve, reject)=> {
                    setTimeout(() => {   
                     deleteTraining(oldData)
                       resolve();
                }, 1000)    
                })
            }}  
              />   
        </div>
    </div>
)


}

export default Trainings;