import { useState } from 'react';
import { Button, Step, StepLabel, Stepper } from '@mui/material';

const StepperFRT = ({ steps, handleNextStep, handlePrevStep, activeStep, files }) => {
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <Button disabled={activeStep === 0} onClick={handlePrevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNextStep} disabled={files.length === 0}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default StepperFRT;