import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import HomePage from "../page/HomePage";
import AppFooter from "../templates/modules/views/AppFooter";
import ProductValues from "../templates/modules/views/ProductValues";
import {StepContent} from "../components/StepContent";
import {DigitalService} from "../page/DigitalService";
import {MuiNavBar} from "../components/MuiNavBar";
import {Whatsapp} from "../page/Whatsapp";
import {Zoom} from "../page/Zoom";
import {Facebook} from "../page/Facebook";
import {DigitalCommunication} from "../page/DigitalCommunication";
import {FaceTime} from "../page/FaceTime";
import {SlideCard} from "../components/swiper/SlideCard";
import {Develop} from "../Develop";
import SwiperTestTwo from "../components/swiper/SwiperTestTwo";

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
            <ComponentPreview path="/MuiNavBar">
                <MuiNavBar/>
            </ComponentPreview>
            <ComponentPreview path="/Whatsapp">
                <Whatsapp/>
            </ComponentPreview>
            <ComponentPreview path="/Zoom">
                <Zoom/>
            </ComponentPreview>
            <ComponentPreview path="/Facebook">
                <Facebook/>
            </ComponentPreview>
            <ComponentPreview path="/DigitalCommunication">
                <DigitalCommunication/>
            </ComponentPreview>
            <ComponentPreview path="/FaceTime">
                <FaceTime/>
            </ComponentPreview>
            <ComponentPreview path="/SlideCard">
                <SlideCard/>
            </ComponentPreview>
            <ComponentPreview path="/Develop">
                <Develop/>
            </ComponentPreview>
            <ComponentPreview path="/SwiperTestTwo">
                <SwiperTestTwo/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews