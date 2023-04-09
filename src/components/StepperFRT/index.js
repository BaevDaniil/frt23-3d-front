import {useState} from "react";
import {Button, Step, StepLabel, Stepper, TextField, Typography} from "@mui/material";
import {DropzoneAreaBase} from "material-ui-dropzone";
import {show_images} from "../../hooks/showImages";

const StepperFRT = () => {
    function getSteps() {
        return ['Files', 'Preprocessing', 'Deconvolution'];
    }
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [files, addFiles] = useState([]);
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
            default:
                return 'unknown step';
        }
    }
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const completedFun = () =>{
        console.log('Completed')
        handleNext()
    }
    return(
    <div>
        {activeStep === steps.length ? (
            <Typography variant="h4" align="center">
                Loading...
            </Typography>
        ) : (
            <>
            <Typography variant="h4" align="center">
                Deconvolution
            </Typography>
                <form>{getStepContent(activeStep)}</form>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </Button>
                <Button
                    disabled={files.length === 0}
                    variant="contained"
                    color="primary"
                    onClick={
                        activeStep === steps.length - 1 ? completedFun : handleNext
                    }
                >
                    {activeStep === steps.length - 1 ? 'Done' : 'Next'}
                </Button>
            </>
        )}

        <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
                const labelProps = {};
                const stepProps = {};
                return (
                    <Step {...stepProps} key={index}>
                        <StepLabel {...labelProps}>{step}</StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    </div>
    );
};
export default StepperFRT;