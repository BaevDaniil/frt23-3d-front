import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import StepperFRT from "../components/StepperFRT";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/StepperPSF">
                <StepperFRT/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews