import {useState} from "react";
import {DropzoneAreaBase} from "material-ui-dropzone";
import {show_images} from "../../../hooks/showImages";
import StepperFRT from '../../StepperFRT';
import '../stepper.css'

const StepperNetwork = ({handleBackClick}) => {
    const [files, addFiles] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Load image', 'Preprocessing', 'Model selection & Deconvolution', 'Save results'];
  
    const handleNextStep = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handlePrevStep = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const completedFun = () => {
      console.log('Completed');
      handleNextStep();
    };
    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <>
                        <DropzoneAreaBase
                            fileObjects={files}
                            showPreviewsInDropzone={true}
                            useChipsForPreview
                            onAdd={(newFile) => {
                                newFile[0].id = Math.floor(Math.random() * 10000);
                                console.log(newFile);
                                addFiles((prevFiles) => [...prevFiles, newFile[0]]);
                            }}
                            onDelete={(delFile) => {
                                addFiles((prevFiles) =>
                                    prevFiles.filter((file) => file.id !== delFile.id),
                                );
                            }}
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <div className="images__preview">
                            {files.map((file) => (
                                show_images(<img src={file.data} />, <img src={file.data} />)
                            ))}
                        </div>
                    </>
                );


            case 2:
                return (
                    <>
                        <div className="images__preview">
                            {files.map((file) => (
                                show_images(<img src={file.data} />, <img src={file.data} />)
                            ))}
                        </div>
                    </>
                );

                case 3:
                    return (
                        <>
                            <div className="images__preview">
                                {files.map((file) => (
                                    show_images(<img src={file.data} />, <img src={file.data} />)
                                ))}
                            </div>
                        </>
                    );
            default:
                return 'unknown step';
        }
    }
    return(
    <div>
        <StepperFRT
                    name="Deconvolution"
                    stepContent={getStepContent}
                    steps={steps}
                    handleNextStep={activeStep === steps.length - 1 ? completedFun : handleNextStep}
                    handlePrevStep={handlePrevStep}
                    activeStep={activeStep}
                    files={files}
                    handleBackClick={handleBackClick}
        />
    </div>
    );
};
export default StepperNetwork;