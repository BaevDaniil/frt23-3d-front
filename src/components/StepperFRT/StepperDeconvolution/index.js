import {useState} from "react";
import {Button, Step, StepLabel, Stepper, TextField, Typography} from "@mui/material";
import {DropzoneAreaBase} from "material-ui-dropzone";
import {show_images} from "../../../hooks/showImages";
import StepperFRT from '../../StepperFRT';
import TifCompare from '../TifCompare';
// import tifFile from "../../../../src/Avr1s_px50_r_200_0nm.tif";
// import "react-tiff/dist/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const StepperDeconvolution = ({handleBackClick}) => {
    const [files, addFiles] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Load image', 'Preprocessing', 'Model selection & Deconvolution', 'Save results'];
    const [currentPage, setCurrentPage] = useState(0);
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

    const handlePageChange = (pageIndex, e) => {
        e.preventDefault();
        setCurrentPage(pageIndex);
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
                        acceptedFiles={['.tif', '.tiff']}
                    />
                        

                    </>
                );
            case 1:
                console.log(files)
                return (
                    <>
                        <div className="images__preview">
                            {files.map((file) => (
                                <TifCompare img_1={file} img_2={file}/>
                            ))}
                        </div>
                        {/* <TifViewer imageSource={tifFile}/> */}
                    </>
                );


            case 2:
                return (
                    <>
                        <div className="images__preview">
                            {files.map((file) => (
                                <TifCompare img_1={file} img_2={file}/>
                            ))}
                        </div>
                    </>
                );
                case 3:
                    return (
                        <>
                            <div className="images__preview">
                            {files.map((file) => (
                                <TifCompare img_1={file} img_2={file}/>
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
export default StepperDeconvolution;