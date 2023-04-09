import { useState } from "react";
import {Typography } from "@mui/material";
import StepperFRT from "../StepperFRT";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuFRT = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {selectedOption ? (
        <button
          variant="contained"
          color="primary"
          type="button" 
          class="btn btn-outline-danger"
          onClick={() => setSelectedOption("")}
        >
          Back
        </button>
      ) : (
        <div>
          <Typography variant="h4" align="center" className="menu-header">
            Menu
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }} className="menu-container">
            <button
              variant="contained"
              color="primary"
              type="button" 
              class="btn btn-outline-primary"
              onClick={() => handleOptionClick("Deconvolution")}
            >
              Deconvolution
            </button>
            <button
            type="button"
            class="btn btn-outline-secondary"
              variant="contained"
              color="primary"
              onClick={() => handleOptionClick("Neural Networks")}
            >
              Neural Networks
            </button>
          </div>
        </div>
      )}
      {selectedOption === "Deconvolution" && <StepperFRT />}
      {selectedOption === "Neural Networks" && (
        <Typography variant="h5" align="center">
          Coming soon...
        </Typography>
      )}
    </div>
  );
};

export default MenuFRT;