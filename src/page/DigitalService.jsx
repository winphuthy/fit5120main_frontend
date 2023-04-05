import './DigitalService.css'
import DigitalServiceContent from '../const/DigitalService/SettingEmail.json';
import {DigitalServiceSidebar} from "../components/sidebar/DigitalServiceSidebar";
import {StepContent} from "../components/StepContent";

export const DigitalService = () => {

    // const content = DigitalServiceContent.map(object => <p>{object.p}</p>)

    return (
        <div className="slide">
            <DigitalServiceSidebar/>
            <div className='maincontent'>
                {/*{content}*/}
                <h2>Info on setting up emails:</h2>
                <p>We will provide detailed instructions to help users set up their email account details on this page,
                    including choosing an email service provider, registering a new email account, setting a password,
                    creating an email address, and logging into their email account.</p>
            </div>
            <StepContent
                content={'Step 1: Go to the website of the gmail service provider and click on the Create an account button.'}
                image={'../images/digitalService/settingEmail/step1.png'}
            />
        </div>
    );
}