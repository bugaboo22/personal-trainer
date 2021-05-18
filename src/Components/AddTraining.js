import React from 'react';
import { useState, useEffect } from 'react';
import Trainings from './Trainings';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CustomerList from './CustomerList';


// FUNCTION TO ADD CUSTOMER
function AddTraining(props) {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({
        date: '',
        duration: '',
        activity: '',
        customer: props.link,
    });

    const inputChanged = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})
    }
    
    const handleSave = () => {
        props.addTraining(training);
        setOpen(false);
      } 

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add a new training
            </Button>
             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New training</DialogTitle>
            <DialogContent>
          <TextField
            id="datetime-local"
            margin="dense"
            label=""
            name="date"
            type="datetime-local"
            value={training.date}
            onChange={inputChanged}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Duration"
            name="duration"
            value={training.duration}
            onChange={inputChanged}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Activity"
            name="activity"
            value={training.activity}
            onChange={inputChanged}
            fullWidth
          />
        </DialogContent>

                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
                </DialogActions>
            </Dialog>
        </div>

    );

}

export default AddTraining;