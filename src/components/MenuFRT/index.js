import { useState } from "react";
import {Typography } from "@mui/material";
import StepperDeconvolution from "../StepperFRT/StepperDeconvolution";
import StepperNetwork from "../StepperFRT/StepperNetwork";
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
          <h2 variant="h4" align="center" className="menu-header">
            Menu
          </h2>
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
      {selectedOption === "Deconvolution" && <StepperDeconvolution />}
      {selectedOption === "Neural Networks" && <StepperNetwork />}
    </div>
  );
};

export default MenuFRT;