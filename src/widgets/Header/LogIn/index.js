import React from 'react';
import './header.css';
import Button from '@material-ui/core/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

const LogIn = (props) => {
  const { open, onCloseCallback } = props;

  const handlClose = () => {
    onCloseCallback();
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Log in</DialogTitle>
        <DialogContent>
          <DialogContentText>Authorization</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email / Number"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
          />
          <DialogActions>
            <Button onClick={handlClose} color="inherit">
              Log in
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default LogIn;
