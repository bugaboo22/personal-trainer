import React from 'react';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function CustomerList() {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        getCustomers();
      }, []);

    const getCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
        .catch(err => console.error(err))
    }

    const columns = [
        { field: 'firstname', sortable: true, filter: true },
        { field: 'lastname', sortable: true, filter: true },
        { field: 'streetaddress', sortable: true, filter: true },
        { field: 'postcode', sortable: true, filter: true, },
        { field: 'city', sortable: true, filter: true },
        { field: 'email', sortable: true, filter: true },
        { field: 'phone', sortable: true, filter: true }
      

    ]

    return (
        <div>

        <div className="ag-theme-material" style={{ height: 600, width: '70%', margin: 'auto' }}>   
          <AgGridReact      
          rowData={customer}
          columnDefs={columns}
            pagination={true}
          paginationPageSize={8}
          floatingFilter={true}
          suppressCellSelection={true}      
          />
        </div>
        </div>
    );

}




export default CustomerList;