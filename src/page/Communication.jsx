import './Communication.css'
import React from "react";
import settingWhatsApp from '../const/Communication/SettingWhatsApp.json';
import settingZoom from '../const/Communication/SettingZoom.json';
import settingFaceBook from '../const/Communication/SettingFacebook.json';
import settingFaceTime from '../const/Communication/SettingFaceTime.json';
import {StepContent} from "../components/StepContent";
import '../images/communication/image42.jpg';

export const Commnication = () => {

    const whatsappRef = React.createRef();
    const zoomRef = React.createRef();
    const facebookRef = React.createRef();
    const facetimeRef = React.createRef();

    function handleClickWhatsAppRef() {
        whatsappRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    function handleClickZoomRef() {
        zoomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    function handleClickFaceBookRef() {
        facebookRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    function handleClickFaceTimeRef() {
        facetimeRef.current.scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <div className="slide">
            <div>
                <div className="sidebar">
                    <ul>
                    <li onClick={handleClickWhatsAppRef}>Setting up Whatsapp</li>
                        {/*<li onClick={skypeHandleClick}>Setting up Skype call</li>*/}
                        <li onClick={handleClickZoomRef}>Setting up Zoom</li>
                        <li onClick={handleClickFaceBookRef}>Setting up Facebook</li>
                        <li onClick={handleClickFaceTimeRef}>How to use FaceTime</li>
                        {/*<li>Linking mygov with centrelink</li>*/}
                    </ul>
                </div>
            </div>
            <div className='maincontent'>
            <h2 ref={whatsappRef}>Info on what digital communication applications can do:</h2>
            <p>In this page, we’ll be going through the steps you might need to take to install and begin utilising
                    digital communications applications. Before you start looking for the application you’d like to
                    learn about, here’s some examples on what a digital communications application can do.</p>
                <p>1. Messaging platforms</p>
                <p>2. Audio calling </p>
                <p>3. Video calling</p>
                <p>4. Group audio calling</p>
                <p>5. Group video calling</p>
                <p>6. Sharing of photos/videos</p>
                <p>Using a digital communications application will enable all the above mentioned features so long as
                    you are connected to a working internet connection. If you’re interested in getting started with a
                    digital application, have a look down below to see which may best suit your needs, and let’s get
                    learning!</p>
                <div ref={whatsappRef}>
                    <div>
                        {/*{content}*/}
                        <h2>Info on setting up WhatsApp:</h2>
                        <p>WhatsApp is a messaging app that allows users to send text messages, voice messages, photos, videos,
                    and documents, as well as make voice and video calls, to other users who have the app installed on
                    their smartphones. WhatsApp can be used for personal and business communication, as well as for
                    group chats and broadcasting messages to multiple users.</p>
                    </div>
                    <div style={{margin: "30px 0px"}}>

                        <StepContent content={settingWhatsApp} />
                    </div>
                </div>

                <div ref={zoomRef}>
                    <div>
                        <h2>Info on setting up Zoom:</h2>
                        <p>Zoom is a video conferencing platform that enables users to hold group calling sessions. It can be used for video and audio meetings, screen sharing, recording, and just simply chatting. Zoom is most commonly used for conference calls, but is also oftentimes used for large family calls, especially for including overseas family members.</p>
                    </div>
                    <div style={{margin: "30px 0px"}}>
                        <StepContent content={settingZoom} />
                    </div>
                </div>

                <div ref={facebookRef}>
                    <div>
                        <h2>Info on setting up FaceBook:</h2>
                        <p>Facebook is a social media platform that allows you to create your own personal profile. It will allow you to connect with your families and friends, allowing you to share photos and videos, and view photos and videos by other users. It helps people keep one another updated with what’s going on in their lives. Facebook can also be used as a messaging service to communicate with your facebook friends.</p>
                    </div>
                    <div style={{margin: "30px 0px"}}>
                        <StepContent content={settingFaceBook} />
                    </div>
                </div>


                <div ref={facetimeRef}>
                    <div>
                        <h2>Info on setting up FaceTime:</h2>
                        <p>FFacetime is a video and audio calling platform. It also allows for group calls and group video calls, meaning that multiple people can be connected to the same call at the same time. It is only available on apple devices (e.g. iPhones, iPads, Macbooks). For an alternative if you are not using an Apple device, please reference our “WhatsApp” section for details regarding a similar tool. </p>
                    </div>
                    <div style={{margin: "30px 0px"}}>
                        <StepContent content={settingFaceTime} />
                    </div>
                </div>


            </div>
        </div>
    );
}