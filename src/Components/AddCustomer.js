import React from 'react';
import { useState, useEffect } from 'react';
import Customers from './Customers';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// FUNCTION TO ADD CUSTOMER
function AddCustomer(props) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    });

    const newCustomer = (newCustomer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',
        {
          method: 'POST',
          body: JSON.stringify(newCustomer),
          headers: { 'Content-type' : 'application/json'  }
        })
        .then(_ => props.getCustomers())
        .catch(err => console.error(err))
      }

    const inputChanged = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value})
    }

    const handleSave = () => {
        newCustomer(customer);
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
            Add a new customer
            </Button>
             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Customer</DialogTitle>
                <DialogContent> 
                <TextField  
                    margin="dense"
                    label="Firstname"
                    name="firstname"
                    value={customer.firstname}
                    onChange={inputChanged}
                    fullWidth
                />
                <TextField  
                    margin="dense"
                    label="Lastname"
                    name="lastname"
                    value={customer.lastname}
                    onChange={inputChanged}
                    fullWidth
                />
                <TextField  
                    margin="dense"
                    label="Streetaddress"
                    name="streetaddress"
                    value={customer.streetaddress}
                    onChange={inputChanged}
                    fullWidth
                />
                <TextField  
                    margin="dense"
                    label="Postcode"
                    name="postcode"
                    value={customer.postcode}
                    onChange={inputChanged}
                    fullWidth
                />
                <TextField  
                    margin="dense"
                    label="City"
                    name="city"
                    value={customer.city}
                    onChange={inputChanged}
                    fullWidth
                />
                <TextField  
                    margin="dense"
                    label="Email"
                    name="email"
                    value={customer.email}
                    onChange={inputChanged}
                    fullWidth
                />
                <TextField  
                    margin="dense"
                    label="Phone"
                    name="phone"
                    value={customer.phone}
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

export default AddCustomer;