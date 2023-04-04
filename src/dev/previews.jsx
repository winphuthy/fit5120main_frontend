import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import HomePage from "../page/HomePage";
import AppFooter from "../templates/modules/views/AppFooter";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/HomePage">
                <HomePage/>
            </ComponentPreview>
            <ComponentPreview path="/AppFooter">
                <AppFooter/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews