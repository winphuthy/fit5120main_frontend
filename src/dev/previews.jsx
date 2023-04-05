import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import HomePage from "../page/HomePage";
import AppFooter from "../templates/modules/views/AppFooter";
import ProductValues from "../templates/modules/views/ProductValues";
import {StepContent} from "../components/StepContent";
import {DigitalService} from "../page/DigitalService";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/HomePage">
                <HomePage/>
            </ComponentPreview>
            <ComponentPreview path="/AppFooter">
                <AppFooter/>
            </ComponentPreview>
            <ComponentPreview path="/ProductValues">
                <ProductValues/>
            </ComponentPreview>
            <ComponentPreview path="/StepContent">
                <StepContent/>
            </ComponentPreview>
            <ComponentPreview path="/DigitalService">
                <DigitalService/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews