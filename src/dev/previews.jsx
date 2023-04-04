import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import HomePage from "../page/HomePage";
import AppFooter from "../templates/modules/views/AppFooter";
import ProductValues from "../templates/modules/views/ProductValues";

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
        </Previews>
    )
}

export default ComponentPreviews