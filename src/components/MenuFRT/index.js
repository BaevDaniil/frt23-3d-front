import { useState } from "react";
import {Button } from "@mui/material";
import StepperDeconvolution from "../StepperFRT/StepperDeconvolution";
import StepperNetwork from "../StepperFRT/StepperNetwork";
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MenuFRT = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const handleBackClick = () => {
    setSelectedOption("");
  };

  return (
    <div>
      {selectedOption === "" && (
        <div>
          <h2 variant="h4" align="center" className="menu-header">
            Menu
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }} className="menu-container">
            <Button
              variant="outlined"
              // type="button" 
              className="menu-options"
              onClick={() => handleOptionClick("Deconvolution")}
            >
              Deconvolution
            </Button>
            <Button
              // type="button"
              className="menu-options"
              variant="outlined"
              color="success"
              onClick={() => handleOptionClick("Neural Networks")}
            >
              Neural Networks
            </Button>
          </div>
        </div>
      )}
      {selectedOption === "Deconvolution" && <StepperDeconvolution handleBackClick={handleBackClick}/>}
      {selectedOption === "Neural Networks" && <StepperNetwork handleBackClick={handleBackClick}/>}
    </div>
  );
};

export default MenuFRT;