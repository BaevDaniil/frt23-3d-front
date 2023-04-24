import {useState} from "react";
import {DropzoneAreaBase} from "material-ui-dropzone";
import {Button, Step, StepLabel, Checkbox, FormControlLabel, Stepper, TextField, Typography} from "@mui/material";
import {show_images} from "../../../hooks/showImages";
import StepperFRT from '../../StepperFRT';
import { TIFFViewer } from "react-tiff";
import TifCompare from '../TifCompare';
import '../stepper.css'

const StepperNetwork = ({handleBackClick}) => {
    const [filename, setFilename] = useState('');
    const [beadSize, setBeadSize] = useState(200);
    const [scale, setScale] = useState(1);
    const [maximizeIntensity, setMaximizeIntensity] = useState(false);
    const [makeGaussianBlur, setMakeGaussianBlur] = useState(false);
    const [files, addFiles] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Load image', 'Preprocessing', 'Model selection & Deconvolution', 'Save results'];
  
    const handleNextStep = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handlePrevStep = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
    }

    const handleSliderChange = (e, newValue) => {
        setScale(newValue);
    }
  
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
                        acceptedFiles={['.tif', '.tiff']}
                    />
                        

                    </>
                );
            case 1:
                console.log(files)
                return (
                    <>
            <FormControlLabel
              control={
                <Checkbox
                  checked={maximizeIntensity}
                  onChange={(event) => setMaximizeIntensity(event.target.checked)}
                  name="maximize-intensity"
                  color="primary"
                />
              }
              label="Maximize intensity"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={makeGaussianBlur}
                  onChange={(event) => setMakeGaussianBlur(event.target.checked)}
                  name="make-gaussian-blur"
                  color="primary"
                />
              }
              label="Make Gaussian blur"
            />
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
                        <TextField
                                    id="beadSize"
                                    label="Bead size"
                                    variant="outlined"
                                    placeholder="Enter a bead size"
                                    fullWidth
                                    margin="normal"
                                    name="beadSize"
                                    onChange={(e) => setFilename(e.target.value)}
                                    value={beadSize}
                        />
                        <div className="slider-container">
                            <label htmlFor="scale-slider">
                            Resolution XY Z(nm/pxl): {Math.floor(scale * 100)}
                            </label>
                            <input type="range" min="0.1" max="2" step="0.1" value={scale} onChange={handleSliderChange} />
                        </div>
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
                            <TextField
                                id="filename"
                                label="Filename"
                                variant="outlined"
                                placeholder="Enter a file name"
                                fullWidth
                                margin="normal"
                                name="filename"
                                onChange={(e) => setFilename(e.target.value)}
                                value={filename}
                            />
                            <div className="images__preview">
                            {files.map((file) => (
                                <TIFFViewer key={file.id} tiff={file.data} paginate='bottom' buttonColor='#337fd6' onClick={handleButtonClick}/>
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
                    name="Neural Networks"
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