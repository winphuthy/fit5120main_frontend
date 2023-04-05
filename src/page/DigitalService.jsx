import './DigitalService.css'
import React from "react";
import settingEmail from '../const/DigitalService/SettingEmail.json';
import settingMyGov from '../const/DigitalService/SettingMyGov.json';
import settingMedicare from '../const/DigitalService/SettingMedicare.json';
import {StepContent} from "../components/StepContent";
import '../images/digitalService/settingEmail/step1.png';

export const DigitalService = () => {

    const emailRef = React.createRef();
    const mygovRef = React.createRef();
    const medicareRef = React.createRef();

    function handleClickEmailRef() {
        emailRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    function handleClickMyGov() {
        mygovRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    function handleClickMedicareRef() {
        medicareRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="slide">
            <div>
                <div className="sidebar">
                    <ul>
                        <li onClick={handleClickEmailRef} >Setting up an Email</li>
                        <li onClick={handleClickMyGov}>Setting up your MyGov</li>
                        <li onClick={handleClickMedicareRef}>Setting up your Medicare</li>
                        {/*<li>Linking mygov with centrelink</li>*/}
                    </ul>
                </div>
            </div>
            <div className='maincontent'>
                <div ref={emailRef}>
                    <div>
                        {/*{content}*/}
                        <h2>Info on setting up emails:</h2>
                        <p>We will provide detailed instructions to help users set up their email account details on
                            this page, including choosing an email service provider, registering a new email account,
                            setting a password, creating an email address, and logging into their email account.</p>
                    </div>
                    <div style={{margin: "30px 0px"}}>

                        <StepContent content={settingEmail} />
                    </div>
                </div>

                <div ref={mygovRef}>
                    <div>
                        <h2>Info on setting up myGov:</h2>
                        <p>Mygov is an online service platform provided by the Australian government to facilitate people's access to various government services, including taxation and centrelink, among others. The platform offers a wide range of features, and we will provide detailed instructions on how to register for a mygov account and explain how to use the various functions available on the platform.</p>
                    </div>
                    <div style={{margin: "30px 0px"}}>
                        <StepContent content={settingMyGov} />
                    </div>
                </div>

                <div ref={medicareRef}>
                    <div>
                        <h2>Info on setting up medicare:</h2>
                        <p>We will provide users with detailed information on how to create a medical insurance account,
                            including guidance on registering for an account, selecting a plan, and applying for
                            insurance. In addition, we will also introduce users to the basics of medical insurance,
                            such as how medical insurance works, its limitations, and requirements.</p>
                    </div>
                    <div style={{margin: "30px 0px"}}>
                        <StepContent content={settingMedicare} />
                    </div>
                </div>

            </div>
        </div>
    );
}