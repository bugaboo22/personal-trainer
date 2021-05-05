import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Trainings() {

    const [trainings, setTrainings] = useState();

    useEffect(() => {
        getTrainings();
      }, []);

    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .catch(err => console.error(err))
    }

    const columns = [
        { field: 'date', sortable: true, filter: true },
        { field: 'duration', sortable: true, filter: true },
        { field: 'activity', sortable: true, filter: true },
        
      
    ]

return (
    <div>
        <div className="ag-theme-material" style={{ height: 600, width: 700, margin: 'auto'  }}>   
          <AgGridReact      
          rowData={trainings}
          columnDefs={columns}
            pagination={true}
          paginationPageSize={8}
          floatingFilter={true}
          suppressCellSelection={true}      
          />
        </div>
    </div>
)


}

export default Trainings;