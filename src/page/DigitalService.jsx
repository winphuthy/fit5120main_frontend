import './DigitalService.css'
import DigitalServiceContent from '../const/DigitalServiceContent.json';
import {DigitalServiceSidebar} from "../components/sidebar/DigitalServiceSidebar";

export const DigitalService = () => {

    const content = DigitalServiceContent.map(object => <p>{object.p}</p>)

    return (
        <div className="slide">
            <DigitalServiceSidebar/>
            <div className='main'>
                {content}
            </div>
        </div>
    )
}