import React from 'react';
import './SignUp.css';
import Button from '@material-ui/core/Button';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

const SignUp = (props) => {
  const { open, onCloseCallback } = props;

  const [step, setStep] = React.useState(0);

  const getFormByStep = (step) => {
    const forms = [
      <div>
        <DialogContentText>Enter your phone number or email</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email / Number"
          type="email"
          fullWidth
        />
      </div>,
      <div>
        <DialogContentText>Enter a one-time code</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="code"
          label="Code"
          type="code"
          fullWidth
        />
      </div>,
      <div>
        <DialogContentText>Registration</DialogContentText>
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
          <Button onClick={onCloseCallback} color="primary">
            skip
          </Button>
        </DialogActions>
      </div>,
    ];
    step >= forms.length && onCloseCallback();
    return forms[step];
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Sign up</DialogTitle>
      <DialogContent>{getFormByStep(step)}</DialogContent>
      <DialogActions>
        <Button onClick={(e) => setStep(step + 1)} color="inherit">
          Sign up
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default SignUp;
