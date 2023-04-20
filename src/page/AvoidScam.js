import './AvoidScam.css';
import AvoidScamContent from '../const/AvoidScamContent.json';

export function AvoidScam() {

    const content = AvoidScamContent.map(value => (
        <p>{value.p}</p>
    ));

    return (
        <div className='avoidScamMain'>
            
        </div>
    )
}