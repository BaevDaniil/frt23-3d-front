import MenuFRT from "../../components/MenuFRT";
import StepperFRT from "../../components/StepperFRT";
import { useState } from "react";

const MainPage = () => {
    const [showStepper, setShowStepper] = useState(false);
  
    const handleBackClick = () => {
      setShowStepper(false);
    };
  
    return (
      <div>
        {showStepper ? (
          <StepperFRT onBackClick={handleBackClick} />
        ) : (
          <MenuFRT onButtonClick={() => setShowStepper(true)} />
        )}
      </div>
    );
  };

export default MainPage;