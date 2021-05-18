import React from 'react';
import { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import AddCustomer from './AddCustomer';
import AddTraining from './AddTraining';
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


function CustomerList(props) {
    
    const [customer, setCustomer] = useState([]);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('')

    useEffect(() => {
      getCustomers();
    }, []);

    const getCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
        .catch(err => console.error(err))
    }
    

      const deleteCustomer = (rowData) => {
        if (window.confirm('Are you sure?')) {
        fetch(rowData.links[0].href, {
            method: 'DELETE'
        })
        .then(_ =>  getCustomers())
        .then(_ => setMsg('Customer was deleted succesfully'))
        .then(_ => setOpen(true))
        .catch(err => console.error(err))
       }
      }
     
      const updateCustomer = (newData, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json' },
            body: JSON.stringify(newData)      
          })
          .then(_ => getCustomers())
          .then(_ => setMsg('Customer was updated succesfully'))
          .then(_ => setOpen(true))
          .catch(err => console.error(err))
    }

    
    const newCustomer = (newCustomer) => {
      fetch('https://customerrest.herokuapp.com/api/customers',
      {
        method: 'POST',
        body: JSON.stringify(newCustomer),
        headers: { 'Content-type' : 'application/json'  }
      })
      .then(_ => getCustomers())
      .catch(err => console.error(err))
    } 
  
    const addTraining = (training) => {
      fetch('https://customerrest.herokuapp.com/api/trainings', {
          method: 'POST',
          headers: {'Content-type': 'application/json' },
          body: JSON.stringify(training)
      })
      .then(_ => getCustomers())
      .then(_ => setMsg('Training saved succesfully'))
      .then(_ => setOpen(true))
      .catch(err => console.error(err))
  } 

      const columns=[
        { title: '', 
            render: rowData => <AddTraining addTraining={addTraining} link={rowData.links[0].href} /> },
        { title: 'Firstname', field: 'firstname' },
        { title: 'Lastname', field: 'lastname' },
        { title: 'Streetaddress', field: 'streetaddress' },
        { title: 'Postcode', field: 'postcode'  },
        { title: 'City', field: 'city' },
        { title: 'Email', field: 'email'  },
        { title: 'Phone', field: 'phone'  }, 
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
        <div>
        <AddCustomer newCustomer={newCustomer} />
         
         </div>
         <div style={{ height: 600, width: 900, margin: 'auto' }}>
            <MaterialTable     
              title="Customers"
              columns={columns}
              key={customer.id}
              data={customer}
              icons={tableIcons}
              editable={{ 
                
                onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                       deleteCustomer(oldData)
                        resolve();
                    }, 1000);
                }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                       updateCustomer(newData, oldData.links[0].href)
                        resolve()                 
                  }, 1000);
          }),
               
              }}
              />   
           </div>
        </div>
      
    );

}

export default CustomerList;